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
        },
        ipn: {
          jsonSchema: 'assets/adapters/ipn/jsonSchema.json',
          uiSchema: 'assets/adapters/ipn/uiSchema.json'
        }
      },

  user: {
    ipn: {
      jsonSchema: 'assets/adapters/ipn/jsonSchema.json',
      uiSchema: 'assets/adapters/ipn/uiSchema.json'
    }
  },
  'ppl-ipn': {
    ipn: {
      jsonSchema: 'assets/adapters/ipn/jsonSchema.json',
      uiSchema: 'assets/adapters/ipn/uiSchema.json'
    }
  },
  bloomen: {
      musicalWork: {
        jsonSchema: 'https://kendraio.github.io/kendraio-adapter/extra/bloomen/schemas/musicalWork.json',
        uiSchema: 'https://kendraio.github.io/kendraio-adapter/extra/bloomen/schemas/musicalWork-ui.json'

      }
  }



  };
