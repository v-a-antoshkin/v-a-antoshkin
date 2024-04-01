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
                    background-size: 35%;
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
                        <h2>Neural T-Rex</h2>
                        <h3>Marc Bolan is alive</h3>
                        <p>A lonely dinosaur T-Rex runs through the scorched desert to the music of the legendary rock band founded by Marc Bolan in 1967. Day gives way to night. He encounters huge cacti and scary pterodactyls. How can he survive in these terrible conditions? Artificial intelligence can help him. Watch how a reinforcement neural network learns and you will understand how humanity began.</p>
                        <a href="https://neuro-rsu.github.io/neuro-dino" target="_blank" title="Watch T-Rex AI">T-Rex Show</a>
                    </div>
                </div>
                <div class="layout-right">
                    <img class="image-right" src="images/my-pride/neuro-dino.avif" title="Watch T-Rex Code" @click=${() => window.open('https://github.com/neuro-rsu/neuro-dino/blob/main/index.html', '_blank')} alt="">
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

