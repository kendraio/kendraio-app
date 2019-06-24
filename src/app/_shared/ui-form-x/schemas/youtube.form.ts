import { Field } from '../helpers/fields';
import { FULLNAME, EMAIL, MESSAGE, TYPEAHEAD, USERNAME } from './form-elements';
import { FormlyService } from '../services/formly.service';

// export class YouTubeForm {
//   constructor (private srvc: FormlyService ) {

//   }
//  return YOUTUBE_FORM

// };

// this.claimsToSend = [];
// selectedRows.forEach(i => {

//   this.claimsToSend.push(
//     {
//       'name': i.Name,
//       'artist': i.Artist,
//       'collective': i.Collective,
//       'owner': i.Owner,
//       'status': 'Not Sent'
//     });
// });



export const YOUTUBE_FORM = (disabled = false, data: any = {}) => {
  const mappedFields = [
    { 'field': 'email', 'enabled': false,},
    { 'field': 'fullname', 'enabled': false },
    { 'field': 'email', 'enabled': false },
  ];

  const myFields = [
  FULLNAME(false, data['fullname']),
  EMAIL(false, data['email']),
  EMAIL(false, data['email']),

 // getMe()
  ];



//   mappedFields.forEach(v => {
//     const fname = v.field;
//       myFields.push(
// // tslint:disable-next-line: no-eval
//    //     TestEmail[fname](false, data)
//       //  [fname](false, data['fullname'])
//       );
//   });

  return {
    id: 'YOUTUBE',
    template: [
      {
        wrappers: ['panel'],
        templateOptions: {
          label: 'Your YouTube'
        },
        fieldGroup: [
          ...myFields
        ]
      }
    ]
  };

};
