import { BaseElement, html} from '../../../base-element.mjs'

import './home-section-1.mjs';
import './home-section-2.mjs';

class HomePage extends BaseElement {
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
            <home-section-1></home-section-1>
            <home-section-2></home-section-2>
            <home-section-3></home-section-3>
            <home-section-4></home-section-4>
            <home-section-5></home-section-5>
            <home-section-6></home-section-6>
            <home-section-7></home-section-7>
            <home-section-8></home-section-8>
        `;
    }

    #nextSection(section) {
        const sectionName = section.tagName.toLowerCase().split('-');
        ++sectionName[sectionName.length - 1];
        return this.shadowRoot.querySelector(sectionName.join('-'));
    }

    firstUpdated() {
        super.firstUpdated();
        const section = this.shadowRoot.querySelector('home-section-2');
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.observer.unobserve(entry.target)
                const nextSection = this.#nextSection(entry.target);
                if (nextSection) {
                    import(`./${nextSection.tagName.toLowerCase()}.mjs`);
                    this.observer.observe(nextSection);
                }
              }
            })
        }

        const options = {
            // root: по умолчанию window, но можно задать любой элемент-контейнер
            rootMargin: '0px 0px 75px 0px',
            threshold: 0,
        }
        this.observer = new IntersectionObserver(callback, options)
        this.observer.observe(section)
    }
}

customElements.define("home-page", HomePage);