/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as firebase } from './chunk-c93aabbb.js';
import { a as CardEvent } from './chunk-0064697c.js';
import './chunk-27a2b96a.js';

class MyWebEvent {
    constructor() {
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
        return (this.events.map((event) => h("app-recent-event-card", { cardEvent: event })));
    }
    static get is() { return "my-web-event"; }
    static get properties() { return {
        "isServer": {
            "context": "isServer"
        }
    }; }
    static get style() { return ""; }
}

export { MyWebEvent };
