import { BaseElement, html} from '../../../base-element.mjs'

import './my-publications-section-1.mjs';
import './my-publications-section-2.mjs';
import './my-publications-section-3.mjs';


class MyPublications extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
            <my-publications-section-1></my-publications-section-1>
            <my-publications-section-2></my-publications-section-2>
            <my-publications-section-3></my-publications-section-3>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("my-publications", MyPublications);