/*! Built with http://stenciljs.com */
App.loadBundle("s0zyzbg0",["exports","./chunk-8620c05a.js","./chunk-f8d8f6ab.js"],function(e,t,o){var r=window.App.h,i=function(){function e(){this.photos=[],this.videoData={location:""},this.db=t.firebase.database()}return e.prototype.componentWillLoad=function(){!1===this.isServer&&this.getPhotosLibrary()},e.prototype.getPhotosLibrary=function(){var e=this;return this.db.ref("/listItems").once("value").then(function(t){console.log("photo snap",t.val());var o=t.val()||[];return e.photos=o[0].jumpsStats[0].allPhotoBlogData,e.videoData.location=o[0].jumpsStats[0].mapLocation,console.log("photos",e.photos),e.photos})},e.prototype.render=function(){return console.log("my-web0bucketlist rendering from comp",this.match,this.match.params.name),r("div",null,r("my-web-header",{type:"video",videoData:this.videoData}),r("my-web-photo-gallery",{photos:this.photos}))},Object.defineProperty(e,"is",{get:function(){return"my-web-bucketlist"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{isServer:{context:"isServer"},match:{type:"Any",attr:"match"},photos:{state:!0},videoData:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".app-profile{padding:10px}"},enumerable:!0,configurable:!0}),e}(),n=function(){function e(){}return e.prototype.render=function(){var e={photoGrid:{background:""},photoDetailOrder:function(e){return{order:e%2==0?"1":"2"}}};return this.photos.map(function(t,o){return r("div",{class:"columns is-gapless is-marginless is-mobile has-background-light has-text-dark is-bold",style:e.photoGrid},r("div",{class:"column",style:e.photoDetailOrder(o)},r("article",{class:"message"},r("div",{class:"message-body"},r("p",{class:"subtitle"},t.caption),r("p",null,r("i",{class:"fa fa-quote-left","aria-hidden":"true"}),r("i",null," ",t.quote," "),r("i",{class:"fa fa-min fa-quote-right","aria-hidden":"true"})),r("p",null,t.detail),r("sub",null,t.timeStamp)))),r("div",{class:"column",style:e.photoDetailOrder(o+1)},r("figure",{class:"image is-16by9"},r("img",{src:"assets/img/bungy/optimized/"+t.photoId}))))})},Object.defineProperty(e,"is",{get:function(){return"my-web-photo-gallery"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{photos:{type:"Any",attr:"photos"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.MyWebBucketlist=i,e.MyWebPhotoGallery=n,Object.defineProperty(e,"__esModule",{value:!0})});