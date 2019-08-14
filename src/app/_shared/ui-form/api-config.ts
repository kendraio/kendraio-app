export const FORM_APIS = {

    youtube: {
        basic:
        {
            jsonSchema: 'assets/YouTube/youtube-simple.json',
            uiSchema: 'assets/YouTube/youtube-edit-video-basic-ui.json',
        },
        advanced:     {
            jsonSchema: 'assets/YouTube/youtube-edit-video-advanced.schema.json',
            uiSchema: 'assets/YouTube/youtube-edit-video-advanced.ui.json',
        },
        arrays:     {
            jsonSchema: 'assets/YouTube/arrays.json',
            uiSchema: 'assets/YouTube/youtube-edit-video-advanced.ui.json',
        }
      },

  user: {
    ipn: {
      jsonSchema: 'assets/adapters/ipn/jsonSchema.json',
      uiSchema: 'assets/adapters/ipn/uiSchema.json'
    }
  }

  };


  export const REFDATA_APIS = {

        testCountries:
        {
            json: 'assets/fake-data/test-ref-data.json',
            http: 'https://restcountries.eu/rest/v2/all',
        },
        testRegion:
        {
            json: 'assets/fake-data/test-ref-data.json',
            http: 'https://restcountries.eu/rest/v2/region/africa',
        },
        testCMOs:
        {
            json: 'assets/fake-data/test-cmo-ref-data.json',
            http: 'https://api.com/countries',
        },



  };
