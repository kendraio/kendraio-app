import { trigger, state, animate, style, transition } from '@angular/animations';

export function fade() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', opacity: 0 })),
        state('*', style({ position: 'relative', opacity: 0 })),
        transition(':enter', [style({ opacity: 0 }),
        animate('0.4s ease', style({ opacity: 1,  transform: 'translateX(20%)' }))]),

        transition(':leave', [style({ opacity: 1 }),
        animate('0.4s ease', style({ opacity: 0 }))])
    ]);
}
