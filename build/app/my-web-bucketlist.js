/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as firebase } from './chunk-c93aabbb.js';
import './chunk-27a2b96a.js';

class MyWebBucketList {
    constructor() {
        this.photos = [];
        this.videoData = { location: '' };
        this.db = firebase.database();
    }
    componentWillLoad() {
        if (this.isServer === false) {
            this.getPhotosLibrary();
        }
    }
    getPhotosLibrary() {
        return this.db.ref('/listItems').once('value').then((photosSnapshot) => {
            console.log("photo snap", photosSnapshot.val());
            const photoData = (photosSnapshot.val()) || [];
            this.photos = photoData[0].jumpsStats[0].allPhotoBlogData;
            this.videoData.location = photoData[0].jumpsStats[0].mapLocation;
            console.log("photos", this.photos);
            return this.photos;
        });
    }
    render() {
        console.log("my-web0bucketlist rendering from comp", this.match, this.match.params.name);
        return (h("div", null,
            h("my-web-header", { type: 'video', videoData: this.videoData }),
            h("my-web-photo-gallery", { photos: this.photos })));
    }
    static get is() { return "my-web-bucketlist"; }
    static get properties() { return {
        "isServer": {
            "context": "isServer"
        },
        "match": {
            "type": "Any",
            "attr": "match"
        },
        "photos": {
            "state": true
        },
        "videoData": {
            "state": true
        }
    }; }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
}

class MyWebPhotoGallery {
    render() {
        const photoInlineStyle = {
            photoGrid: { background: '' },
            photoDetailOrder: (i) => { return { 'order': i % 2 === 0 ? '1' : '2' }; }
        };
        return (this.photos.map((photo, index) => h("div", { class: "columns is-gapless is-marginless is-mobile has-background-light has-text-dark is-bold", style: photoInlineStyle.photoGrid },
            h("div", { class: "column", style: photoInlineStyle.photoDetailOrder(index) },
                h("article", { class: "message" },
                    h("div", { class: "message-body" },
                        h("p", { class: "subtitle" }, photo.caption),
                        h("p", null,
                            h("i", { class: "fa fa-quote-left", "aria-hidden": "true" }),
                            h("i", null,
                                " ",
                                photo.quote,
                                " "),
                            h("i", { class: "fa fa-min fa-quote-right", "aria-hidden": "true" })),
                        h("p", null, photo.detail),
                        h("sub", null, photo.timeStamp)))),
            h("div", { class: "column", style: photoInlineStyle.photoDetailOrder(index + 1) },
                h("figure", { class: "image is-16by9" },
                    h("img", { src: `assets/img/bungy/optimized/${photo.photoId}` }))))));
    }
    static get is() { return "my-web-photo-gallery"; }
    static get properties() { return {
        "photos": {
            "type": "Any",
            "attr": "photos"
        }
    }; }
    static get style() { return ""; }
}

export { MyWebBucketList as MyWebBucketlist, MyWebPhotoGallery };
