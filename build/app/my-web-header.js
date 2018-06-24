/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as firebase } from './chunk-c93aabbb.js';
import { a as CardEvent } from './chunk-0064697c.js';
import './chunk-27a2b96a.js';

class MyWebHeader {
    constructor() {
        this.type = 'plain';
        this.videoData = { location: '' };
        this.db = firebase.database();
        this.events = [];
    }
    getRecentEvents() {
        return this.db.ref('/events').once('value').then((eventSnapshot) => {
            this.events = (eventSnapshot.val()) || [new CardEvent()];
            console.log("events", this.events);
            return this.events;
        });
    }
    componentWillLoad() {
        if (this.isServer === false) {
            return this.getRecentEvents();
        }
    }
    render() {
        const tagInlineStyle = {
            color: this.textColor,
            textTransform: 'uppercase',
            'font-size': '50px'
        };
        const quoteInineStyle = {
            color: 'black',
            transform: 'scale(-1)'
        };
        const headerInlineStyle = this.backgroundImage ? {
            'background-image': `url('${this.backgroundImage}')`
        } : {
            'background': this.backgroundColor
        };
        console.log("headerinstyle", headerInlineStyle);
        if (this.type === 'video') {
            return (h("header", { class: "hero is-fullheight video is-dark is-bold", id: "home" },
                h("div", { id: "jumpvideo", class: "hero-video" },
                    h("video", { poster: "assets/img/bungy/optimized/thesuspension_0.jpg", id: "bgvid", playsinline: true, muted: true, autoplay: true, loop: true },
                        h("source", { src: "assets/video/leapofaplutonian.mp4", type: "video/mp4" }))),
                h("div", { class: "hero-body" },
                    h("div", { class: "container has-text-centered " },
                        h("nav", { class: "level " },
                            h("div", { class: "level-item has-text-centered" },
                                h("div", null,
                                    h("p", { class: "heading has-text-white" }, "Bucketlist"),
                                    h("p", { class: "title has-text-white" }, "Jump Number 1"))),
                            h("div", { class: "level-item has-text-centered" },
                                h("div", null,
                                    h("p", { class: "heading has-text-white" }, "Height"),
                                    h("p", { class: "title has-text-white" }, "83 meters"))),
                            h("div", { class: "level-item has-text-centered" },
                                h("div", null,
                                    h("a", { id: "bungyloc", class: "has-text-info", href: this.videoData.location, target: "_blank" },
                                        h("span", { class: "fas fa-4x fa-map-marker" })))),
                            h("div", { class: "level-item has-text-centered" },
                                h("div", null,
                                    h("p", { class: "heading has-text-white" }, "Place"),
                                    h("p", { class: "title has-text-white" }, "Rishikesh"))),
                            h("div", { class: "level-item has-text-centered" },
                                h("div", null,
                                    h("p", { class: "heading has-text-white" }, "Feature"),
                                    h("p", { class: "title has-text-white" }, "Highest in India"))))))));
        }
        else {
            return (h("header", { style: headerInlineStyle, class: "hero is-fullheight", id: "home" },
                "                ",
                h("aside", { class: "side-bar tile", id: "eventsarea" },
                    h("div", { id: "eventscreen" }, this.events.map((event) => h("app-recent-event-card", { class: "only-on-desktop", cardEvent: event })))),
                h("div", { class: "hero-head" }),
                h("div", { class: "hero-body" },
                    h("div", { class: "container content has-text-centered" },
                        h("h1", { class: "title", style: tagInlineStyle, id: "homeHeading" }, "Shivam Singh"),
                        h("hr", null),
                        h("p", null, "Researcher | Developer | Wanderer | Hobby Cook | Avid Reader"),
                        h("hr", { class: "border" }),
                        h("a", { href: "https://www.twitter.com/sshivamsngh", target: "_blank", rel: "noopener" },
                            h("span", { class: "fab fa-4x fa-twitter" })),
                        h("a", { href: "https://www.github.com/shivamsngh", target: "_blank", rel: "noopener" },
                            h("span", { class: "fab fa-4x fa-github" })),
                        h("a", { href: "https://www.linkedin.com/in/shivamsngh", target: "_blank", rel: "noopener" },
                            h("span", { class: "fab fa-4x fa-linkedin-in" })),
                        h("hr", null),
                        h("p", { style: quoteInineStyle },
                            h("i", { class: "fa fa-quote-left", "aria-hidden": "true" }),
                            " Kitkat , Batman, Rayban...",
                            h("i", { class: "fa fa-quote-right", "aria-hidden": "true" })))),
                h("div", { class: "hero-foot" })));
        }
    }
    static get is() { return "my-web-header"; }
    static get properties() { return {
        "backgroundColor": {
            "type": String,
            "attr": "background-color"
        },
        "backgroundImage": {
            "type": String,
            "attr": "background-image"
        },
        "isServer": {
            "context": "isServer"
        },
        "textColor": {
            "type": String,
            "attr": "text-color"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "videoData": {
            "type": "Any",
            "attr": "video-data"
        }
    }; }
    static get style() { return ".side-bar {\n    width: 25%;\n    position: absolute;\n    top: 50px;\n    text-align: left;\n    overflow-y: scroll;\n    height: 90%;\n    z-index: 10000;\n  }\n  .side-bar::-webkit-scrollbar {\n    width: 0 !important;\n  }\n  #eventscreen {\n    height: 100%;\n    width: 90%;\n    margin:auto;   \n    margin-top:10px; \n  }\n\n  #jumpvideo{\n    min-width: 100%;\n    overflow: hidden;\n  }\n\n  \@media screen and (max-width:720px){\n    .only-on-desktop{\n      display:none!important;\n    }\n    \n  }"; }
}

export { MyWebHeader };
