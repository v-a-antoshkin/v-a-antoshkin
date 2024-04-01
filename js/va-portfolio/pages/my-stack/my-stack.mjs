import { BaseElement, html, css} from '../../../base-element.mjs'

import './my-stack-section-1.mjs';
import './my-stack-section-2.mjs';
import './my-stack-section-3.mjs';

class MyStack extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    static get styles() {
        return [
            css`
                my-stack-section-1,
                my-stack-section-2,
                my-stack-section-3,
                my-stack-section-4,
                my-stack-section-5,
                my-stack-section-6 {
                    min-height: 90vh;
                    margin-bottom: 2%;
                }
            `]
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
            <my-stack-section-6></my-stack-section-6>
        `;
    }

    * lazyLoad() {
    const lazyPages=['my-stack-section-4', 'my-stack-section-5', 'my-stack-section-6'];
    for (const pageName of lazyPages) {
        import(`./${pageName}.mjs`);
        yield pageName;
    }
}

    firstUpdated() {
        super.firstUpdated();
        const lazyIterator = this.lazyLoad();
        const lazyInterval = setInterval(() => lazyIterator.next().done ? clearInterval(lazyInterval) : '', 1000);
        scrollTo(0, 0);
    }
}

customElements.define("my-stack", MyStack);