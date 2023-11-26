import { PortfolioElement, html} from '../../../portfolio-element.mjs'

import './about-me-section-1.mjs';
import './about-me-section-2.mjs';
import './about-me-section-3.mjs';
import './about-me-section-4.mjs';
import './about-me-section-5.mjs';
import './about-me-section-6.mjs';
import './about-me-section-7.mjs';
import './about-me-section-8.mjs';

class AboutMe extends PortfolioElement {
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
            <about-me-section-1></about-me-section-1>
            <about-me-section-2></about-me-section-2>
            <about-me-section-3></about-me-section-3>
            <about-me-section-4></about-me-section-4>
            <about-me-section-5></about-me-section-5>
            <about-me-section-6></about-me-section-6>
            <about-me-section-7></about-me-section-7>
            <about-me-section-8></about-me-section-8>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        scrollTo(0, 0);
    }
}

customElements.define("about-me", AboutMe);