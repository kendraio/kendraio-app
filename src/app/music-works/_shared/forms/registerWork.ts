
import {
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel,
    DynamicCheckboxGroupModel
} from '@ng-dynamic-forms/core';
import { BehaviorSubject } from 'rxjs';



export const WORKS_REGISTER_FORM_MODEL = [

    new DynamicInputModel({

        id: 'title',
        maxLength: 25,
        placeholder: 'Title of work',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),


    new DynamicInputModel({

        id: 'altTitle',
        maxLength: 25,
    
        placeholder: 'Any alternative titles',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),


    new DynamicInputModel({

        id: 'Duration',
        maxLength: 50,
        placeholder: 'Duration',
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


    new DynamicTextAreaModel ({

        id: 'instrumentation',
        placeholder: 'instrumentation',
        hint: 'if a classical or dramatic work',
     
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicTextAreaModel ({
        id: 'CAE',
        placeholder: 'CAE/IPI number of any other writers',
        hint: 'CAE/IPI number of any other writers',
     
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),



    new DynamicCheckboxGroupModel(
        {
id: 'cmo',
label: 'Please choose all that apply ',
group: [
    new DynamicCheckboxModel(
        {
            id: 'prs',
            label: 'PRS',
            value: true
        }
    ),
    new DynamicCheckboxModel(
        {
            id: 'mcps',
            label: 'MCPS',
            value: false
        }
    ),
    new DynamicCheckboxModel(
        {
            id: 'ppl',
            label: 'PPL',
            value: false
        }
    )
]


        }
    ),

 



 
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
