import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { Subject } from 'rxjs';
import { takeUntil, startWith, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
    selector: 'formly-field-typeahead',
    template: `
    <label>{{to.label}}</label>
        <ng-select [items]="countries"
                   bindLabel="Name"
                   [placeholder]="to.label"
                   [(ngModel)]="selectedCity"
                   >
                       <ng-template ng-option-tmp let-item="item" let-index="index">
    <img width="20"  src="https://flags.fmcdn.net/data/flags/h40/{{item.Code.toLowerCase()}}.png"/>
    <b> {{item.Name}}</b>  ({{item.Code}})
</ng-template>
        </ng-select>
    `,
    styleUrls: ['./typeahead.component.scss'],
  })
  export class FormlyFieldTypeahead extends FieldType implements OnDestroy, OnInit {
    onDestroy$ = new Subject<void>();
    search$ = new EventEmitter();
    options$;
countries = [{'Code': 'AF', 'Name': 'Afghanistan'}, {'Code': 'AX', 'Name': '\u00c5land Islands'},{'Code': 'AL', 'Name': 'Albania'},{'Code': 'DZ', 'Name': 'Algeria'},{'Code': 'AS', 'Name': 'American Samoa'},{'Code': 'AD', 'Name': 'Andorra'},{'Code': 'AO', 'Name': 'Angola'},{'Code': 'AI', 'Name': 'Anguilla'},{'Code': 'AQ', 'Name': 'Antarctica'},{'Code': 'AG', 'Name': 'Antigua and Barbuda'},{'Code': 'AR', 'Name': 'Argentina'},{'Code': 'AM', 'Name': 'Armenia'},{'Code': 'AW', 'Name': 'Aruba'},{'Code': 'AU', 'Name': 'Australia'},{'Code': 'AT', 'Name': 'Austria'},{'Code': 'AZ', 'Name': 'Azerbaijan'},{'Code': 'BS', 'Name': 'Bahamas'},{'Code': 'BH', 'Name': 'Bahrain'},{'Code': 'BD', 'Name': 'Bangladesh'},{'Code': 'BB', 'Name': 'Barbados'},{'Code': 'BY', 'Name': 'Belarus'},{'Code': 'BE', 'Name': 'Belgium'},{'Code': 'BZ', 'Name': 'Belize'},{'Code': 'BJ', 'Name': 'Benin'},{'Code': 'BM', 'Name': 'Bermuda'},{'Code': 'BT', 'Name': 'Bhutan'},{'Code': 'BO', 'Name': 'Bolivia, Plurinational State of'},{'Code': 'BQ', 'Name': 'Bonaire, Sint Eustatius and Saba'},{'Code': 'BA', 'Name': 'Bosnia and Herzegovina'},{'Code': 'BW', 'Name': 'Botswana'},{'Code': 'BV', 'Name': 'Bouvet Island'},{'Code': 'BR', 'Name': 'Brazil'},{'Code': 'IO', 'Name': 'British Indian Ocean Territory'},{'Code': 'BN', 'Name': 'Brunei Darussalam'},{'Code': 'BG', 'Name': 'Bulgaria'},{'Code': 'BF', 'Name': 'Burkina Faso'},{'Code': 'BI', 'Name': 'Burundi'},{'Code': 'KH', 'Name': 'Cambodia'},{'Code': 'CM', 'Name': 'Cameroon'},{'Code': 'CA', 'Name': 'Canada'},{'Code': 'CV', 'Name': 'Cape Verde'},{'Code': 'KY', 'Name': 'Cayman Islands'},{'Code': 'CF', 'Name': 'Central African Republic'},{'Code': 'TD', 'Name': 'Chad'},{'Code': 'CL', 'Name': 'Chile'},{'Code': 'CN', 'Name': 'China'},{'Code': 'CX', 'Name': 'Christmas Island'},{'Code': 'CC', 'Name': 'Cocos (Keeling) Islands'},{'Code': 'CO', 'Name': 'Colombia'},{'Code': 'KM', 'Name': 'Comoros'},{'Code': 'CG', 'Name': 'Congo'},{'Code': 'CD', 'Name': 'Congo, the Democratic Republic of the'},{'Code': 'CK', 'Name': 'Cook Islands'},{'Code': 'CR', 'Name': 'Costa Rica'},{'Code': 'CI', 'Name': 'C\u00f4te d\'Ivoire'},{'Code': 'HR', 'Name': 'Croatia'},{'Code': 'CU', 'Name': 'Cuba'},{'Code': 'CW', 'Name': 'Cura\u00e7ao'},{'Code': 'CY', 'Name': 'Cyprus'},{'Code': 'CZ', 'Name': 'Czech Republic'},{'Code': 'DK', 'Name': 'Denmark'},{'Code': 'DJ', 'Name': 'Djibouti'},{'Code': 'DM', 'Name': 'Dominica'},{'Code': 'DO', 'Name': 'Dominican Republic'},{'Code': 'EC', 'Name': 'Ecuador'},{'Code': 'EG', 'Name': 'Egypt'},{'Code': 'SV', 'Name': 'El Salvador'},{'Code': 'GQ', 'Name': 'Equatorial Guinea'},{'Code': 'ER', 'Name': 'Eritrea'},{'Code': 'EE', 'Name': 'Estonia'},{'Code': 'ET', 'Name': 'Ethiopia'},{'Code': 'FK', 'Name': 'Falkland Islands (Malvinas)'},{'Code': 'FO', 'Name': 'Faroe Islands'},{'Code': 'FJ', 'Name': 'Fiji'},{'Code': 'FI', 'Name': 'Finland'},{'Code': 'FR', 'Name': 'France'},{'Code': 'GF', 'Name': 'French Guiana'},{'Code': 'PF', 'Name': 'French Polynesia'},{'Code': 'TF', 'Name': 'French Southern Territories'},{'Code': 'GA', 'Name': 'Gabon'},{'Code': 'GM', 'Name': 'Gambia'},{'Code': 'GE', 'Name': 'Georgia'},{'Code': 'DE', 'Name': 'Germany'},{'Code': 'GH', 'Name': 'Ghana'},{'Code': 'GI', 'Name': 'Gibraltar'},{'Code': 'GR', 'Name': 'Greece'},{'Code': 'GL', 'Name': 'Greenland'},{'Code': 'GD', 'Name': 'Grenada'},{'Code': 'GP', 'Name': 'Guadeloupe'},{'Code': 'GU', 'Name': 'Guam'},{'Code': 'GT', 'Name': 'Guatemala'},{'Code': 'GG', 'Name': 'Guernsey'},{'Code': 'GN', 'Name': 'Guinea'},{'Code': 'GW', 'Name': 'Guinea-Bissau'},{'Code': 'GY', 'Name': 'Guyana'},{'Code': 'HT', 'Name': 'Haiti'},{'Code': 'HM', 'Name': 'Heard Island and McDonald Islands'},{'Code': 'VA', 'Name': 'Holy See (Vatican City State)'},{'Code': 'HN', 'Name': 'Honduras'},{'Code': 'HK', 'Name': 'Hong Kong'},{'Code': 'HU', 'Name': 'Hungary'},{'Code': 'IS', 'Name': 'Iceland'},{'Code': 'IN', 'Name': 'India'},{'Code': 'ID', 'Name': 'Indonesia'},{'Code': 'IR', 'Name': 'Iran, Islamic Republic of'},{'Code': 'IQ', 'Name': 'Iraq'},{'Code': 'IE', 'Name': 'Ireland'},{'Code': 'IM', 'Name': 'Isle of Man'},{'Code': 'IL', 'Name': 'Israel'},{'Code': 'IT', 'Name': 'Italy'},{'Code': 'JM', 'Name': 'Jamaica'},{'Code': 'JP', 'Name': 'Japan'},{'Code': 'JE', 'Name': 'Jersey'},{'Code': 'JO', 'Name': 'Jordan'},{'Code': 'KZ', 'Name': 'Kazakhstan'},{'Code': 'KE', 'Name': 'Kenya'},{'Code': 'KI', 'Name': 'Kiribati'},{'Code': 'KP', 'Name': 'Korea, Democratic People\'s Republic of'},{'Code': 'KR', 'Name': 'Korea, Republic of'},{'Code': 'KW', 'Name': 'Kuwait'},{'Code': 'KG', 'Name': 'Kyrgyzstan'},{'Code': 'LA', 'Name': 'Lao People\'s Democratic Republic'},{'Code': 'LV', 'Name': 'Latvia'},{'Code': 'LB', 'Name': 'Lebanon'},{'Code': 'LS', 'Name': 'Lesotho'},{'Code': 'LR', 'Name': 'Liberia'},{'Code': 'LY', 'Name': 'Libya'},{'Code': 'LI', 'Name': 'Liechtenstein'},{'Code': 'LT', 'Name': 'Lithuania'},{'Code': 'LU', 'Name': 'Luxembourg'},{'Code': 'MO', 'Name': 'Macao'},{'Code': 'MK', 'Name': 'Macedonia, the Former Yugoslav Republic of'}]
selectedCity: string;

    ngOnInit() {
      this.options$ = this.search$.pipe(
        takeUntil(this.onDestroy$),
         startWith(''),
        filter(v => v !== null),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(this.to.search$),
      );

      this.options$.subscribe();
    }

    ngOnDestroy() {
      this.onDestroy$.complete();
    }
  }
