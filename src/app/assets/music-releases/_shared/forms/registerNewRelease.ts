
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



// Band/Artist Name
// Release Type(Single/EP/LP ..)
// (P)Date
// (P)Name
// (C) Line
// Format(Digital/CD/Vinyl/cassette): 1+ values. for each:
// * Title, barcode, catalogue number, release date

export const RELEASE_REGISTER_FORM_MODEL = [

    new DynamicInputModel({
        id: 'ISRC',
        maxLength: 50,
        placeholder: 'ISRC',
    }),

    new DynamicInputModel({

        id: 'recordingTitle',
        maxLength: 25,
        placeholder: 'Recording Title',
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
    }),

    new DynamicInputModel ({
        id: 'date',
        placeholder: 'Date',
    }),
    new DynamicInputModel({
        id: 'name',
        maxLength: 50,
        placeholder: 'Name',
    }),
    new DynamicInputModel({
        id: 'line',
        maxLength: 50,
        placeholder: 'Line',
    }),


    new DynamicCheckboxGroupModel(
        {
id: 'releaseType',
label: 'Release Type',
group: [
    new DynamicCheckboxModel(
        {
            id: 'single',
            label: 'single',
            value: true
        }
    ),
    new DynamicCheckboxModel(
        {
            id: 'LP',
            label: 'LP',
            value: false
        }
    ),
    new DynamicCheckboxModel(
        {
            id: 'EP',
            label: 'EP',
            value: false
        }
    )
]
        }
    ),

    /// Format(Digital/CD/Vinyl/cassette): 1+ values. for each:
    new DynamicCheckboxGroupModel(
        {
id: 'format',
label: 'Format',
group: [
    new DynamicCheckboxModel(
        {
            id: 'Digital',
            label: 'Digital',
            value: true
        }
    ),
    new DynamicCheckboxModel(
        {
            id: 'cd',
            label: 'CD',
            value: false
        }
    ),
    new DynamicCheckboxModel(
        {
            id: 'vinyl',
            label: 'Vinyl',
            value: false
        }
    ),    new DynamicCheckboxModel(
        {
            id: 'cassette',
            label: 'Cassette',
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
