// fade.animation.ts

import {
  trigger,
  animate,
  transition,
  style,
  query,
  state,
} from "@angular/animations";
const speed: string = "200ms";
export const fadeAnimation = trigger("fadeAnimation", [
  //   state('void', style({ position: 'fixed', opacity: 1 })),
  //  state('*', style({ position: 'absolute', opacity: 1, transform: 'translateX(0)' })),
  transition(":enter", [
    style({ opacity: 0, transform: "translateX(20%)" }),
    animate("1s ease", style({ opacity: 1, transform: "translateX(0%)" })),
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate(".5s ease", style({ transform: "translateX(-20%)", opacity: 0 })),
  ]),
]);

// trigger('fadeAnimation', [
//     state('*', style({ transform: 'translateX(0)' })),
//     transition('void => backward', [
//         style({ transform: 'translateX(-100%' }),
//         animate(speed)
//     ]),
//     transition(':enter => void', [
//         animate(speed, style({
//             transform: 'translateX(100%)'
//         }))
//     ]),
//     transition('void => forward', [
//         style({ transform: 'translateX(100%' }),
//         animate(speed)
//     ]),
//     transition(':leave => void', [
//         animate(speed, style({
//             transform: 'translateX(-100%)'
//         }))
//     ])
// ])
