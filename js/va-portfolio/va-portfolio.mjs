import { BaseElement, html, css } from '../base-element.mjs'

import './va-portfolio-header.mjs';
import './va-portfolio-footer.mjs';

import './pages/home/home.mjs'
// import './pages/about-me/about-me.mjs'

class VAPortfolio extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },

        }
    }

    static get styles() {
        return [
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
        addEventListener("hashchange", () => {this.requestUpdate()});
        // this.lazyLoad = {};
        // this.lazyLoad[Symbol.iterator] = function* () {
        //     var index = 0;
        //     while (true) {
        //         console.log(index);
        //         yield index++;
        //     }
        // }
    }

    get pageName() {
        return location.hash.startsWith('#') ? location.hash.slice(1) : location.hash || 'home-page';
    }

    * lazyLoad() {
        const lazyPages=['about-me', 'my-pride', 'my-stack', 'catch-me'];
        for (const pageName of lazyPages) {
            import(`./pages/${pageName}/${pageName}.mjs`);
            yield pageName;
        }
    }

    render() {
        if (!window.customElements.get(this.pageName)) {
            import(`./pages/${this.pageName}/${this.pageName}.mjs`);
        }
        const page = document.createElement(this.pageName);
        return html`
            <va-portfolio-header active-page="${this.pageName}"></va-portfolio-header>
            <main>
                ${page}
            </main>
            <va-portfolio-footer></va-portfolio-footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        const lazyIterator = this.lazyLoad();
        const lazyInterval = setInterval(() => lazyIterator.next().done ? clearInterval(lazyInterval) : '', 2000);
    }
}

customElements.define("va-portfolio", VAPortfolio);