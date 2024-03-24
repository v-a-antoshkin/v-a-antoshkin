import { BaseElement, html} from '../../../base-element.mjs'

import './my-courses-section-1.mjs';
import './my-courses-section-2.mjs';
import './my-courses-section-3.mjs';


class MyCourses extends BaseElement {
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
            <my-courses-section-1></my-courses-section-1>
            <my-courses-section-3></my-courses-section-3>
            <my-courses-section-2></my-courses-section-2>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("my-courses", MyCourses);