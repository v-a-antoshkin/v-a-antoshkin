import { BaseElement, html} from '../../../base-element.mjs'

import './my-certificates-section-1.mjs';
import './my-certificates-section-2.mjs';

class MyCertificates extends BaseElement {
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
            <my-certificates-section-1></my-certificates-section-1>
            <my-certificates-section-2></my-certificates-section-2>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("my-certificates", MyCertificates);