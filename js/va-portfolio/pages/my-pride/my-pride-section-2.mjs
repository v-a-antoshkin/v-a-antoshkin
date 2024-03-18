import { BaseElement, html, css } from '../../../base-element.mjs'

class MyPrideSection2 extends BaseElement {
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
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    color: black;
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }

                .layout-left {
                    position: relative;
                    display: flex;
                    flex-basis: 50%;
                    justify-content: space-between;
                    min-height: 800px;
                }

                .image-left {
                    position: absolute;
                    bottom: 0px;
                    width: 40%;
                    height: 50%;
                    object-fit: contain;
                    object-position: 0% 100%;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .image-right-container {
                    line-height: 0;
                    width: 100%;
                }

                .image-right {
                    width: 100%;
                    padding: 0 20px 0px 20px;
                    cursor: pointer;
                }

                .layout-middle {
                    display: flex;
                    position: absolute;
                    right: 0;
                    width: 70%;
                    right: 0;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 1;

                }

                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 79px 0 0;
                }

                h3 {
                    font-size: 3.75rem;
                    font-weight: 300;
                    line-height: 1.2;
                    margin: 25px 0 0;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    font-weight: 700;
                    font-size: 1.25rem;

                    line-height: 1.6;
                    word-wrap: break-word;
                }

                a {
                    position: relative;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px 0 0 auto;
                    color: #ffffff !important;
                    background-color: #17cad0 !important;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    line-height: 1.4;
                    vertical-align: middle;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    user-select: none;
                    padding: 10px 30px;
                    border-radius: 0;
                }
                a:hover {
                    background-color: #15b6bb !important;
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
                    <img class="image-left" src="images/home/bgs2-left.avif" alt="">
                    <div class="layout-middle">
                        <h2>Neural T-Rex</h2>
                        <h3>Marc Bolan is alive</h3>
                        <p>A lonely dinosaur T-Rex runs through the scorched desert to the music of the legendary rock band founded by Marc Bolan in 1967. Day gives way to night. He encounters huge cacti and scary pterodactyls. How can he survive in these terrible conditions? Artificial intelligence can help him. Watch how a reinforcement neural network learns and you will understand how humanity began.</p>
                        <a href="https://github.com/neuro-rsu/neuro-dino/blob/main/index.html" target="_blank" title="github">CODE EXAMPLE</a>
                    </div>
                </div>
                <div class="layout-right">
                    <div class="image-right-container">
                        <img class="image-right" src="images/my-pride/neuro-dino.avif" title="Watch T-Rex AI" @click=${() => window.open('https://neuro-rsu.github.io/neuro-dino', '_blank')} alt="">
                    </div>
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

customElements.define("my-pride-section-2", MyPrideSection2);

// Одинокий динозавр Т-Рех бежит по выжженной пустыне под музыку легендарной рок группы, основанной Марком Боланом в 1967 году. День сменяется ночью. Ему встречаются огромные кактусы и страшные птеродактили. Как ему выжить в этих страшных условиях? Исскуственный интеллект может помочь ему. Посмотрите как обучается нейронная сеть с подкреплением и вы поймете как зародилось челевечество.