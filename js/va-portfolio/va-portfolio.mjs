import { PortfolioElement, html, css } from '../portfolio-element.mjs'

import './va-portfolio-header.mjs';
import './va-portfolio-footer.mjs';

import './pages/home/home.mjs'

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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
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
        this.pages = new Map();
        this.pages.set('', 'home-page');
        this.pages.set('#my-pride', 'my-pride');
        this.pages.set('#about-me', 'about-me');
        addEventListener("hashchange", () => {this.requestUpdate()});
    }

    myPridePage() {
        return html`
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
        `;
    }


    aboutMePage() {
        return html`
            <main>
                <va-portfolio-section-1></va-portfolio-section-1>
                <va-portfolio-section-2></va-portfolio-section-2>
            </main>
        `;
    }

    render() {
        const page = document.createElement(this.pages.get(location.hash));
        return html`
            <va-portfolio-header></va-portfolio-header>
            <main>
                ${page}
            </main>
            <va-portfolio-footer></va-portfolio-footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
}

customElements.define("va-portfolio", VAPortfolio);