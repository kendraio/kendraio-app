import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

  // here we are trying to find a way to put all error msgs in one place.

@Component({
  selector: 'formly-object-type',
  template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <p *ngIf="to.description">{{ to.description }}</p>
    <div class="error matstuff" role="alert" *ngIf="showError">
      <formly-validation-message [field]="field"></formly-validation-message>
     </div>  
  
    <div
    class="content" 
    fxLayout.sm="column"
    fxLayout.xs="column"
    fxLayout="row" 
     fxLayoutGap="30px"
    fxLayoutAlign="space-between center"
  >
    <formly-field *ngFor="let f of field.fieldGroup" fxFlexFill [field]="f" fxFlex="100"  fxFlex.sm="100"></formly-field>

    </div>


  `,
})
export class FormGroupTypeComponent extends FieldType {

    defaultOptions = {
        defaultValue: {},

    };
}

// {
//     "title": "Edit Video Advanced",
//     "description": "YouTube Advanced Form",
//     "type": "object",
//     "properties": {
//         "recordingDate": {
//             "title": "Recording Date",
//             "type": "string"
//         },
//         "formgroup": {
//             "title": "This is a Nice Layout",
//             "properties": {
//                 "Title": {
//                     "type": "string",
//                     "title": "Title",
//                     "description": "A sample title"
//                 },
//                 "details": {
//                     "type": "string",
//                     "title": "Details",
//                     "description": "Enter the  details"
//                 },
//                 "done": {
//                     "type": "boolean",
//                     "title": "Done?",
//                     "default": false
//                 }
//             }
//         },
//         "formgroup2": {
//             "properties": {
//                 "fname": {
//                     "type": "string",
//                     "title": "First Name",
//                     "description": "A sample Firstname field"
//                 },
//                 "lname": {
//                     "type": "string",
//                     "title": "Last Name",
//                     "description": "Enter the  Last Name"
//                 }
//             }
//         },
//         "description": {
//             "title": "Description",
//             "type": "string"
//         },
//         ,
//         "formgroup3": {
//             "title": "About You",
//             "properties": {
//                 "fname": {
//                     "type": "string",
//                     "title": "First Name",
//                     "description": "A sample Firstname field"
//                 },
//                 "lname": {
//                     "type": "string",
//                     "title": "Last Name",
//                     "description": "Enter the  Last Name"
//                 }
//             }
//         },
//         "username": {
//             "title": "Nick Name",
//             "type": "string"
//         },
//     }
// }