import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection8 extends BaseElement {
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
                    cursor: pointer;
                }

                h2 {
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
                    background-color: var(--native-background-color);
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
                <div class="container-layout" @click=${() => window.open('https://neuro-rsu.github.io/neuro-dino/', '_blank')}>
                    <h2>1. Dino T-Rex Game</h2>
                    <p>The famous dinosaur T-Rex runs through the scorched desert. Huge cacti and scary pterodactyls meet on his way. Artificial intelligence can help him survive in such terrible conditions</p>
                </div>
                <div class="container-layout" @click=${() => window.open('https://neuro-rsu.github.io/neuro-raccoon/', '_blank')}>
                    <h2>2. Crazy Racoon</h2>
                    <p>A crazy raccoon rides in the back of a red pickup truck. He is very hungry. He catches goldfish and eats them. Black fish kill him immediately. See how quickly artificial intelligence will learn to survive in such strange conditions</p>
                </div>
                <div class="container-layout" @click=${() => window.open('https://neuro-rsu.github.io/neuro-bun/', '_blank')}>
                    <h2>3. Crazy Bun</h2>
                    <p>A famous bun runs along a forest road. Grandfather, grandmother, hare, wolf, bear and fox are trying to catch him. See how artificial intelligence will help him escape from them.</p>
                </div>
                <div class="container-layout" @click=${() => window.open('https://neuro-rsu.github.io/crazy-birds/', '_blank')}>
                    <h2>4. Crazy Birds</h2>
                    <p>A flock of birds flies in a closed area at different speeds. They collide with walls and fly in the opposite direction. See how the universal mind will help them all get together again.</p>
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

customElements.define("home-section-8", HomeSection8);