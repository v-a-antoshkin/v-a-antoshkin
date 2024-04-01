import { BaseElement, html, css} from '../../../base-element.mjs'

import './my-pride-section-1.mjs';
import './my-pride-section-2.mjs';

class MyPride extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }
    static get styles() {
        return [
            css`
                my-pride-section-2,
                my-pride-section-3,
                my-pride-section-4,
                my-pride-section-5,
                my-pride-section-6 {
                    min-height: 90vh;
                }

                @media (max-width: 768px) {
                    my-pride-section-2,
                    my-pride-section-3,
                    my-pride-section-4,
                    my-pride-section-5,
                    my-pride-section-6 {
                        margin-top: 3%;
                    }
                    my-pride-section-5 {
                        margin-bottom: 3%;
                    }
                }
            `]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
            <my-pride-section-1></my-pride-section-1>
            <my-pride-section-2></my-pride-section-2>
            <my-pride-section-3></my-pride-section-3>
            <my-pride-section-4></my-pride-section-4>
            <my-pride-section-5></my-pride-section-5>
            <my-pride-section-6></my-pride-section-6>
        `;
    }

    * lazyLoad() {

    const lazyPages=['my-pride-section-3', 'my-pride-section-4', 'my-pride-section-5', 'my-pride-section-6'];
    for (const pageName of lazyPages) {
        import(`./../../pages/my-pride/${pageName}.mjs`);
        yield pageName;
    }
}

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
        const lazyIterator = this.lazyLoad();
        const lazyInterval = setInterval(() => lazyIterator.next().done ? clearInterval(lazyInterval) : '', 500);
    }
}

customElements.define("my-pride", MyPride);