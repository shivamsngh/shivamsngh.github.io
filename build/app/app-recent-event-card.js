/*! Built with http://stenciljs.com */
const { h } = window.App;

class RecentEventCard {
    watchHandler(newValue, oldValue) {
        console.log('The new value of activated is: ', newValue, 'oldvalue', oldValue);
    }
    render() {
        const eventBubbleInlineStyle = {
            float: ''
        };
        return (h("div", { class: "min-margin" },
            h("div", { class: "message is-dark" },
                h("div", { class: "message-header" },
                    h("p", null, this.cardEvent.eventName),
                    h("a", { href: "#", class: "icon" },
                        h("span", { class: "", style: eventBubbleInlineStyle }))),
                h("div", { class: "message-body" },
                    this.cardEvent.details,
                    h("hr", null),
                    h("span", null,
                        h("date", { class: "is-pulled-left" },
                            " ",
                            this.cardEvent.startDate)),
                    h("a", { href: this.cardEvent.link, class: "is-pulled-right", target: "_blank", rel: "noopener" }, "Details"),
                    h("hr", { class: "is-invisible" })))));
    }
    static get is() { return "app-recent-event-card"; }
    static get properties() { return {
        "cardEvent": {
            "type": "Any",
            "attr": "card-event",
            "watchCallbacks": ["watchHandler"]
        }
    }; }
    static get style() { return ".min-margin{\n    margin:10px;\n}"; }
}

export { RecentEventCard as AppRecentEventCard };
