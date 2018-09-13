import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/plataform-detector/platform-detector.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[immediateclick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(private element: ElementRef<any>, private platFormDetectorService: PlatformDetectorService) {
    }
    ngOnInit(): void {
        // tslint:disable-next-line:no-unused-expression
        this.platFormDetectorService.isPlatformBrowser &&
        this.element.nativeElement.click();
    }
}
