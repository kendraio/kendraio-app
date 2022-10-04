import { Converter } from './convertTemplateToSchema';

describe('convertTemplateToSchema', () => {
    it('convertKeys should convert keys in the template using the convertables', () => {
        // Arrange:
        let input_template = {
            "websitemodel": {
                "website-content": [
                    {
                        "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                        "src": "https://placekitten.com/200/300"
                    },
                    {
                        "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                        "src": "https://placekitten.com/200/300"
                    }
                ]
            }
        };

        let expected_output = {
            "website-content": {
                "website-content": [
                    {
                        "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                        "src": "https://placekitten.com/200/300"
                    },
                    {
                        "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                        "src": "https://placekitten.com/200/300"
                    }
                ]
            }
        }

        let config = {
            "convertables": { "websitemodel": "website-content" }
        };

        // Act:
        let converter = new Converter(input_template, config);
        let converted = converter.convertKeys(input_template);

        // Assert:
        expect(converted).toEqual(expected_output);

    });

    it('applyBlockTypeDefaults should replace objects with matching UUIDs with defaults', () => {
        // Arrange:
        let input_template = {
            "block-content": [
                {
                    "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                }
            ]
        };

        let expected_output = {
            "block-content": [
                {
                    "uuid": "b74e30a7-a052-4331-86eb-ba2eb7a31ce4",
                    "type": "object",
                    "properties": {
                        "src": {
                            "type": "string",
                            "title": "Image URL"
                        }
                    }
                }
            ]
        }

        let config = {
            "blockTypeDefaults": {
                "c5bfac02-f0b6-4c31-8fdf-18de02667ee9": {
                    "type": "object",
                    "properties": {
                        "src": {
                            "type": "string",
                            "title": "Image URL"
                        }
                    }
                }
            }
        };

        // Act:
        // we spy on the uuid method, making it return  "b74e30a7-a052-4331-86eb-ba2eb7a31ce4"
        spyOn(Converter.prototype, 'uuid').and.returnValue("b74e30a7-a052-4331-86eb-ba2eb7a31ce4");
        let converter = new Converter(input_template, config);
        let converted = converter.applyBlockTypeDefaults(input_template);

        // Assert:
        expect(converted).toEqual(expected_output);
    });

    it('arrayOfUUIDsToDict should convert arrays of objects with UUIDs to dictionaries with UUIDs as keys', () => {
        // Arrange:
        let input_template = {
            "block-content": [
                {
                    "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                    "src": "https://placekitten.com/200/300"
                },
                {
                    "uuid": "b74e30a7-a052-4331-86eb-ba2eb7a31ce4",
                    "name": "Ada Lovelace"
                }
            ]
        };

        let expected_output = {
            "block-content": {
                "c5bfac02-f0b6-4c31-8fdf-18de02667ee9": {
                    "src": "https://placekitten.com/200/300"
                },
                "b74e30a7-a052-4331-86eb-ba2eb7a31ce4": {
                    "name": "Ada Lovelace"
                }
            }
        }

        let config = {};

        // Act:
        let converter = new Converter(input_template, config);
        let converted = converter.arrayOfUUIDsToDict(input_template);

        // Assert:
        expect(converted).toEqual(expected_output);
    });
    
    it('convertToValidJSONSchema should convert template data to a valid JSON Schema with readOnly properties', () => {
        // Arrange:
        let input_template = {
            "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
            "src": "https://placekitten.com/200/300"
        };

        let expected_output = {
            "type": "object",
            "properties": {
                "uuid": {
                    "type": "string",
                    "default": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                    "readOnly": true,
                    "title": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9"
                },
                "src": {
                    "type": "string",
                    "default": "https://placekitten.com/200/300",
                    "readOnly": true,
                    "title": "https://placekitten.com/200/300"
                }
            }
        }

        let config = {};

        // Act:
        let converter = new Converter(input_template, config);
        let converted = converter.convertToValidJSONSchema(input_template);

        // Assert:
        expect(converted).toEqual(expected_output);
    });

    it('convert should convert template data to a valid JSON Schema with readOnly properties', () => {
        // Arrange:
        let input_template = {
            "websitemodel": {
                "blockmodel": [
                    {
                        "uuid": "c5bfac02-f0b6-4c31-8fdf-18de02667ee9",
                        "src": "https://placekitten.com/200/300"
                    }
                ]
            }
        };

        let expected_output = {
            "type": "object",
            "properties": {
                "website-content": {
                    "type": "object",
                    "properties": {
                        "block-content": {
                            "type": "object",
                            "properties": {
                                "b74e30a7-a052-4331-86eb-ba2eb7a31ce4": {
                                    "type": "object",
                                    "properties": {
                                        "src": {
                                            "type": "string",
                                            "title": "Image URL"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        let config = {
            "convertables": { "websitemodel": "website-content", "blockmodel": "block-content" },
            "blockTypeDefaults": {
                "c5bfac02-f0b6-4c31-8fdf-18de02667ee9": {
                    "type": "object",
                    "properties": {
                        "src": {
                            "type": "string",
                            "title": "Image URL"
                        }
                    }
                }
            }
        };

        // Act:
        // we spy on the uuid method, making it return  "b74e30a7-a052-4331-86eb-ba2eb7a31ce4"
        spyOn(Converter.prototype, 'uuid').and.returnValue("b74e30a7-a052-4331-86eb-ba2eb7a31ce4");
        let converter = new Converter(input_template, config);
        let converted = converter.convert();

        // Assert:
        expect(converted).toEqual(expected_output);
    });
});