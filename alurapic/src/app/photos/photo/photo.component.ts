import { Component, Input, OnInit } from '@angular/core';

const cloud = 'http://localhost:3000/imgs/';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {

    @Input() description = '';
    private _url = '';

    @Input() set url(url: string) {

        if (url && url.startsWith('data')) {
            this._url = url;
        } else {
            this._url = cloud + url;
        }
    }

    get url() {
        return this._url;
    }
}
