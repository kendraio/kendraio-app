import {Injectable, HostBinding, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Injectable()
export class AnimationService {

    emitCurrentDirection: EventEmitter<Object> = new EventEmitter<Object>();
    routing: string;

    constructor(private _router: Router) { }

    animationDirection() {
        return this.routing;
    }

    routingService(direction, nextRoute) {
        this.routing = direction;
        this.emitCurrentDirection.emit(this.routing);
        setTimeout(() => { // timeout pushes this code to the back of the event queue
            this._router.navigate(['register/start/' + nextRoute],  {queryParamsHandling: 'merge'})
        });
    }
}
