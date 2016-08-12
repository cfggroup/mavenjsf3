/*
 ========================================================================
 Bootstrap: carousel.js v3.3.6
 http://getbootstrap.com/javascript/#carousel
 ========================================================================
 Copyright 2011-2015 Twitter, Inc.
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 ======================================================================== */
+function(b){function g(a){return this.each(function(){var f=b(this),c=f.data("bs.carousel"),e=b.extend({},d.DEFAULTS,f.data(),"object"==typeof a&&a),k="string"==typeof a?a:e.slide;c||f.data("bs.carousel",c=new d(this,e));if("number"==typeof a)c.to(a);else if(k)c[k]();else e.interval&&c.pause().cycle()})}var d=function(a,f){this.$element=b(a);this.$indicators=this.$element.find(".carousel-indicators");this.options=f;this.$items=this.$active=this.interval=this.sliding=this.paused=null;this.options.keyboard&&
this.$element.on("keydown.bs.carousel",b.proxy(this.keydown,this));"hover"!=this.options.pause||"ontouchstart"in document.documentElement||this.$element.on("mouseenter.bs.carousel",b.proxy(this.pause,this)).on("mouseleave.bs.carousel",b.proxy(this.cycle,this))};d.VERSION="3.3.6";d.TRANSITION_DURATION=600;d.DEFAULTS={interval:5E3,pause:"hover",wrap:!0,keyboard:!0};d.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();
break;default:return}a.preventDefault()}};d.prototype.cycle=function(a){a||(this.paused=!1);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this};d.prototype.getItemIndex=function(a){this.$items=a.parent().children(".item");return this.$items.index(a||this.$active)};d.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b);return("prev"==a&&0===c||"next"==a&&c==this.$items.length-
1)&&!this.options.wrap?b:this.$items.eq((c+("prev"==a?-1:1))%this.$items.length)};d.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||0>a))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))};d.prototype.pause=function(a){a||(this.paused=!0);this.$element.find(".next, .prev").length&&b.support.transition&&(this.$element.trigger(b.support.transition.end),
this.cycle(!0));this.interval=clearInterval(this.interval);return this};d.prototype.next=function(){if(!this.sliding)return this.slide("next")};d.prototype.prev=function(){if(!this.sliding)return this.slide("prev")};d.prototype.slide=function(a,f){var c=this.$element.find(".item.active"),e=f||this.getItemForDirection(a,c),k=this.interval,h="next"==a?"left":"right",g=this;if(e.hasClass("active"))return this.sliding=!1;var l=e[0],m=b.Event("slide.bs.carousel",{relatedTarget:l,direction:h});this.$element.trigger(m);
if(!m.isDefaultPrevented()){this.sliding=!0;k&&this.pause();this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),(m=b(this.$indicators.children()[this.getItemIndex(e)]))&&m.addClass("active"));var n=b.Event("slid.bs.carousel",{relatedTarget:l,direction:h});b.support.transition&&this.$element.hasClass("slide")?(e.addClass(a),e[0].offsetWidth,c.addClass(h),e.addClass(h),c.one("bsTransitionEnd",function(){e.removeClass([a,h].join(" ")).addClass("active");c.removeClass(["active",
h].join(" "));g.sliding=!1;setTimeout(function(){g.$element.trigger(n)},0)}).emulateTransitionEnd(d.TRANSITION_DURATION)):(c.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(n));k&&this.cycle();return this}};var p=b.fn.carousel;b.fn.carousel=g;b.fn.carousel.Constructor=d;b.fn.carousel.noConflict=function(){b.fn.carousel=p;return this};var l=function(a){var d,c=b(this),e=b(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(e.hasClass("carousel")){d=
b.extend({},e.data(),c.data());if(c=c.attr("data-slide-to"))d.interval=!1;g.call(e,d);c&&e.data("bs.carousel").to(c);a.preventDefault()}};b(document).on("click.bs.carousel.data-api","[data-slide]",l).on("click.bs.carousel.data-api","[data-slide-to]",l);b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var a=b(this);g.call(a,a.data())})})}(jQuery);