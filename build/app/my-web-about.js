/*! Built with http://stenciljs.com */
const { h } = window.App;

class MyWebAbout {
    render() {
        return (h("section", { class: "section", id: "about" },
            h("div", { class: "container has-text-centered content" },
                h("div", { class: "column text-center" },
                    h("h2", { class: "title" },
                        " ",
                        this.aboutYou.heading),
                    h("hr", { class: "light" }),
                    h("p", { class: "text-faded" },
                        " ",
                        this.aboutYou.introText,
                        " "),
                    h("p", { class: "text-faded" },
                        " ",
                        this.aboutYou.abtPassionText,
                        " "),
                    h("a", { href: "#services", class: "page-scroll btn btn-default btn-xl sr-button" }, " Know More! ")))));
    }
    static get is() { return "my-web-about"; }
    static get properties() { return {
        "aboutYou": {
            "type": "Any",
            "attr": "about-you"
        }
    }; }
    static get style() { return ""; }
}

class MyWebContact {
    render() {
        return (h("section", { id: "contact", class: "hero is-dark is-bold" },
            h("div", { class: "hero-body" },
                h("div", { class: "has-text-centered" },
                    h("h2", { class: "title" },
                        this.contact.heading,
                        " "),
                    h("hr", { class: "primary" }),
                    h("h3", { class: "subtitle" }, this.contact.text),
                    h("span", null)),
                h("div", { class: "columns" },
                    h("div", { class: "column has-text-centered" },
                        h("div", { class: "content" },
                            h("i", { class: "fa fa-phone fa-3x sr-contact" }),
                            h("p", null,
                                " ",
                                this.contact.phone,
                                " "))),
                    h("div", { class: "column has-text-centered" },
                        h("i", { class: "fa fa-envelope fa-3x" }),
                        h("p", null,
                            h("a", { href: "mailto:{{contact.email}}" },
                                " ",
                                this.contact.email)))))));
    }
    static get is() { return "my-web-contact"; }
    static get properties() { return {
        "contact": {
            "type": "Any",
            "attr": "contact"
        }
    }; }
    static get style() { return ""; }
}

class MyWebHome {
    constructor() {
        this.contact = {
            heading: `Let's Get In Touch!`,
            text: `Up for a discussion? That's great! Give a call or send an email and I will get back to you as soon as possible!`,
            phone: `+91 9696644017`,
            email: `shivamsngh@hotmail.com`
        };
        this.portfolio = [{
                title: 'Publications',
                details: ['Human Computer Interaction', 'Internet of Things', 'Artificial Intelligence'],
                thumbnail: '1.jpg'
            },
            {
                title: 'Applications',
                details: ['https://github.com/shivamsngh'],
                thumbnail: '2.jpg'
            },
            {
                title: 'Projects',
                details: ['AI, ML, Human Computer Interacion, IoT, Virtual and Augmented reality'],
                thumbnail: '3.jpg'
            }
        ];
        this.about = {
            heading: `A little about me!`,
            introText: `Human Computer Interaction, Internet of Things, Open Source Innovation, AI, Machine Learning, Modern Web Development,
    Progressive Web Apps.`,
            // tslint:disable-next-line:max-line-length
            abtPassionText: `I wander, try to jump from highest peaks in the world (Last jump was 160 M), take keen interest in Defence and Strategy discussions.`
        };
    }
    render() {
        return (h("div", null,
            h("my-web-header", { backgroundColor: "whitesmoke", textColor: "black" }),
            h("my-web-about", { aboutYou: this.about }),
            h("my-web-social", null),
            h("my-web-portfolio", { portfolio: this.portfolio }),
            h("my-web-more", null),
            h("my-web-contact", { contact: this.contact })));
    }
    static get is() { return "my-web-home"; }
    static get style() { return ".app-home {\n  padding: 10px;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n  \nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
}

class MyWebMore {
    render() {
        return (h("aside", { class: "bg-dark" },
            h("div", { class: "container text-center" },
                h("div", { class: "call-to-action" }))));
    }
    static get is() { return "my-web-more"; }
    static get style() { return ""; }
}

class MyWebPortfolio {
    constructor() {
        this.portfolio = [];
    }
    render() {
        return (h("section", { class: "section", id: "portfolio" },
            h("div", { class: "container has-text-centered" },
                h("h2", { class: "title" }, "Portfolio"),
                h("hr", { class: "light" })),
            h("div", { class: "columns" }, this.portfolio.map((item) => h("div", { class: "column" },
                h("article", { class: "message is-dark" },
                    h("div", { class: "message-header" },
                        h("p", null, item.title)),
                    h("div", { class: "message-body" },
                        h("a", { href: "#" }, item.details.map((detail) => h("div", { class: "project-name" }, detail))))))))));
    }
    static get is() { return "my-web-portfolio"; }
    static get properties() { return {
        "portfolio": {
            "type": "Any",
            "attr": "portfolio"
        }
    }; }
    static get style() { return ""; }
}

export { MyWebAbout, MyWebContact, MyWebHome, MyWebMore, MyWebPortfolio };
