
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

//     // ]Claiming authorship for a work
// A Claim based on a disagreement over the Authorship of that Work.
// Claiming author share for a work.
// A Claim where there is agreement between the Claimants about the Authorship of the Musical Work but disagreement about the Share attributable to each Author. Link?
// Claiming ownership for a work

      
    // }),

new DynamicRadioGroupModel({
    id: 'claimType',
    label: 'Type of Claim',
    options: [
        { value: 'authorship', label: 'Authorship for a work' }, 
    { value: 'authorshare', label: 'Author share for a work' },
    { value: 'ownership', label: 'Ownership for a work' }
    ]
    
}),


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
        offLabel: 'Send me a receipt',
        onLabel: 'Send me a receipt',
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
