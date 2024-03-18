import { BaseElement, html} from '../../../base-element.mjs'

import './catch-me-section-1.mjs';
import './catch-me-section-2.mjs';

class CatchMe extends BaseElement {
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
            <catch-me-section-1></catch-me-section-1>
            <catch-me-section-2></catch-me-section-2>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("catch-me", CatchMe);