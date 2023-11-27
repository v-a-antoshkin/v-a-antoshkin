import { PortfolioElement, html} from '../../../portfolio-element.mjs'

import './catch-me-section-1.mjs';
import './catch-me-section-2.mjs';

class CatchMe extends PortfolioElement {
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

        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("catch-me", CatchMe);