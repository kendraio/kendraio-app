import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { Subject, Observable, of, concat } from 'rxjs';
import { takeUntil, startWith, filter, debounceTime, distinctUntilChanged, switchMap, concatAll, tap } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';
// import { of as observableOf } from 'rxjs/observable/of';



@Component({
    selector: 'formly-field-typeahead',
    template: `

        <ng-select  [items]="countries"
                   bindLabel="name"
                   bindValue="id"
                   [placeholder]="to.label"
                   [(ngModel)]="selectedCountry"
                   [loading]="countriesLoading"
                   (change)="onChange($event)" >
                       <ng-template ng-option-tmp let-item="item" let-index="index">
    <img width="20"  src="/assets/icons/flags/32x32/{{item.alpha2.toLowerCase()}}.png"/>
    <b> {{item.name}}</b>  ({{item.alpha3}})
</ng-template>
        </ng-select>

    `,
    styleUrls: ['./typeahead.component.scss'],
  })
  export class FieldCountriesComponent extends FieldType<any> implements OnDestroy, OnInit {
countries = [{'id': 4, 'name': 'Afghanistan', 'alpha2': 'af', 'alpha3': 'afg'},
{'id': 8, 'name': 'Albania', 'alpha2': 'al', 'alpha3': 'alb'},
{'id': 12, 'name': 'Algeria', 'alpha2': 'dz', 'alpha3': 'dza'},
{'id': 20, 'name': 'Andorra', 'alpha2': 'ad', 'alpha3': 'and'},
{'id': 24, 'name': 'Angola', 'alpha2': 'ao', 'alpha3': 'ago'},
{'id': 28, 'name': 'Antigua and Barbuda', 'alpha2': 'ag', 'alpha3': 'atg'},
{'id': 32, 'name': 'Argentina', 'alpha2': 'ar', 'alpha3': 'arg'},
{'id': 51, 'name': 'Armenia', 'alpha2': 'am', 'alpha3': 'arm'},
{'id': 36, 'name': 'Australia', 'alpha2': 'au', 'alpha3': 'aus'},
{'id': 40, 'name': 'Austria', 'alpha2': 'at', 'alpha3': 'aut'},
{'id': 31, 'name': 'Azerbaijan', 'alpha2': 'az', 'alpha3': 'aze'},
{'id': 44, 'name': 'Bahamas', 'alpha2': 'bs', 'alpha3': 'bhs'},
{'id': 48, 'name': 'Bahrain', 'alpha2': 'bh', 'alpha3': 'bhr'},
{'id': 50, 'name': 'Bangladesh', 'alpha2': 'bd', 'alpha3': 'bgd'},
{'id': 52, 'name': 'Barbados', 'alpha2': 'bb', 'alpha3': 'brb'},
{'id': 112, 'name': 'Belarus', 'alpha2': 'by', 'alpha3': 'blr'},
{'id': 56, 'name': 'Belgium', 'alpha2': 'be', 'alpha3': 'bel'},
{'id': 84, 'name': 'Belize', 'alpha2': 'bz', 'alpha3': 'blz'},
{'id': 204, 'name': 'Benin', 'alpha2': 'bj', 'alpha3': 'ben'},
{'id': 64, 'name': 'Bhutan', 'alpha2': 'bt', 'alpha3': 'btn'},
{'id': 68, 'name': 'Bolivia (Plurinational State of)', 'alpha2': 'bo', 'alpha3': 'bol'},
{'id': 70, 'name': 'Bosnia and Herzegovina', 'alpha2': 'ba', 'alpha3': 'bih'},
{'id': 72, 'name': 'Botswana', 'alpha2': 'bw', 'alpha3': 'bwa'},
{'id': 76, 'name': 'Brazil', 'alpha2': 'br', 'alpha3': 'bra'},
{'id': 96, 'name': 'Brunei Darussalam', 'alpha2': 'bn', 'alpha3': 'brn'},
{'id': 100, 'name': 'Bulgaria', 'alpha2': 'bg', 'alpha3': 'bgr'},
{'id': 854, 'name': 'Burkina Faso', 'alpha2': 'bf', 'alpha3': 'bfa'},
{'id': 108, 'name': 'Burundi', 'alpha2': 'bi', 'alpha3': 'bdi'},
{'id': 132, 'name': 'Cabo Verde', 'alpha2': 'cv', 'alpha3': 'cpv'},
{'id': 116, 'name': 'Cambodia', 'alpha2': 'kh', 'alpha3': 'khm'},
{'id': 120, 'name': 'Cameroon', 'alpha2': 'cm', 'alpha3': 'cmr'},
{'id': 124, 'name': 'Canada', 'alpha2': 'ca', 'alpha3': 'can'},
{'id': 140, 'name': 'Central African Republic', 'alpha2': 'cf', 'alpha3': 'caf'},
{'id': 148, 'name': 'Chad', 'alpha2': 'td', 'alpha3': 'tcd'},
{'id': 152, 'name': 'Chile', 'alpha2': 'cl', 'alpha3': 'chl'},
{'id': 156, 'name': 'China', 'alpha2': 'cn', 'alpha3': 'chn'},
{'id': 170, 'name': 'Colombia', 'alpha2': 'co', 'alpha3': 'col'},
{'id': 174, 'name': 'Comoros', 'alpha2': 'km', 'alpha3': 'com'},
{'id': 178, 'name': 'Congo', 'alpha2': 'cg', 'alpha3': 'cog'},
{'id': 180, 'name': 'Congo, Democratic Republic of the', 'alpha2': 'cd', 'alpha3': 'cod'},
{'id': 188, 'name': 'Costa Rica', 'alpha2': 'cr', 'alpha3': 'cri'},
{'id': 384, 'name': 'Côte d\'Ivoire', 'alpha2': 'ci', 'alpha3': 'civ'},
{'id': 191, 'name': 'Croatia', 'alpha2': 'hr', 'alpha3': 'hrv'},
{'id': 192, 'name': 'Cuba', 'alpha2': 'cu', 'alpha3': 'cub'},
{'id': 196, 'name': 'Cyprus', 'alpha2': 'cy', 'alpha3': 'cyp'},
{'id': 203, 'name': 'Czechia', 'alpha2': 'cz', 'alpha3': 'cze'},
{'id': 208, 'name': 'Denmark', 'alpha2': 'dk', 'alpha3': 'dnk'},
{'id': 262, 'name': 'Djibouti', 'alpha2': 'dj', 'alpha3': 'dji'},
{'id': 212, 'name': 'Dominica', 'alpha2': 'dm', 'alpha3': 'dma'},
{'id': 214, 'name': 'Dominican Republic', 'alpha2': 'do', 'alpha3': 'dom'},
{'id': 218, 'name': 'Ecuador', 'alpha2': 'ec', 'alpha3': 'ecu'},
{'id': 818, 'name': 'Egypt', 'alpha2': 'eg', 'alpha3': 'egy'},
{'id': 222, 'name': 'El Salvador', 'alpha2': 'sv', 'alpha3': 'slv'},
{'id': 226, 'name': 'Equatorial Guinea', 'alpha2': 'gq', 'alpha3': 'gnq'},
{'id': 232, 'name': 'Eritrea', 'alpha2': 'er', 'alpha3': 'eri'},
{'id': 233, 'name': 'Estonia', 'alpha2': 'ee', 'alpha3': 'est'},
{'id': 748, 'name': 'Eswatini', 'alpha2': 'sz', 'alpha3': 'swz'},
{'id': 231, 'name': 'Ethiopia', 'alpha2': 'et', 'alpha3': 'eth'},
{'id': 242, 'name': 'Fiji', 'alpha2': 'fj', 'alpha3': 'fji'},
{'id': 246, 'name': 'Finland', 'alpha2': 'fi', 'alpha3': 'fin'},
{'id': 250, 'name': 'France', 'alpha2': 'fr', 'alpha3': 'fra'},
{'id': 266, 'name': 'Gabon', 'alpha2': 'ga', 'alpha3': 'gab'},
{'id': 270, 'name': 'Gambia', 'alpha2': 'gm', 'alpha3': 'gmb'},
{'id': 268, 'name': 'Georgia', 'alpha2': 'ge', 'alpha3': 'geo'},
{'id': 276, 'name': 'Germany', 'alpha2': 'de', 'alpha3': 'deu'},
{'id': 288, 'name': 'Ghana', 'alpha2': 'gh', 'alpha3': 'gha'},
{'id': 300, 'name': 'Greece', 'alpha2': 'gr', 'alpha3': 'grc'},
{'id': 308, 'name': 'Grenada', 'alpha2': 'gd', 'alpha3': 'grd'},
{'id': 320, 'name': 'Guatemala', 'alpha2': 'gt', 'alpha3': 'gtm'},
{'id': 324, 'name': 'Guinea', 'alpha2': 'gn', 'alpha3': 'gin'},
{'id': 624, 'name': 'Guinea-Bissau', 'alpha2': 'gw', 'alpha3': 'gnb'},
{'id': 328, 'name': 'Guyana', 'alpha2': 'gy', 'alpha3': 'guy'},
{'id': 332, 'name': 'Haiti', 'alpha2': 'ht', 'alpha3': 'hti'},
{'id': 340, 'name': 'Honduras', 'alpha2': 'hn', 'alpha3': 'hnd'},
{'id': 348, 'name': 'Hungary', 'alpha2': 'hu', 'alpha3': 'hun'},
{'id': 352, 'name': 'Iceland', 'alpha2': 'is', 'alpha3': 'isl'},
{'id': 356, 'name': 'India', 'alpha2': 'in', 'alpha3': 'ind'},
{'id': 360, 'name': 'Indonesia', 'alpha2': 'id', 'alpha3': 'idn'},
{'id': 364, 'name': 'Iran (Islamic Republic of)', 'alpha2': 'ir', 'alpha3': 'irn'},
{'id': 368, 'name': 'Iraq', 'alpha2': 'iq', 'alpha3': 'irq'},
{'id': 372, 'name': 'Ireland', 'alpha2': 'ie', 'alpha3': 'irl'},
{'id': 376, 'name': 'Israel', 'alpha2': 'il', 'alpha3': 'isr'},
{'id': 380, 'name': 'Italy', 'alpha2': 'it', 'alpha3': 'ita'},
{'id': 388, 'name': 'Jamaica', 'alpha2': 'jm', 'alpha3': 'jam'},
{'id': 392, 'name': 'Japan', 'alpha2': 'jp', 'alpha3': 'jpn'},
{'id': 400, 'name': 'Jordan', 'alpha2': 'jo', 'alpha3': 'jor'},
{'id': 398, 'name': 'Kazakhstan', 'alpha2': 'kz', 'alpha3': 'kaz'},
{'id': 404, 'name': 'Kenya', 'alpha2': 'ke', 'alpha3': 'ken'},
{'id': 296, 'name': 'Kiribati', 'alpha2': 'ki', 'alpha3': 'kir'},
{'id': 408, 'name': 'Korea (Democratic People\'s Republic of)', 'alpha2': 'kp', 'alpha3': 'prk'},
{'id': 410, 'name': 'Korea, Republic of', 'alpha2': 'kr', 'alpha3': 'kor'},
{'id': 414, 'name': 'Kuwait', 'alpha2': 'kw', 'alpha3': 'kwt'},
{'id': 417, 'name': 'Kyrgyzstan', 'alpha2': 'kg', 'alpha3': 'kgz'},
{'id': 418, 'name': 'Lao People\'s Democratic Republic', 'alpha2': 'la', 'alpha3': 'lao'},
{'id': 428, 'name': 'Latvia', 'alpha2': 'lv', 'alpha3': 'lva'},
{'id': 422, 'name': 'Lebanon', 'alpha2': 'lb', 'alpha3': 'lbn'},
{'id': 426, 'name': 'Lesotho', 'alpha2': 'ls', 'alpha3': 'lso'},
{'id': 430, 'name': 'Liberia', 'alpha2': 'lr', 'alpha3': 'lbr'},
{'id': 434, 'name': 'Libya', 'alpha2': 'ly', 'alpha3': 'lby'},
{'id': 438, 'name': 'Liechtenstein', 'alpha2': 'li', 'alpha3': 'lie'},
{'id': 440, 'name': 'Lithuania', 'alpha2': 'lt', 'alpha3': 'ltu'},
{'id': 442, 'name': 'Luxembourg', 'alpha2': 'lu', 'alpha3': 'lux'},
{'id': 450, 'name': 'Madagascar', 'alpha2': 'mg', 'alpha3': 'mdg'},
{'id': 454, 'name': 'Malawi', 'alpha2': 'mw', 'alpha3': 'mwi'},
{'id': 458, 'name': 'Malaysia', 'alpha2': 'my', 'alpha3': 'mys'},
{'id': 462, 'name': 'Maldives', 'alpha2': 'mv', 'alpha3': 'mdv'},
{'id': 466, 'name': 'Mali', 'alpha2': 'ml', 'alpha3': 'mli'},
{'id': 470, 'name': 'Malta', 'alpha2': 'mt', 'alpha3': 'mlt'},
{'id': 584, 'name': 'Marshall Islands', 'alpha2': 'mh', 'alpha3': 'mhl'},
{'id': 478, 'name': 'Mauritania', 'alpha2': 'mr', 'alpha3': 'mrt'},
{'id': 480, 'name': 'Mauritius', 'alpha2': 'mu', 'alpha3': 'mus'},
{'id': 484, 'name': 'Mexico', 'alpha2': 'mx', 'alpha3': 'mex'},
{'id': 583, 'name': 'Micronesia (Federated States of)', 'alpha2': 'fm', 'alpha3': 'fsm'},
{'id': 498, 'name': 'Moldova, Republic of', 'alpha2': 'md', 'alpha3': 'mda'},
{'id': 492, 'name': 'Monaco', 'alpha2': 'mc', 'alpha3': 'mco'},
{'id': 496, 'name': 'Mongolia', 'alpha2': 'mn', 'alpha3': 'mng'},
{'id': 499, 'name': 'Montenegro', 'alpha2': 'me', 'alpha3': 'mne'},
{'id': 504, 'name': 'Morocco', 'alpha2': 'ma', 'alpha3': 'mar'},
{'id': 508, 'name': 'Mozambique', 'alpha2': 'mz', 'alpha3': 'moz'},
{'id': 104, 'name': 'Myanmar', 'alpha2': 'mm', 'alpha3': 'mmr'},
{'id': 516, 'name': 'Namibia', 'alpha2': 'na', 'alpha3': 'nam'},
{'id': 520, 'name': 'Nauru', 'alpha2': 'nr', 'alpha3': 'nru'},
{'id': 524, 'name': 'Nepal', 'alpha2': 'np', 'alpha3': 'npl'},
{'id': 528, 'name': 'Netherlands', 'alpha2': 'nl', 'alpha3': 'nld'},
{'id': 554, 'name': 'New Zealand', 'alpha2': 'nz', 'alpha3': 'nzl'},
{'id': 558, 'name': 'Nicaragua', 'alpha2': 'ni', 'alpha3': 'nic'},
{'id': 562, 'name': 'Niger', 'alpha2': 'ne', 'alpha3': 'ner'},
{'id': 566, 'name': 'Nigeria', 'alpha2': 'ng', 'alpha3': 'nga'},
{'id': 807, 'name': 'North Macedonia', 'alpha2': 'mk', 'alpha3': 'mkd'},
{'id': 578, 'name': 'Norway', 'alpha2': 'no', 'alpha3': 'nor'},
{'id': 512, 'name': 'Oman', 'alpha2': 'om', 'alpha3': 'omn'},
{'id': 586, 'name': 'Pakistan', 'alpha2': 'pk', 'alpha3': 'pak'},
{'id': 585, 'name': 'Palau', 'alpha2': 'pw', 'alpha3': 'plw'},
{'id': 591, 'name': 'Panama', 'alpha2': 'pa', 'alpha3': 'pan'},
{'id': 598, 'name': 'Papua New Guinea', 'alpha2': 'pg', 'alpha3': 'png'},
{'id': 600, 'name': 'Paraguay', 'alpha2': 'py', 'alpha3': 'pry'},
{'id': 604, 'name': 'Peru', 'alpha2': 'pe', 'alpha3': 'per'},
{'id': 608, 'name': 'Philippines', 'alpha2': 'ph', 'alpha3': 'phl'},
{'id': 616, 'name': 'Poland', 'alpha2': 'pl', 'alpha3': 'pol'},
{'id': 620, 'name': 'Portugal', 'alpha2': 'pt', 'alpha3': 'prt'},
{'id': 634, 'name': 'Qatar', 'alpha2': 'qa', 'alpha3': 'qat'},
{'id': 642, 'name': 'Romania', 'alpha2': 'ro', 'alpha3': 'rou'},
{'id': 643, 'name': 'Russian Federation', 'alpha2': 'ru', 'alpha3': 'rus'},
{'id': 646, 'name': 'Rwanda', 'alpha2': 'rw', 'alpha3': 'rwa'},
{'id': 659, 'name': 'Saint Kitts and Nevis', 'alpha2': 'kn', 'alpha3': 'kna'},
{'id': 662, 'name': 'Saint Lucia', 'alpha2': 'lc', 'alpha3': 'lca'},
{'id': 670, 'name': 'Saint Vincent and the Grenadines', 'alpha2': 'vc', 'alpha3': 'vct'},
{'id': 882, 'name': 'Samoa', 'alpha2': 'ws', 'alpha3': 'wsm'},
{'id': 674, 'name': 'San Marino', 'alpha2': 'sm', 'alpha3': 'smr'},
{'id': 678, 'name': 'Sao Tome and Principe', 'alpha2': 'st', 'alpha3': 'stp'},
{'id': 682, 'name': 'Saudi Arabia', 'alpha2': 'sa', 'alpha3': 'sau'},
{'id': 686, 'name': 'Senegal', 'alpha2': 'sn', 'alpha3': 'sen'},
{'id': 688, 'name': 'Serbia', 'alpha2': 'rs', 'alpha3': 'srb'},
{'id': 690, 'name': 'Seychelles', 'alpha2': 'sc', 'alpha3': 'syc'},
{'id': 694, 'name': 'Sierra Leone', 'alpha2': 'sl', 'alpha3': 'sle'},
{'id': 702, 'name': 'Singapore', 'alpha2': 'sg', 'alpha3': 'sgp'},
{'id': 703, 'name': 'Slovakia', 'alpha2': 'sk', 'alpha3': 'svk'},
{'id': 705, 'name': 'Slovenia', 'alpha2': 'si', 'alpha3': 'svn'},
{'id': 90, 'name': 'Solomon Islands', 'alpha2': 'sb', 'alpha3': 'slb'},
{'id': 706, 'name': 'Somalia', 'alpha2': 'so', 'alpha3': 'som'},
{'id': 710, 'name': 'South Africa', 'alpha2': 'za', 'alpha3': 'zaf'},
{'id': 728, 'name': 'South Sudan', 'alpha2': 'ss', 'alpha3': 'ssd'},
{'id': 724, 'name': 'Spain', 'alpha2': 'es', 'alpha3': 'esp'},
{'id': 144, 'name': 'Sri Lanka', 'alpha2': 'lk', 'alpha3': 'lka'},
{'id': 729, 'name': 'Sudan', 'alpha2': 'sd', 'alpha3': 'sdn'},
{'id': 740, 'name': 'Suriname', 'alpha2': 'sr', 'alpha3': 'sur'},
{'id': 752, 'name': 'Sweden', 'alpha2': 'se', 'alpha3': 'swe'},
{'id': 756, 'name': 'Switzerland', 'alpha2': 'ch', 'alpha3': 'che'},
{'id': 760, 'name': 'Syrian Arab Republic', 'alpha2': 'sy', 'alpha3': 'syr'},
{'id': 762, 'name': 'Tajikistan', 'alpha2': 'tj', 'alpha3': 'tjk'},
{'id': 834, 'name': 'Tanzania, United Republic of', 'alpha2': 'tz', 'alpha3': 'tza'},
{'id': 764, 'name': 'Thailand', 'alpha2': 'th', 'alpha3': 'tha'},
{'id': 626, 'name': 'Timor-Leste', 'alpha2': 'tl', 'alpha3': 'tls'},
{'id': 768, 'name': 'Togo', 'alpha2': 'tg', 'alpha3': 'tgo'},
{'id': 776, 'name': 'Tonga', 'alpha2': 'to', 'alpha3': 'ton'},
{'id': 780, 'name': 'Trinidad and Tobago', 'alpha2': 'tt', 'alpha3': 'tto'},
{'id': 788, 'name': 'Tunisia', 'alpha2': 'tn', 'alpha3': 'tun'},
{'id': 792, 'name': 'Turkey', 'alpha2': 'tr', 'alpha3': 'tur'},
{'id': 795, 'name': 'Turkmenistan', 'alpha2': 'tm', 'alpha3': 'tkm'},
{'id': 798, 'name': 'Tuvalu', 'alpha2': 'tv', 'alpha3': 'tuv'},
{'id': 800, 'name': 'Uganda', 'alpha2': 'ug', 'alpha3': 'uga'},
{'id': 804, 'name': 'Ukraine', 'alpha2': 'ua', 'alpha3': 'ukr'},
{'id': 784, 'name': 'United Arab Emirates', 'alpha2': 'ae', 'alpha3': 'are'},
{'id': 826, 'name': 'United Kingdom of Great Britain and Northern Ireland', 'alpha2': 'gb', 'alpha3': 'gbr'},
{'id': 840, 'name': 'United States of America', 'alpha2': 'us', 'alpha3': 'usa'},
{'id': 858, 'name': 'Uruguay', 'alpha2': 'uy', 'alpha3': 'ury'},
{'id': 860, 'name': 'Uzbekistan', 'alpha2': 'uz', 'alpha3': 'uzb'},
{'id': 548, 'name': 'Vanuatu', 'alpha2': 'vu', 'alpha3': 'vut'},
{'id': 862, 'name': 'Venezuela (Bolivarian Republic of)', 'alpha2': 've', 'alpha3': 'ven'},
{'id': 704, 'name': 'Viet Nam', 'alpha2': 'vn', 'alpha3': 'vnm'},
{'id': 887, 'name': 'Yemen', 'alpha2': 'ye', 'alpha3': 'yem'},
{'id': 894, 'name': 'Zambia', 'alpha2': 'zm', 'alpha3': 'zmb'},
{'id': 716, 'name': 'Zimbabwe', 'alpha2': 'zw', 'alpha3': 'zwe'}
];
countriesLoading = false;
selectedCountry: string;
onDestroy$ = new Subject<void>();
search$ = new EventEmitter();
countries$: Observable<any[]>;
// field: FormlyFieldConfig =
//     {
//       templateOptions: {
//         placeholder: 'Search for a state:',
//         search$: (term) => {
//           if ((!term || term === '')) {
//             return of(this.countries);
//           }

//           return of(this.countries.filter(name => name.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
//         },
//       }
//     };


    ngOnInit() {
    //   this.countries$ = concat(
    //     of([]),
    //   this.search$.pipe(
    //     takeUntil(this.onDestroy$),
    //      startWith(''),
    //     filter(v => v !== null),
    //     debounceTime(200),
    //     distinctUntilChanged(),
    //     tap(() => this.countriesLoading = false),
    //     switchMap(this.to.search$),
    //   )
    //   );


    //   this.countries$.subscribe();
    }

    onChange($event) {
        this.formControl.patchValue($event);
    }

    ngOnDestroy() {
      this.onDestroy$.complete();
    }
  }
