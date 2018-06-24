/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as firebase } from './chunk-c93aabbb.js';
import './chunk-27a2b96a.js';

class MyWebBlog {
    constructor() {
        this.blogs = [];
    }
    componentWillLoad() {
        return this.getBlogData();
    }
    getBlogData() {
        // let param = new HttpParamm();
        console.log("I am getblodata");
        return fetch(`${this.blogUrl}?key=${this.blogApiKey}`)
            .then(res => res.json())
            .then((blogData) => this.blogs = blogData.items)
            .catch(err => { throw new Error(err); });
    }
    render() {
        return (h("div", { class: "has-text-centered" },
            h("i", { class: "fa fa-4x fa-rss text-primary sr-icons" }),
            h("h3", null, "Blog"),
            this.blogs.map((blog) => h("div", { class: "notification" },
                h("a", { href: blog.url, target: "_blank", rel: 'noopener' }, blog.title),
                h("br", null),
                h("span", { innerHTML: blog.content })))));
    }
    static get is() { return "my-web-blog"; }
    static get properties() { return {
        "blogApiKey": {
            "type": String,
            "attr": "blog-api-key"
        },
        "blogUrl": {
            "type": String,
            "attr": "blog-url"
        }
    }; }
    static get style() { return ".notification{\n    max-height: 110px;\n    overflow: scroll;\n}"; }
}

class MyWebBookLibrary {
    constructor() {
        this.books = [];
        this.currentBook = { title: '', author: '', read: false, myrating: 0 };
        this.book2dArr = [[]];
        this.card = { image: 'assets/img/book-default.svg' };
    }
    componentDidLoad() {
        // this.books = this.books.reverse();
        this.modal = this.element.querySelector('#myModal');
        const newArr = [];
        const propArr = [...this.books];
        while (propArr.length)
            newArr.push(propArr.splice(0, 3));
        this.book2dArr = newArr;
    }
    openModal(ev) {
        console.log("element", this.element);
        console.log("event", ev);
        this.modal.classList.add('is-active');
    }
    closeModal(ev) {
        console.log("element", this.element);
        console.log("event", ev);
        this.modal.classList.remove('is-active');
    }
    render() {
        const bookInlineStyle = {
            currentReading: { color: 'green' },
            myRating: { color: 'green' }
        };
        return (h("div", null,
            h("div", { class: "has-text-centered" },
                h("i", { class: "fa fa-4x fa-book " }),
                h("h3", null, "Latest Reads")),
            h("div", { class: "card" },
                h("div", { class: "card-content" },
                    h("div", { class: "media" },
                        h("div", { class: "media-left" },
                            h("figure", { class: "image is-96x96" },
                                h("img", { src: this.card.image, alt: "Placeholder image" }))),
                        h("div", { class: "media-content" },
                            h("p", { id: "currentBook", class: "title is-4" },
                                this.currentBook.title,
                                " "),
                            h("p", { id: "currentAuthor", class: "subtitle is-6" },
                                "By- ",
                                this.currentBook.author),
                            h("span", { id: "currentRead", class: "tag is-primary is-medium" }, "Now Reading"))),
                    h("div", { class: "content" },
                        h("hr", null),
                        h("span", { style: bookInlineStyle.currentReading, id: "currentRating" },
                            "My Rating: ",
                            this.currentBook.myrating)),
                    h("hr", null),
                    h("p", { id: "bookcount", class: "is-pulled-lefthas-text-centered" },
                        "Book Count: ",
                        this.books.length),
                    h("button", { type: "button", class: "button is-pulled-right", "data-toggle": "modal", "data-target": "#myModal", onClick: (event) => this.openModal(event) }, " View All Reads"))),
            h("div", { class: "modal fade", id: "myModal", role: "dialog", "data-reveal": true },
                h("div", { class: "modal-background" }),
                h("div", { class: "modal-card" },
                    h("header", { class: "modal-card-head" },
                        h("h4", { class: "modal-card-title" }, "Books so far"),
                        h("button", { class: "delete", "aria-label": "close", onClick: (event) => this.closeModal(event) }, "\u00D7")),
                    h("section", { class: "modal-card-body" }, this.book2dArr.map((bookArr) => h("div", { class: "columns" }, bookArr.map((book) => h("div", { class: "column" },
                        h("div", { class: "card" },
                            h("div", { class: "card-content" },
                                h("div", { class: "media" },
                                    h("div", { class: "media-content" },
                                        h("p", { id: "currentBook", class: "title is-4" },
                                            book.title,
                                            " "),
                                        h("p", { id: "currentAuthor", class: "subtitle is-6" },
                                            "By- ",
                                            book.author))),
                                h("h5", { class: "tag is-info" }, book.read ? 'Completed' : 'Reading'),
                                h("p", { style: bookInlineStyle.myRating, id: "myrating" },
                                    h("sub", null, "My Rating")),
                                h("progress", { class: "progress is-small is-warning", value: book.myrating, max: "10" }, "45%")))))))),
                    h("footer", { class: "modal-card-foot" },
                        h("button", { class: "button", onClick: (event) => this.closeModal(event) }, "Close"))))));
    }
    static get is() { return "my-web-book-library"; }
    static get properties() { return {
        "book2dArr": {
            "state": true
        },
        "books": {
            "type": "Any",
            "attr": "books"
        },
        "card": {
            "type": "Any",
            "attr": "card"
        },
        "currentBook": {
            "type": "Any",
            "attr": "current-book"
        },
        "element": {
            "elementRef": true
        },
        "modal": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class Books {
}

class MyWebSocial {
    constructor() {
        this.db = firebase.database();
        this.books = [];
    }
    componentWillLoad() {
        if (this.isServer === false) {
            return this.getBooksLibrary();
        }
    }
    getBooksLibrary() {
        return this.db.ref('/books').once('value').then((booksSnapshot) => {
            this.books = (booksSnapshot.val()) || [new Books()];
            console.log("books", this.books);
            this.books.forEach(x => {
                if (!x.read) {
                    this.currentBook = x;
                }
            });
            return this.books;
        });
    }
    render() {
        const blogData = {
            url: `https://www.googleapis.com/blogger/v3/blogs/4562383522539686383/posts`,
            key: `AIzaSyBgiSne19z3sYYRp-KC7HZajqT4SSR9iDM`
        };
        return (h("section", { id: "social", class: "section" },
            h("div", { class: "container has-text-centered" },
                h("h2", { class: "title" }, "Social"),
                h("hr", { class: "light" })),
            h("div", { class: "columns" },
                h("div", { class: "column" },
                    h("my-web-blog", { blogUrl: blogData.url, blogApiKey: blogData.key })),
                h("div", { class: "column" },
                    h("my-web-twitter", null)),
                h("div", { class: "column" },
                    h("my-web-book-library", { books: this.books.reverse(), currentBook: this.currentBook })))));
    }
    static get is() { return "my-web-social"; }
    static get properties() { return {
        "isServer": {
            "context": "isServer"
        }
    }; }
    static get style() { return "div ul li.rss-item{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height:100px\n}"; }
}

class MyWebTwitter {
    render() {
        return (h("div", null,
            h("div", { class: "has-text-centered" },
                h("i", { class: "fab fa-4x fa-twitter" }),
                h("h3", null, "Tweets")),
            h("div", { class: "card twitter-box" },
                h("a", { class: "twitter-timeline", href: "https://twitter.com/sshivamsngh?ref_src=twsrc%5Etfw" }, "Tweets by Shivam"),
                " ",
                h("script", { async: true, src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }))));
    }
    static get is() { return "my-web-twitter"; }
    static get style() { return "div.twitter-box{\n    overflow:scroll;\n    max-height: 330px;\n}"; }
}

export { MyWebBlog, MyWebBookLibrary, MyWebSocial, MyWebTwitter };
