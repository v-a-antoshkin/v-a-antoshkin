import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/icon/icon.mjs';
import '../../../../components/button/link-button.mjs';

import courses from './courses.mjs';

class MyCoursesSection2 extends BaseElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
            currentCourse: { type: BigInt, default: 0, local: true },
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    color: black;
                    margin: 50px 0;
                }

                .container {
                    width: 100%;
                    height: 100%;
                    max-width: 1000px;
                }

                .writer-image {
                    background: url("images/my-certificates/scientist.jpg") 50% center / cover no-repeat;
                    border-radius: 50%;
                }

                .circle-image {
                    background-image: linear-gradient(#c37cd8, #ab4ec7);
                    border-radius: 50%;
                    aspect-ratio: 1 / 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 8vw;
                    font-weight: bold;
                    color: white;
                }

                simple-icon {
                    width: 100%;
                }

                .container-layout-1 {
                    display: flex;
                    flex-direction: column;
                    grid-column: 2 / 9;
                    grid-row: 7 / 13;
                    padding: 24px 40px;
                    border-radius: 30px;
                    text-align: left;
                    text-size-adjust: 100%;
                    background-color: white;
                    box-shadow: 5px 5px 20px 0 rgba(0,0,0,0.15);
                    max-width: 350px;
                    min-width: 280px;
                    justify-content: center;
                }

                .layout-right {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    min-height: 800px;
                }

                .layout-left {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 10px 0;
                    font-family: var(--ubuntu-font-family);
                }
                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 0;
                }
                p {
                    font-weight: 400;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    word-wrap: break-word;
                    margin: 0;
                }
                a {
                    text-decoration: underline;
                    color: gray;
                    font-weight: 700;
                }
                a:hover {
                    color: black;
                }
                a:active {
                    color: red;
                }
                .carousel-3d {
                    -webkit-perspective: 500px;
                    perspective: 500px;
                    display: flex;
                    flex-basis: 100%;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                }
                .carousel-3d > * {
                    flex: 0 0 auto;
                }
                .carousel-3d figure {
                    margin: 0;
                    width: 50%;
                    -webkit-transform-style: preserve-3d;
                    transform-style: preserve-3d;
                    transition: -webkit-transform 0.5s;
                    transition: transform 0.5s;
                    transition: transform 0.5s, -webkit-transform 0.5s;
                }
                .carousel-3d figure img,
                .carousel-3d figure div {
                    width: 100%;
                    padding: 0;
                }

                .carousel-3d figure div:not(:first-of-type),
                .carousel-3d figure img:not(:first-of-type) {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                link-button {
                    display: block;
                    margin: 0 auto;
                }
                .container{

                }
                .course-1-1 {
                    background-image: url(images/my-courses/sacod/jpg/bg-1.jpg);
                }
                .course-1-2 {
                    background-image: url(images/my-courses/sacod/jpg/bg-2.jpg);
                }
                .course-1-3 {
                    background-image: url(images/my-courses/sacod/jpg/bg-3.jpg);
                }
                .course-1-4 {
                    background-image: url(images/my-courses/sacod/jpg/bg-4.jpg);
                }
                .course-1-5 {
                    background-image: url(images/my-courses/sacod/jpg/bg-5.jpg);
                }
                .course-1-6 {
                    background-image: url(images/my-courses/sacod/jpg/bg-6.jpg);
                }
                .course-1-7 {
                    background-image: url(images/my-courses/sacod/jpg/bg-7.jpg);
                }
                .course-1-8 {
                    background-image: url(images/my-courses/sacod/jpg/bg-8.jpg);
                }
                .course-1-9 {
                    background-image: url(images/my-courses/sacod/jpg/bg-9.jpg);
                }
                .course-1-10 {
                    background-image: url(images/my-courses/sacod/jpg/bg-1.jpg);
                }
                .course-2,
                .course-3,
                .course-4
                {
                    background-image: url(images/my-courses/python/jpg/bg-1.jpg);
                    background-size: contain;
                }

            `
        ]
    }


    constructor() {
        super();
        this.version = "1.0.0";
        this.currImage = 0;
        this.isMouseDown = false;
        this.xClick = 0;
    }

    mouseDown2(e) {
        e.stopPropagation()
        console.log('111');
    }
    mouseUp2(e) {
        e.stopPropagation()
        console.log('111');
    }
    mouseMove2(e) {
        e.stopPropagation()
        console.log('111');
    }

    render() {
        return html`
            <div class="carousel-3d" data-gap="50" >
                <figure @mousedown=${this.mouseDown} @mouseup=${this.mouseUp} @mousemove=${this.mouseMove}>
                    ${courses[this.currentCourse].links.map( (link, index) =>
                        html `
                            <div>
                                <img loading="lazy" src="images/my-courses/${courses[this.currentCourse].folder}/avif/${index + 1}.avif" alt=""/>
                                <link-button class=${`course-${this.currentCourse} course-${this.currentCourse}-${index+1}`} href=${link} @mousedown=${this.mouseDown2} @mouseup=${this.mouseUp2} @mousemove=${this.mouseMove2}>Know More</link-button>
                            </div>`
                    )}
                </figure>
            </div>
        `;

    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 920px)" );
        this.isVertical = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
        var carousels = this.renderRoot.querySelectorAll(".carousel-3d");
        for (var i = 0; i < carousels.length; i++) {
            this.carousel(carousels[i]);
        }
    }

    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('currentCourse')) {
            var carousels = this.renderRoot.querySelectorAll(".carousel-3d");
            for (var i = 0; i < carousels.length; i++) {
                this.carousel(carousels[i]);
            }
        }
    }
    certificateClick(index) {
        let currentImageIndex = this.currImage % courses[this.currentCourse].links.length
        if (currentImageIndex < 0) {
            currentImageIndex += courses[this.currentCourse].links.length
        }
        if (currentImageIndex === 0) {
            if (index === 1) this.currImage++
            else this.currImage--
        } else {
            if (currentImageIndex === courses[this.currentCourse].links.length - 1) {
                if (index === 0) this.currImage++
                else this.currImage--
            }
            else {
                this.currImage += index < currentImageIndex ? -1 : 1;
            }
        }
        this.rotateCarousel(this.currImage);
    }
    rotateCarousel(imageIndex) {
        const figure = this.renderRoot.querySelector('figure');
        const theta = 2 * Math.PI / courses[this.currentCourse].links.length;
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }

    mouseDown(e) {
        this.xClick = e.pageX;
        this.isMouseDown = true;
    };

    mouseUp(e){
        if (Math.abs(this.xClick - e.pageX) <= 5) {
            this.currImage += e.pageX > window.innerWidth/2 ? 1 : -1;
            window.innerWidth
            this.rotateCarousel(this.currImage);
        }
        this.isMouseDown = false;
    };

    mouseMove = (e) => {
        if (this.isMouseDown) {
            let xMove = e.pageX;
            if (Math.floor(this.xClick - xMove) > 5) {
                this.currImage++;
                this.rotateCarousel(this.currImage);
                this.isMouseDown = false;
            }
            else if (Math.floor(this.xClick - xMove) < -5) {
                this.currImage--;
                this.rotateCarousel(this.currImage);
                this.isMouseDown = false;
            }
        }
    };

    setupCarousel(s) {
        const n =  courses[this.currentCourse].links.length
        const apothem = s / (2 * Math.tan(Math.PI / n));
        const figure = this.renderRoot.querySelector('figure');
        const gap = figure.parentNode.dataset.gap || 0;
        const theta = 2 * Math.PI / n;
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;
        const images = figure.children;
        for (var i = 0; i < n; i++)
            images[i].style.padding = `0 ${gap}px`;
        for (i = 0; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if ("bfc" in figure.parentNode.dataset)
            for (i = 0; i < n; i++)
                images[i].style.backfaceVisibility = "hidden";
        this.rotateCarousel(this.currImage);
    }

    carousel(root) {
        var figure = root.querySelector("figure"),
        images = figure.children,
        n = images.length,
        gap = root.dataset.gap || 0,
        bfc = "bfc" in root.dataset;
        const theta = 2 * Math.PI / n;
        this.currImage = 0;
        this.setupCarousel(parseFloat(getComputedStyle(images[0]).width +100));
        window.addEventListener("resize", () => {
            this.setupCarousel(parseFloat(getComputedStyle(images[0]).width +100));
        });

        // figure.onmousedown = (event) => {
        //     this.xClick = event.pageX;
        //     this.isMouseDown = true;
        // };
        // figure.onmouseup = (event) => {
        //     this.isMouseDown = false;
        // };
        // figure.onmousemove = (event) => {
        //     if (this.isMouseDown) {
        //         var xMove = event.pageX;
        //         if (Math.floor(this.xClick - xMove) > 5) {
        //             this.currImage++;
        //             rotateCarousel(this.currImage);
        //             this.isMouseDown = false;
        //         }
        //         else if (Math.floor(this.xClick - xMove) < -5) {
        //             this.currImage--;
        //             rotateCarousel(this.currImage);
        //             this.isMouseDown = false;
        //         }
        //     }
        // };
        /* Смена слайдов пальцем */
        figure.ontouchstart = (event) => {
            xClick = event.changedTouches[0].pageX;
            mouseDown = true;
        };
        figure.ontouchend = (event) => {
            mouseDown = false;
        };
        figure.ontouchmove = (event) => {
            if (mouseDown) {
                var xMove = event.changedTouches[0].pageX;
                if (Math.floor(xClick - xMove) > 5) {
                    this.currImage++;
                    rotateCarousel(this.currImage);
                    mouseDown = false;
                }
                else if (Math.floor(xClick - xMove) < -5) {
                    this.currImage--;
                    rotateCarousel(this.currImage);
                    mouseDown = false;
                }
            }
        };
    }
    matchMediaChange(e) {
        this.isVertical = e.matches;
    }

}

customElements.define("my-courses-section-2", MyCoursesSection2);