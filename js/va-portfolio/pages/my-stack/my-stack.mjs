import { BaseElement, html} from '../../../base-element.mjs'

import './my-stack-section-1.mjs';
import './my-stack-section-2.mjs';
import './my-stack-section-3.mjs';
import './my-stack-section-4.mjs';
import './my-stack-section-5.mjs';

class MyStack extends BaseElement {
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
            <my-stack-section-1></my-stack-section-1>
            <my-stack-section-2></my-stack-section-2>
            <my-stack-section-3></my-stack-section-3>
            <my-stack-section-4></my-stack-section-4>
            <my-stack-section-5></my-stack-section-5>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("my-stack", MyStack);