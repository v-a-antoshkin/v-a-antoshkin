import { PortfolioElement, html, css } from '../portfolio-element.mjs'

class VAPortfolioSection2 extends PortfolioElement {
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
                    justify-content: center;
                    align-items: center;
                    background-color: var(--background-green);
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
                    padding: 0 10px;
                    margin-top: 65px;
                    margin-bottom: 65px;
                }

                .container-layout {

                }

                h4 {
                    margin: 20px 20px 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 700;
                    line-height: 1.2;
                    font-size: 20px;
                }

                p {
                    font-family: var(--open-font-family);
                    font-weight: 400;
                    line-height: 1.6;
                    font-size: 1rem;
                    word-wrap: break-word;
                    position: relative;
                    text-align: left;
                    margin: 20px;
                    font-style: italic;
                }

                .horizontal-line {
                    width: 120px;
                    height: 6px;
                    margin-top: 24px;
                    background-color: var(--nav-item-active-background-color);
                }

                @media (max-width: 1000px) {
                    .container {
                        flex-wrap: wrap;
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
                <div class="container-layout">
                    <h4>1. Dino T-Rex Game</h4>
                    <p>The Internet of Things has long been talked about amongst tech insiders as the next big innovation in home technology.</p>
                </div>
                <div class="container-layout">
                    <h4>2. Crazy Racoon</h4>
                    <p>While large-scale innovation in automation has traditionally been limited to the production side of society</p>
                </div>
                <div class="container-layout">
                    <h4>3. А bird in a cage</h4>
                    <p>After Bitcoin’s meteoric price jump in 2017, major tech players have begun to take cryptocurrencies seriously</p>
                </div>
                <div class="container-layout">
                    <h4>4. Polyathlon</h4>
                    <p>Blockchain, the decentralized ledger that holds together cryptocurrencies, has applications reaching</p>
                </div>
                <div class="container-layout">
                    <h4>5. Framework's competition</h4>
                    <p>Artificial intelligence is seeing the light and applications of the technology are already being worked on</p>
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

customElements.define("va-portfolio-section-2", VAPortfolioSection2);