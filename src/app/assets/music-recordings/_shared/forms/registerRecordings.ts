
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



export const RECORDING_REGISTER_FORM_MODEL = [

    new DynamicInputModel({
        id: 'ISRC',
        maxLength: 50,
        placeholder: 'ISRC',
    }),

    new DynamicInputModel({

        id: 'recordingTitle',
        maxLength: 25,
        placeholder: 'Recording Title',
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
        id: 'bandArtistName',
        maxLength: 50,
        placeholder: 'Band/Artist Name',
    }),


    new DynamicInputModel ({

        id: 'genere',
        placeholder: 'Genere',
        hint: 'if a classical or dramatic work',
     
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel ({
        id: 'date',
        placeholder: 'Date',
    }),
    new DynamicInputModel({
        id: 'Name',
        maxLength: 50,
        placeholder: 'Name',
    }),
    new DynamicInputModel({
        id: 'Line',
        maxLength: 50,
        placeholder: 'Line',
    }),
    new DynamicInputModel({
        id: 'countryOfRecording',
        maxLength: 50,
        placeholder: 'Country of recording',
    }),
    new DynamicInputModel({
        id: 'countryOfComposition',
        maxLength: 50,
        placeholder: 'Country of composition',
    }),
    new DynamicInputModel({
        id: 'duration',
        maxLength: 50,
        placeholder: 'Duration',
    }),
    new DynamicInputModel({
        id: 'recordingDate',
        maxLength: 50,
        placeholder: 'Recording date',
    }),


    new DynamicFormGroupModel({

        id: 'cmo',
        group: [
    new DynamicCheckboxGroupModel(
        {
id: 'cmo',
label: 'Who would you like to register with?',
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
    ) ,




]
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
