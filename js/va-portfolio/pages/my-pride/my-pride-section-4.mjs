import { BaseElement, html, css } from '../../../base-element.mjs'

class MyPrideSection4 extends BaseElement {
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
                    color: black;
                }

                * {
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .container {
                    position: relative;
                    display: flex;
                    width: 100%;
                    gap: 20px;
                }

                .layout-left {
                    display: flex;
                    width: 100%;
                    justify-content: right;
                    align-items: center;
                    background-image: url(images/home/bgs2-left.avif);
                    background-size: 30%;
                    background-position: 0 100%;
                    background-repeat: no-repeat;
                }

                .layout-right {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 70%;
                    gap: 20px;
                }

                .image-right {
                    width: 80%;
                    cursor: pointer;
                }

                h2 {
                    margin: 0;
                    line-height: 1.2;
                    font-weight: 300;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                }

                h3 {
                    margin: 0;
                    line-height: 1.2;
                    font-size: clamp(1rem, 8vw, 3.75rem);
                    font-weight: 400;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    line-height: 1.6;
                    font-weight: 700;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    word-wrap: break-word;
                    text-align: justify;
                }

                a {
                    position: relative;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 0 0 0 auto;
                    color: #ffffff !important;
                    background-color: var(--background-green);
                    font-size: 1rem;
                    line-height: 1.4;
                    vertical-align: middle;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    user-select: none;
                    padding: 10px 30px;
                    border-radius: 0;
                    font-weight: 600;
                    &:hover {
                        background-color: var(--background-green-hover);
                    }
                }


                @media (max-width: 768px) {
                    .container {
                        flex-wrap: wrap;
                    }
                    .layout-middle{
                        margin-right: 20px;
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
                <div class="layout-left">
                    <div class="layout-middle">
                        <h2>Neural Bun</h2>
                        <h3>AI must get away</h3>
                        <p>A cheerful bun runs along a forest road. Grandfather, grandmother, hare, wolf, bear and fox are trying to catch him. Will he leave them that is the question. See how artificial intelligence will help him do this. The Crazy Bun can talk. Click on the game area to hear his sarcastic voice.</p>
                        <a href="https://neuro-rsu.github.io/neuro-bun" target="_blank" title="Watch Crazy Bun Show">Crazy Bun Show</a>
                    </div>
                </div>
                <div class="layout-right">
                    <img class="image-right" src="images/my-pride/neuro-bun.avif" title="Crazy Bun Code" @click=${() => window.open('https://github.com/neuro-rsu/neuro-bun/blob/main/index.html', '_blank')} alt="">
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

customElements.define("my-pride-section-4", MyPrideSection4);

// Одинокий динозавр Т-Рех бежит по выжженной пустыне под музыку легендарной рок группы, основанной Марком Боланом в 1967 году. День сменяется ночью. Ему встречаются огромные кактусы и страшные птеродактили. Как ему выжить в этих страшных условиях? Исскуственный интеллект может помочь ему. Посмотрите как обучается нейронная сеть с подкреплением и вы поймете как зародилось челевечество.
