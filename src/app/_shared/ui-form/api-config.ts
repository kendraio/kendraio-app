export const FORM_APIS = {
  youtube: {
    basic: {
      jsonSchema: "assets/YouTube/youtube-edit-video-basic.json",
      uiSchema: "assets/YouTube/youtube-edit-video-basic-ui.json",
    },
    advanced: {
      jsonSchema: "assets/YouTube/youtube-edit-video-advanced.schema.json",
      uiSchema: "assets/YouTube/youtube-edit-video-advanced.ui.json",
    },
    arrays: {
      jsonSchema: "assets/YouTube/arrays.json",
      uiSchema: "assets/YouTube/youtube-edit-video-advanced.ui.json",
    },
  },

  demo: {
    custom: {
      jsonSchema: "assets/form-examples/custom-elements.json",
      uiSchema: "assets/form-examples/custom-elements-ui.json",
    },
  },

  user: {
    ipn: {
      jsonSchema: "assets/adapters/ipn/jsonSchema.json",
      uiSchema: "assets/adapters/ipn/uiSchema.json",
    },
  },
  teosto: {
    profile: {
      jsonSchema: "assets/adapters/teosto/schema.json",
      uiSchema: "assets/adapters/teosto/ui.json",
    },
  },
  kendraio: {
    "search-limit": {
      jsonSchema: "assets/adapters/kendraio/search-limit.schema.json",
      uiSchema: "assets/adapters/kendraio/search-limit.ui.json",
    },
  },
};

export const REFDATA_APIS = {
  testCountries: {
    json: "assets/fake-data/test-ref-data.json",
    http: "https://restcountries.eu/rest/v2/all",
  },
  testRegion: {
    json: "assets/fake-data/test-ref-data.json",
    http: "https://restcountries.eu/rest/v2/region/africa",
  },
  testCMOs: {
    json: "assets/fake-data/test-cmo-ref-data.json",
    http: "https://api.com/countries",
  },
  youtube_playlists: {
    json: "assets/fake-data/test-cmo-ref-data.json",
    http: "https://www.googleapis.com/youtube/v3/playlists",
  },
};
