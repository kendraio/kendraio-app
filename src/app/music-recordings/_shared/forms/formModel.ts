
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

export const STATES_AUTOCOMPLETE_LIST = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export const MY_FORM_MODEL = [

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

        id: 'ISRC',
        placeholder: 'ISRC',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is Required'
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

        id: 'Country',
        placeholder: 'Country',
    
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({

        id: 'Owner',
        placeholder: 'Owner',
      
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({

        id: 'Collective',
        placeholder: 'Collective',
      
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new DynamicInputModel({

        id: 'Submitted to',
        placeholder: 'Submitted to...',
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
