
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



export const MUSIC_RELEASES_FORM_MODEL = [

    // new DynamicFormGroupModel({

    //     id: 'stay',
    //     group: [
    //         new DynamicDatePickerModel({

    //             id: 'arrivalDate',
    //             inline: false,
    //             placeholder: 'Date of Arrival'
    //         }),

    //         new DynamicDatePickerModel({
    //             id: 'departureDate',
    //             inline: false,
    //             placeholder: 'Date of Departure'
    //         })
    //     ],
    //     // validators: {
    //     //     customDateRangeValidator: null
    //     // },
    //     // errorMessages: {
    //     //     customDateRangeValidator: 'Invalid period of time selected'
    //     // }
    // }),

    // new DynamicFormGroupModel({

    //     id: 'room',
    //     group: [
    //         new DynamicSelectModel<string>({

    //             id: 'roomSize',
    //             placeholder: 'Room Size',
    //             hint: 'Choose a room type',
    //             options: [
    //                 {
    //                     label: 'Single Room',
    //                     value: 'single-room'
    //                 },
    //                 {
    //                     label: 'Double Room',
    //                     value: 'double-room'
    //                 },
    //                 {
    //                     label: 'Business Suite',
    //                     value: 'business-suite'
    //                 },
    //                 {
    //                     label: 'Presidential Suite',
    //                     value: 'presidential-suite'
    //                 },
    //                 {
    //                     label: 'Storeroom',
    //                     value: 'storeroom'
    //                 }
    //             ]
    //         }),

    //         new DynamicInputModel({

    //             id: 'roomQuantity',
    //             inputType: 'number',
    //             placeholder: 'Room Quantity',
    //             hint: 'Maximum: 5',
    //             max: 5,
    //             min: 0
    //         })
    //     ]
    // }),





    new DynamicInputModel({
        id: 'Title',
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
        id: 'Artist',
        maxLength: 50,
        placeholder: 'Name of Artist',
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
        id: 'Barcode',
        maxLength: 150,
        placeholder: 'Barcode'

    }),
    
    new DynamicInputModel({
        id: 'Catalogue Number',
        maxLength: 50,
        placeholder: 'Catalogue Number'
    }),
    
    new DynamicInputModel({
        id: 'Collective',
        maxLength: 50,
        placeholder: 'Collective'
    }),
    
    new DynamicInputModel({
        id: 'Date',
        placeholder: 'Date'
    }),
    


    new DynamicInputModel({
        id: 'Distribution',
        maxLength: 50,
        placeholder: 'Distribution'
    }),
    
    
    new DynamicInputModel({
        id: 'Format',
        maxLength: 10,
        placeholder: 'Format'
    }),

    new DynamicInputModel({
        id: 'Number of tracks',
        maxLength: 3,
        placeholder: 'Number of tracks'
    }),
    new DynamicInputModel({
        id: 'Owner',
        maxLength: 50,
        placeholder: 'Owner',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new DynamicInputModel({
        id: 'Territory',
        maxLength: 50,
        placeholder: 'Territory'
    }),

    new DynamicInputModel({
        id: 'Type',
        maxLength: 50,
        placeholder: 'Type'
    }),
    new DynamicInputModel({
        id: 'Submitted to',
        placeholder: 'Submitted to'
    }),






    // new DynamicSwitchModel({

    //     id: 'reminder',
    //     offLabel: 'Send me a reminder',
    //     onLabel: 'Send me a reminder',
    //     value: false

    // }),

    // new DynamicSwitchModel({

    //     id: 'updates',
    //     offLabel: 'Subscribe to Updates',
    //     onLabel: 'Subscribe to Updates',
    //     value: false
    // }),

    // new DynamicCheckboxModel({
    //     id: 'confirm',
    //     label: 'I confirm the information given above',
    //     validators: {
    //         required: null
    //     },
    //     errorMessages: {
    //         required: 'You must confirm....'
    //     }
    // })
];
