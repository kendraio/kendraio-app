import { get, clone } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

/**
 * Makes form schemas from existing JSON data as a template 
 * Rather than record schemas being fixed in stone with no way to add new properties, 
 * we enable dynamic form creation, that allows building upon existing data.
 * Using existing JSON records as a template, we allow creating new records by using 
 * configurable transformations, adding new fields, generating new UUIDs etc.
 * By transforming existing JSON record objects using user defined templates.
 * Data is changed into templates using configurable rules.
 * 
 * Background context:
 * ===================
 * Users can make schemas using the schema builder, and make records for the schemas.
 * The records can themselves be templates for other forms.
 * Users can make records with the Form block and save them as records for use as templates.
 * Example use-case: a Content Management System (CMS) can have templates for different blocks of content, text, images, videos etc.
 * Using this, the CMS can then use the templates to create new content.
 * The load-schema block can allow adding new JSON properties to these records.
 * We convert template objects so further information can be added to the form.
 * We make new JSON schemas for the Form block to use to fill extra details in, 
 * 
 * @param {object} template - The template object to convert.
 * @param {object} config - The config object to use for conversion.
 * @returns {object} - A JSON schema object.
 */
export function convertTemplateToSchema(template, config) {
  let converter = new Converter(template, config);
  return converter.convert();
}

/**
 * The converter class.
 * 
 * @class Converter
 */
export class Converter {
  blockTypeDefaults;
  convertables;
  template;
  /**
   * Creates an instance of Converter.
   * @param {object} template - The template object to convert.
   * @param {object} config - The config object to use for conversion.
   * @memberof Converter
   */
  constructor(template, config) {
    this.blockTypeDefaults = get(config, 'blockTypeDefaults', {});
    this.convertables = get(config, 'convertables', {});
    this.template = template;
    return this;
  }

  /**
   * Converts the template to a valid JSON schema.
   * 
   * @returns {object} - A JSON schema object.
   * @memberof Converter
   */
  convert() {
    // We are provided with a template object, and a config object.
    // The config should contain an object with two keys: blockTypeDefaults, and convertables
    // blockTypeDefaults defines JSON to inject (and where to inject it).
    // convertables defines simple key renamings to use to transform the template.
    // The template is transformed into a schema object.


    // blockTypeDefaults defines object keys and values. 
    // When the keys are found in the template, they are replaced with the values.  
    // e.g:
    `{
    "c5bfac02-f0b6-4c31-8fdf-18de02667ee9": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "default": "Image",
          "readOnly": true,
          "title": "Image"
        },
        "src": {
          "type": "string",
          "title": "Image URL"
        }
      }
    }
  }`;
    // Convertables are basic mappings for converting renaming keys in the template.
    // e.g:
    `{
    "websitemodel": "website-content"
  }`;

    // First we rename the templates keys using convertKeys,
    // then inject default values for objects with matching keys specified in blockTypeDefaults,
    // we change the array of objects to a dictionary with UUIDs as keys,
    // then we convert the dictionary properties to readOnly JSON schema properties, except for the default values,
    // returning a JSON schema object.
    return this.convertToValidJSONSchema(
      this.arrayOfUUIDsToDict(
        this.applyBlockTypeDefaults(
          this.convertKeys(this.template)
        )
      )
    );
  }

  /**
   * Generates a UUID v4.
   * 
   * @returns {string} - A UUID v4 string.
   * @memberof Converter
   */
  uuid() {
    return uuidv4();
  }

  /**
   * Converts keys in the template using the convertables.
   * 
   * @param {object} object - The object to convert.
   * @returns {object} - A copy of the original object with all keys converted.
   * @memberof Converter
   */
  convertKeys(object) {
    var newObject = clone(object);
    for (var key in object) {
      if (this.convertables[key]) {
        newObject[this.convertables[key]] = this.convertKeys(object[key]);
        delete newObject[key];
      } else {
        if (typeof object[key] === "object") { // Recurse into objects, but not arrays.  Arrays are handled below.  This is a little hacky, but it works for now.  We could also check the type of the value at each level and handle it accordingly.  
          newObject[key] = this.convertKeys(object[key]); // Recurse into objects, but not arrays.  Arrays are handled below.  
        }
        // now we handle arrays:
        if (Array.isArray(object[key])) {
          newObject[key] = []; // Create a new array to hold the converted objects.  
          for (var i = 0; i < object[key].length; i++) { // Loop through the original array of objects.  
            var convertedObject = this.convertKeys(object[key][i]); // Recursively convert each object in the array, and store it in a variable.  
            newObject[key].push(convertedObject); // Push the converted object into the new array.  
          }
        }
      }
    }

    return newObject; // Return a copy of the original object with all keys converted.  
  }

  /**
   * Applies blockTypeDefaults to each block-content key. 
   * This means that when we find an object with a UUID matching an expected key, we replace it's contents entirely with a copy of the defaults.
   * 
   * @param {object} object - The object to apply blockTypeDefaults to.
   * @returns {object} - A copy of the original object with all keys converted and replaced by their default values where applicable!
   * @memberof Converter
   */
  applyBlockTypeDefaults(object) {
    // We recursively loop through the object and apply blockTypeDefaults to each block-content key. 
    // This means that when we find an object with a UUID matching an expected key, we replace it's contents entirely with a copy of the defaults.

    const targetKeyName = "block-content"; // TODO: depreciate this hardcoded CMS specific property.
    var newObject = clone(object); // Make a copy of the original object.  

    // First we get the UUID keys of the blockTypeDefaults, then we recurse for matches, changing parents where found.  
    var blockTypeDefaultKeys = Object.keys(this.blockTypeDefaults); // Get the keys of the blockTypeDefaults object.  These are UUIDs, and we will use them to match against our template's UUIDs.  
    for (var key in object) { // Loop through each key in the original object:
      if (typeof object[key] === "object") { // If it is an array or an object, recurse into it: 
        newObject[key] = this.applyBlockTypeDefaults(object[key]); // Recursively call this function on any objects found within this one, replacing them with their converted versions as they are returned from recursion.  

        if (Array.isArray(newObject[key]) && newObject[targetKeyName]) { // If we have a block-content array that contains objects with uuids matching those of our defaults...  This is a little hacky because I'm not sure how to handle arrays at each level without checking for specific keys like this... but it works for now! :)

          var tempArray = [];
          for (var i = 0; i < newObject[key].length; i++) { // Loop through the array of objects.  
            if (blockTypeDefaultKeys.indexOf(newObject[key][i]["uuid"]) > -1) { // If we find a UUID that matches one of our defaults... 
              tempArray.push(clone(this.blockTypeDefaults[newObject[key][i]["uuid"]])); // Push a copy of the default object into our temporary array, replacing it's contents entirely with those from blockTypeDefaults.  
              tempArray[tempArray.length - 1]["uuid"] = this.uuid(); // Add a new UUID v4 property to each item.  
            } else {
              tempArray.push(newObject[key][i]); // Otherwise just push the original object into our temporary array as is, without modification or replacement by defaults: 

            }

          }

          newObject[targetKeyName] = tempArray; // Replace this key's value with an entirely new version containing only converted objects and no originals: 

        }
      }
    };

    return newObject; // Return a copy of the original object with all keys converted and replaced by their default values where applicable!
  }


  /**
   * Converts arrays containing UUIDs to dictionaries with UUIDs as keys.
   * 
   * @param {object} object - The object to convert.
   * @returns {object} - A copy of the original object with all arrays converted to objects where applicable!
   * @memberof Converter
   */
  arrayOfUUIDsToDict(object) {
    // Converts arrays containing UUIDs to dictionaries with UUIDs as keys:
    function arrayChildrenAllHaveUUIDs(array) {
      for (var i = 0; i < array.length; i++) {
        if (!array[i]["uuid"])
          return false; // If any child object does not have a UUID, we return false and do nothing to this array.  
      }

      return true; // Otherwise we can assume that all children of the array have UUIDs, so it is safe to convert them into an object with those keys!

    }

    var newObject = clone(object); // Make a copy of the original object.  
    for (var key in newObject) { // Loop through each key in the original object:        
      if (typeof newObject[key] === "object") { // If it is an array or an object, recurse into it: 
        newObject[key] = this.arrayOfUUIDsToDict(newObject[key]); // Recursively call this function on any objects found within this one, replacing them with their converted versions as they are returned from recursion.  

        if (Array.isArray(newObject[key]) && arrayChildrenAllHaveUUIDs(newObject[key])) {
          var tempObj = {};
          for (var i = 0; i < newObject[key].length; i++) { // Loop through the original child objects in the original parent object's key value:  
            tempObj[newObject[key][i]["uuid"]] = newObject[key][i]; // Add each child object to a temporary object, using the UUID as the key.  
            delete tempObj[newObject[key][i]["uuid"]].uuid; // Delete the UUID from each child object once it is used as a key instead.  
          }

          newObject[key] = tempObj; // Replace the original parent object's key value with our temporary object containing all of the child objects, now using their UUIDs as keys.  
        }
      }
    };

    return newObject; // Return a copy of the original object with all arrays converted to objects where applicable!
  }

  /**
   * Converts the template to a valid JSON Schema.
   * 
   * @param {object} template - The template object to convert.
   * @returns {object} - A JSON schema object.
   * @memberof Converter
   */
  convertToValidJSONSchema(template) {
    // Converts the template to a valid JSON Schema.
    let schema = {
      "type": "object",
      "properties": {}
    };
    for (let key in template) {
      if (typeof template[key] === "object") {
        // Only modify invalid JSON schema fragments
        if (template[key].type === undefined) {
          schema.properties[key] = this.convertToValidJSONSchema(template[key]);
        } else {
          schema.properties[key] = template[key];
        }
      } else {
        schema.properties[key] = {
          "type": "string",
          "default": template[key],
          "readOnly": true,
          "title": template[key]
        };
      }
    }
    return schema;
  }

}