import { PortfolioElement, html, css } from '../../../portfolio-element.mjs'

import '../../../../components/button/toggle-button.mjs';


class HomeSection7 extends PortfolioElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            css`
                :host {
                    display: flex;
                    position: relative;
                    height: 455px;
                    justify-content: center;
                    align-items: center;
                    background-image: linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("images/home/bgs7.avif");
                    background-position: 50% 50%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    color: white;
                }

                * {
                    box-sizing: border-box;
                }


                .container {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    flex-direction: column;
                    padding: 0 10px;
                }

                .container-layout {
                    display: flex;
                    justify-content: space-between;
                }

                h2 {
                    margin: 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 30px;
                }

                p {
                    font-family: var(--open-font-family);
                    font-weight: 400;
                    line-height: 1.6;
                    font-size: 1rem;
                    word-wrap: break-word;
                    position: relative;
                    text-align: left;
                }

                .horizontal-line {
                    width: 120px;
                    height: 6px;
                    margin-top: 24px;
                    background-color: var(--native-background-color);
                }

                @media (max-width: 320px) {
                    .horizontal-line {
                        display: none;
                    }
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
            <div class="container">
                <h2>Seven reasons why you need me</h2>
                <div class="container-layout">
                    <div class="horizontal-line"></div>
                    <p>1. I'm ​insanely intelligent.<br>2.&nbsp; I'm incredibly talented.<br>3. I'm attractive.<br>4. I learn instantly.&nbsp;<br>5. I'm useful.&nbsp;<br>6. I'm purposeful.&nbsp;<br>7. I suffer from low self-esteem.</p>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 920px)" );
        this.isVertical = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
    }

    matchMediaChange(e) {
        this.isVertical = e.matches;
    }

}

customElements.define("home-section-7", HomeSection7);