
import {
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel,
    DynamicFormControlModel,
    DynamicFormValueControlModel
} from '@ng-dynamic-forms/core';
import { BehaviorSubject } from 'rxjs';



export const MY_CLAIMS_FORM_MODEL = [

    // new DynamicFormGroupModel({
    //     id: 'claim',
    //     legend: 'Form Group Level 1',
    //     group: [


    //     new DynamicInputModel  ({
    //         id: 'details', 
    //         hidden: true
           
  
    //     })

    // ]
      
    // }),

    new DynamicTextAreaModel({

        id: 'comments',
        placeholder: 'Notes and Comments',

    }),

    new DynamicTextAreaModel({
        id: 'corroborators',
        placeholder: 'Names of Corroborators'
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
