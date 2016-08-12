/*
 ========================================================================
 Bootstrap: scrollspy.js v3.3.6
 http://getbootstrap.com/javascript/#scrollspy
 ========================================================================
 Copyright 2011-2015 Twitter, Inc.
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 ======================================================================== */
+function(b){function c(a,h){this.$body=b(document.body);this.$scrollElement=b(a).is(document.body)?b(window):b(a);this.options=b.extend({},c.DEFAULTS,h);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",b.proxy(this.process,this));this.refresh();this.process()}function l(a){return this.each(function(){var h=b(this),g=h.data("bs.scrollspy"),f="object"==typeof a&&a;g||h.data("bs.scrollspy",
g=new c(this,f));if("string"==typeof a)g[a]()})}c.VERSION="3.3.6";c.DEFAULTS={offset:10};c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};c.prototype.refresh=function(){var a=this,c="offset",g=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();b.isWindow(this.$scrollElement[0])||(c="position",g=this.$scrollElement.scrollTop());this.$body.find(this.selector).map(function(){var a=
b(this),a=a.data("target")||a.attr("href"),d=/^#./.test(a)&&b(a);return d&&d.length&&d.is(":visible")&&[[d[c]().top+g,a]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){a.offsets.push(this[0]);a.targets.push(this[1])})};c.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.getScrollHeight(),c=this.options.offset+b-this.$scrollElement.height(),f=this.offsets,d=this.targets,k=this.activeTarget,e;this.scrollHeight!=b&&this.refresh();if(a>=c)return k!=
(e=d[d.length-1])&&this.activate(e);if(k&&a<f[0])return this.activeTarget=null,this.clear();for(e=f.length;e--;)k!=d[e]&&a>=f[e]&&(void 0===f[e+1]||a<f[e+1])&&this.activate(d[e])};c.prototype.activate=function(a){this.activeTarget=a;this.clear();a=b(this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]').parents("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active"));a.trigger("activate.bs.scrollspy")};c.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,
".active").removeClass("active")};var m=b.fn.scrollspy;b.fn.scrollspy=l;b.fn.scrollspy.Constructor=c;b.fn.scrollspy.noConflict=function(){b.fn.scrollspy=m;return this};b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);l.call(a,a.data())})})}(jQuery);