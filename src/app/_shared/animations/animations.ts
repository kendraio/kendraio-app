// import { style, animate, transition, state, trigger, AnimationEntryMetadata, keyframes } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  state,
  AnimationMetadata,
} from '@angular/animations';

export class Animations {
  static kendraAnimations: AnimationMetadata[] = [
    // trigger('slideInOut', [
    //     state('in', style({
    //       'max-height': '500px', 'opacity': '1', 'visibility': 'visible',
    //     })),
    //     state('out', style({
    //       'max-height': '0px', 'opacity': '0', 'visibility': 'hidden',
    //     })),
    //     transition('in => out', [group([
    //       animate('400ms ease-in-out', style({
    //         'opacity': '0',
    //       })),
    //       animate('600ms ease-in-out', style({
    //         'max-height': '0px',
    //       })),
    //       animate('700ms ease-in-out', style({
    //         'visibility': 'hidden',
    //       })),
    //     ],
    //     )]),
    //     transition('out => in', [group([
    //       animate('1ms ease-in-out', style({
    //         'visibility': 'visible',
    //       })),
    //       animate('600ms ease-in-out', style({
    //         'max-height': '500px',
    //       })),
    //       animate('800ms ease-in-out', style({
    //         'opacity': '1',
    //       })),
    //     ],
    //     )]),
    //   ]),

    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          display: 'block',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0.5,
        })
      ),
      // transition('open => closed', [
      //     animate('0.1s 100ms ease-out')
      // ]),
      // transition('closed => open', [
      //     animate('100ms  ease-out')
      // ]),
    ]),

    trigger('enterLeaveInOut-2', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('200ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'scale(1)', offset: 0 }),
                style({ opacity: 0.4, transform: 'scale(1.01)', offset: 0.3 }),
                style({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-out',
              keyframes([
                style({ opacity: 1, transform: 'scale(.5)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(0)', offset: 0.3 }),
                //   style({opacity: 0, transform: 'scale(.3)',     offset: 1.0}),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
    trigger('enterLeaveInOut-3', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('700ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'scale(1)', offset: 0 }),
                style({ opacity: 0.4, transform: 'scale(1.01)', offset: 0.3 }),
                style({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-out',
              keyframes([
                style({ opacity: 1, transform: 'scale(.5)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(0)', offset: 0.3 }),
                //   style({opacity: 0, transform: 'scale(.3)',     offset: 1.0}),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),

    trigger('enterLeaveInOut', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('100ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'scale(.9)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.3 }),
                style({ opacity: 1, transform: 'scale(1)', offset: 1.0 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-out',
              keyframes([
                style({ opacity: 1, transform: 'scale(.5)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(0)', offset: 0.3 }),
                //   style({opacity: 0, transform: 'scale(.3)',     offset: 1.0}),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),

    trigger('enterLeaveUpDwn2', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('100ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-1%)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(15px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-out',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(15px)',
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: 'translateY(-5%)',
                  offset: 1.0,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),

    trigger('enterLeaveUpDwn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('300ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-5%)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '.6s ease-out',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: 'translateY(-75%)',
                  offset: 1.0,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),

    trigger('enterAnimateUpDwn', [
      // state('true',
      //     style({ opacity: 1, transform: 'translate(0, 10px)' })
      // ),
      state('void', style({ opacity: 0, transform: 'translate(0, -10px)' })),
      transition(
        // down
        '* => *',
        [animate('.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)')]
      ),
      // transition( //up
      //     '* => *', [
      //         animate('1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
      //     ]
      // )
    ]),

    trigger('enterAnimateInOut', [
      // state('true',
      //     style({ opacity: 1, transform: 'translate(0, 10px)' })
      // ),
      state('void', style({ opacity: 0, transform: 'scale(.3)' })),
      transition(
        // down
        '* => *',
        [animate('1s cubic-bezier(0.175, 0.885, 0.32, 1.275)')]
      ),
      // transition( //up
      //     '* => *', [
      //         animate('1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
      //     ]
      // )
    ]),

    trigger('validationMsg', [
      state('void', style({ opacity: 0, transform: 'translate(0, 20px)' })),
      transition(
        // down
        '* => *',
        [animate('1s cubic-bezier(0.175, 0.885, 0.32, 1.275)')]
      ),
    ]),

    trigger('enterAnimate', [
      state('true', style({ opacity: 1, transform: 'translate(200px , 0)' })),
      state('void', style({ opacity: 0, transform: 'translate(200px , 0)' })),
      transition('* => void', [animate('300ms ease-in')]),
      transition('void => *', [animate('800ms 0.3s ease-out')]),
    ]),

    trigger('isSubmitted', [
      state('true', style({ transform: 'scale(0.4)' })),
      transition('1 => 0', [
        animate('1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)'),
      ]),
      transition(
        '0 => 1',
        animate('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)')
      ),
    ]),

    trigger('zoomInOut', [
      state('small', style({ transform: 'translateY(0)', opacity: 1 })),
      state('large', style({ transform: 'scale(0.95)', opacity: 0 })),
      transition('1 => 0', [
        animate('1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)'),
      ]),
      transition(
        '0 => 1',
        animate('1.5s cubic-bezier(0.215, 0.610, 0.355, 1.600)')
      ),
    ]),

    trigger('dropInOut', [
      state(
        'small',
        style({
          transform: 'scale(0)',
        })
      ),
      state(
        'large',
        style({
          transform: 'scale(1.5)',
        })
      ),
      transition(
        'small => large',
        animate(
          '1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            //  style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ])
        )
      ),

      transition(
        'large => small',
        animate(
          '1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)',
          keyframes([
            //   style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            //  style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
            style({ opacity: 0, transform: 'translateY(0)', offset: 1.0 }),
          ])
        )
      ),
    ]),

    trigger('dropInOut2', [
      state(
        'small',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'large',
        style({
          transform: 'scale(1.5)',
        })
      ),
      transition(
        'small <=> large',
        animate(
          '1.5s cubic-bezier(0.215, 0.610, 0.355, 2.000)',
          keyframes([
            style({ opacity: 0, transform: 'translateY(75%)', offset: 0 }),
            //   style({opacity: 1, transform: 'translateY(-35px)',  offset: 0.5}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ])
        )
      ),
    ]),
  ];
}
