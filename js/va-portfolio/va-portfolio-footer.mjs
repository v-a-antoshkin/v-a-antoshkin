import { BaseElement, html, css } from '../base-element.mjs'

import '../../components/button/social-button.mjs';

class VAPortfolioFooter extends BaseElement {
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
                    position: relative;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                * {
                    box-sizing: border-box;
                }

                .vertical-container {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    height: 90px;
                    width: 100%;
                    padding: 20px 10px;
                }
                portfolio-icon {
                    color: yellow;
                    background-color: red;
                }
                .container {
                    min-height: 180px;
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px;
                }
                .copyright {
                    display: flex;
                }

                p {
                    text-align: center;
                }

                a {
                    text-decoration: none;
                    text-wrap: nowrap;
                }

                footer {
                    color: #ffffff;
                    background-color: var(--footer-background-color);
                }

                .social-icons {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 4px;
                }

                .social-icons a {
                    border-radius: 50%;
                    background-color: white;
                    color: blue;
                }

                .logo {
                    border-radius: 50%;
                    color: var(--nav-item-active-color);
                    background-color: var(--native-background-color) !important;
                    line-height: 0;
                    cursor: pointer;
                }

                .logo > img {
                    object-fit: contain;
                    margin: 20px;
                    width: 80px;
                    height: 80px;
                }

                h3 {
                    margin: 0;
                    font-family: var(--ubuntu-font-family);
                    font-size: 18px;
                    line-height: 24px;
                }

                social-button {
                    width: 46px;
                    height: 46px;
                }

                @media (max-width: 300px) {
                    .logo {
                        display: none;
                    }
                }
            `
        ]
    }
    // social-button[name=telegram]{
    //     background-color: rgb(3, 155, 229);
    // }
    constructor() {
        super();
        this.version = "1.0.0";
    }

    logo() {
        return html`
            <div class="logo" @click="${() => scroll(0,0)}">
                <img src="images/logo-black.svg" alt="" />
            </div>
        `
    }

    social() {
        return html`
            <div class="social-icons">
                <social-button name="telegram" href="https://t.me/v_a_antoshkin" title="Telegram"></social-button>
                <social-button name="viber" href="viber://chat?number=+79056923607" scale="0.8" title="Viber"></social-button>
                <social-button name="whatsapp" href="https://wa.clck.bar/79056923607" scale="0.7" title="Whatsapp"></social-button>
                <social-button name="vk" href="https://vk.com/id63554332" title="VK"></social-button>
                <social-button name="github" href="https://github.com/v-a-antoshkin" title="Github"></social-button>
                <social-button name="envelope" href="mailto:v.a.antoshkin@mail.ru?subject=%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0" title="E-mail"></social-button>
            </div>
        `;
    }

    // copyright() {
    //     return html`
    //         <p>© Vladislav Antoshkin.  All Rights Reserved.</p>
    //         ${this.social()}
    //     `;
    //     if (this.isVertical) {
    //         return html`
    //             <p>© Vladislav Antoshkin.  All Rights Reserved.</p>
    //             ${this.social()}
    //         `;
    //     }
    //     else {
    //         return html`
    //             <div class="copyright">
    //                 ${this.social()}
    //                 <p>© Vladislav Antoshkin.  All Rights Reserved.</p>
    //             </div>
    //         `;
    //     }
    // }

    render() {
        return html`
            <footer>
                <div class="container">
                    ${this.logo()}
                    <p>© Vladislav Antoshkin.  All Rights Reserved.</p>
                    ${this.social()}
                </div>
            </footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 800px)" );
        this.isVertical = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
    }

    matchMediaChange(e) {
        this.isVertical = e.matches;
    }
}

customElements.define("va-portfolio-footer", VAPortfolioFooter);