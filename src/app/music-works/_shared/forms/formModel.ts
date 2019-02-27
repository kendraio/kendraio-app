
import {
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel
} from '@ng-dynamic-forms/core';
import { BehaviorSubject } from 'rxjs';



export const WORKS_FORM_MODEL = [

    new DynamicInputModel({

        id: 'Name',
        maxLength: 25,
        placeholder: 'Title of Recording',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({

        id: 'Type',
        maxLength: 50,
        placeholder: 'Type',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        },
        additional: {
            color: 'accent'
        }
    }),

 

    new DynamicInputModel({

        id: 'ISWC',
        placeholder: 'ISWC',
        hint: 'Add your ISWC code',
     
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({

        id: 'Composer',
        placeholder: 'Composer',
    
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({

        id: 'lyricist',
        placeholder: 'lyricist',
      
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({

        id: 'Arranger',
        placeholder: 'Arranger',
      
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),


   new DynamicFormGroupModel({

        id: 'signoff',
        group: [

    new DynamicSwitchModel({

        id: 'reminder',
        offLabel: 'Send me a reminder',
        onLabel: 'Send me a reminder',
        value: false

    }),

    new DynamicSwitchModel({

        id: 'updates',
        offLabel: 'Subscribe to Updates',
        onLabel: 'Subscribe to Updates',
        value: false
    }),

    new DynamicCheckboxModel({
        id: 'confirm',
        label: 'I confirm the information given above',
        value: false,
        validators: {
            requiredTrue: null
        },
        errorMessages: {
            required: 'You must confirm your data is correct'
        }
    })
]
})
];
