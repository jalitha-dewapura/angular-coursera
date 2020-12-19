import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [ 
        state('shown', style({
          transform: 'scale(1.0)',
          opacity: 1
        })),
        state('hidden', style({
          transform: 'scale(0.8)',
          opacity: 0
        })),
        transition('* => *', animate('1000ms ease-in-out'))
    ]);
}

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ 
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
        transition(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate('200ms')
        ]),
        transition(':leave', [
            animate('200ms', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}

export function expand() {
    return trigger('expand', [
        state('*', style({ 
                        opacity: 1, 
                        transform: 'translateX(0)' 
                    })),
        state('void', style({ 
                        transform: 'translateY(-50%)', 
                        opacity:0 
                    })),
        transition(':enter', [
            animate('200ms')
        ])
    ]);
}

export function disappear() {
    return trigger('disappear', [
        state('*', style({ 
            opacity: 1, 
            transform: 'scale(1.0)' 
        })),
        state('void', style({ 
            transform: 'scale(0.9)', 
            opacity:0 
        })),
        transition(':leave', [
            animate('6000ms')
        ])
    ])
}