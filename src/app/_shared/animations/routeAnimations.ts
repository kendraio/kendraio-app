import {
  animate,
  state,
  style,
  transition,
  trigger,
  query,
} from "@angular/animations";

const speed = ".8s";

export const routeAnimation = [
  trigger("routing", [
    state("*", style({ transform: "translateX(0)" })),
    transition("void => backward", [
      style({ transform: "translateX(-50%", opacity: 0 }),
      animate(speed + " ease"),
    ]),
    transition("backward => void", [
      animate(
        ".4s",
        style({
          transform: "translateX(50%)",
          opacity: 0,
        }),
      ),
    ]),
    transition("void => forward", [
      style({ transform: "translateX(50%" }),
      animate(speed + " ease"),
    ]),
    transition("forward => void", [
      animate(
        ".4s",
        style({
          transform: "translateX(-50%)",
          opacity: 0,
        }),
      ),
    ]),
  ]),
];
export const fadeAnimation = trigger("fadeAnimation", [
  // The '* => *' will trigger the animation to change between any two states
  transition("* => *", [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(":enter", [style({ opacity: 0 })], { optional: true }),
    query(
      ":leave",
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate("5.3s", style({ opacity: 0 }))],
      { optional: true },
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("5.3s", style({ opacity: 1 }))],
      { optional: true },
    ),
  ]),
]);

// import {sequence, trigger, stagger, animate, style, group, query, transition, animateChild} from '@angular/animations';

// export const routeAnimation = trigger('routing', [
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {optional: true}),
//     query(':enter', style({ transform: 'translateX(100%)' }), {optional: true}),
//     sequence([
//       query(':leave', animateChild(), {optional: true}),
//       group([
//         query(':leave', [
//           style({ transform: 'translateX(0%)' }),
//           animate('500ms ease', style({ transform: 'translateX(-100%)' }))
//         ], {optional: true}),
//         query(':enter', [
//           style({ transform: 'translateX(100%)' }),
//           animate('500ms ease',
//             style({ transform: 'translateX(0%)' })),
//         ], {optional: true}),
//       ]),
//       query(':enter', animateChild(), {optional: true}),
//     ])
//   ])
// ]);

// import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     /* order */
//     /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
//       , { optional: true }),
//     /* 2 */ group([  // block executes in parallel
//       query(':enter', [
//         style({ transform: 'translateX(100%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }
//       ], { optional: true }),
//     ])
//   ])
// ])
