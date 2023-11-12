import { PortfolioElement, html, css } from '../portfolio-element.mjs'

import './va-portfolio-header.mjs';
import './va-portfolio-footer.mjs';
import './va-portfolio-section-1.mjs';
import './va-portfolio-section-2.mjs';
import './va-portfolio-section-3.mjs';
import './va-portfolio-section-4.mjs';
import './va-portfolio-section-5.mjs';
import './va-portfolio-section-6.mjs';
import './va-portfolio-section-7.mjs';
import './va-portfolio-section-8.mjs';

import { vaPortfolioStyles } from './va-portfolio-css.mjs';

class VAPortfolio extends PortfolioElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },

        }
    }

    static get styles() {
        return [
            vaPortfolioStyles,
            css`
                :host {
                    position: relative;
                    display: flex;
                    flex-direction: column;cur
                    justify-content: center;
                    height: 100%;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
            <va-portfolio-header></va-portfolio-header>
            <main>
                <va-portfolio-section-3></va-portfolio-section-3>
                <va-portfolio-section-4></va-portfolio-section-4>
                <va-portfolio-section-5></va-portfolio-section-5>
                <va-portfolio-section-7></va-portfolio-section-7>
                <va-portfolio-section-6></va-portfolio-section-6>
                <va-portfolio-section-8></va-portfolio-section-8>
                <va-portfolio-section-1></va-portfolio-section-1>
                <va-portfolio-section-2></va-portfolio-section-2>
            </main>
            <va-portfolio-footer></va-portfolio-footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
}

customElements.define("va-portfolio", VAPortfolio);