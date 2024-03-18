import { BaseElement, html} from '../../../base-element.mjs'

import './my-education-section-1.mjs';
import './my-education-section-2.mjs';

class MyEducation extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    * lazyLoad() {
        const lazyPages=['my-education-section-3', 'my-education-section-4', 'my-education-section-5', 'my-education-section-6', 'my-education-section-7'];
        for (const pageName of lazyPages) {
            import(`./../../pages/my-education/${pageName}.mjs`);
            yield pageName;
        }
    }
    render() {
        return html`
            <my-education-section-1></my-education-section-1>
            <my-education-section-2></my-education-section-2>
            <my-education-section-3></my-education-section-3>
            <my-education-section-4></my-education-section-4>
            <my-education-section-5></my-education-section-5>
            <my-education-section-6></my-education-section-6>
            <my-education-section-7></my-education-section-7>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
        const lazyIterator = this.lazyLoad();
        const lazyInterval = setInterval(() => lazyIterator.next().done ? clearInterval(lazyInterval) : '', 1000);
    }
}

customElements.define("my-education", MyEducation);