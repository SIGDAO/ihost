export function jsTemplate_script_1() {
  return `
   (function (a) {
      function p(b) { b = a(b); var c = b.attr("ID") + "-carousel"; b.find(".carousel").attr("id", c); b.find(".carousel-controls a").attr("href", "#" + c); b.find(".carousel-indicators li").attr("data-target", "#" + c); a(b).find(".carousel-item:first").addClass("active") } function q(b) {
          b = a(b); var c = b.find(".carousel-item").length, d = b.find(".carousel-inner").attr("data-visible"); c < d && (d = c); b.find(".carousel-inner").attr("class", "carousel-inner slides" + d); b.find(".clonedCol").remove(); b.find(".carousel-item .col-md-12").each(function () {
              2 >
              d ? a(this).attr("class", "col-md-12") : "5" == d ? a(this).attr("class", "col-md-12 col-lg-15") : a(this).attr("class", "col-md-12 col-lg-" + 12 / d)
          }); b.find(".carousel-item").each(function () { for (var b = a(this), c = 1; c < d; c++) { b = b.next(); b.length || (b = a(this).siblings(":first")); var n = b.index(); b.find(".col-md-12:first").clone().addClass("cloneditem-" + c).addClass("clonedCol").attr("data-cloned-index", n).appendTo(a(this).children().eq(0)) } })
      } function r(b) {
          0 !== a(b).find(".nav-tabs").length && a(b).outerFind('section[id^="tabs"]').each(function () {
              var b =
                  a(this).attr("id"), d = a(this).find(".nav-tabs .nav-item"), e = a(this).find(".tab-pane"); e.removeClass("active").eq(0).addClass("active"); d.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active"); e.each(function () { a(this).attr("id", b + "_tab" + a(this).index()) }); d.each(function () { a(this).find("a").attr("href", "#" + b + "_tab" + a(this).index()) })
          })
      } var f = a("html").hasClass("is-builder"); a.extend(a.easing, {
          easeInOutCubic: function (a, c, d, e, h) {
              return 1 > (c /= h / 2) ? e / 2 * c * c * c + d : e / 2 * ((c -= 2) *
                  c * c + 2) + d
          }
      }); a.fn.outerFind = function (a) { return this.find(a).addBack(a) }; a.fn.scrollEnd = function (b, c) { a(this).scroll(function () { var d = a(this); d.data("scrollTimeout") && clearTimeout(d.data("scrollTimeout")); d.data("scrollTimeout", setTimeout(b, c)) }) }; a.fn.footerReveal = function () {
          function b() {
              !h && c.outerHeight() <= e.outerHeight() ? (c.css({ "z-index": -999, position: "fixed", bottom: 0 }), c.css({ width: d.outerWidth() }), d.css({ "margin-bottom": c.outerHeight() })) : (c.css({ "z-index": "", position: "", bottom: "" }), c.css({ width: "" }),
                  d.css({ "margin-bottom": "" }))
          } var c = a(this), d = c.prev(), e = a(window), h = !!document.documentMode; b(); e.on("load resize", function () { b() }); return this
      }; (function (a, c) { var d = function (a, b, c) { var d; return function () { var f = this, k = arguments; d ? clearTimeout(d) : c && a.apply(f, k); d = setTimeout(function () { c || a.apply(f, k); d = null }, b || 100) } }; jQuery.fn[c] = function (a) { return a ? this.bind("resize", d(a)) : this.trigger(c) } })(jQuery, "smartresize"); a.isMobile = function (b) {
          var c = [], d = {
              blackberry: "BlackBerry", android: "Android", windows: "IEMobile",
              opera: "Opera Mini", ios: "iPhone|iPad|iPod"
          }; b = "undefined" == a.type(b) ? "*" : b.toLowerCase(); "*" == b ? c = a.map(d, function (a) { return a }) : b in d && c.push(d[b]); return !(!c.length || !navigator.userAgent.match(new RegExp(c.join("|"), "i")))
      }; var t = function () { var b = a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"), c = b[0], d = parseInt(window.innerHeight / 2, 10), c = parseInt((window.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle).height, 10); b.remove(); return c == d }();
      a(function () {
          function b() { a(this).css("height", 9 * a(this).parent().width() / 16) } function c(b) { setTimeout(function () { a(b).outerFind(".mbr-parallax-background").jarallax({ speed: .6 }).css("position", "relative") }, 0) } function d(b) {
              a(b).outerFind("[data-bg-video]").each(function () {
                  var b = a(this).attr("data-bg-video"), 
    c = b.match(/(http:\\/\\/|https:\\/\\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\\/(video\\/|embed\\/|watch\?v=|v\\/)?([A-Za-z0-9._%-]*)(&\S+)?/), d = a('<div class="mbr-background-video-preview">').hide().css({
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  }); a("> *:eq(0)", this).before(d); if (c && (/youtu\.?be/g.test(c[3]) || /vimeo/g.test(c[3]))) if (c && /youtu\.?be/g.test(c[3])) b = "http" + ("https:" === location.protocol ? "s" : "") + ":", b += "//img.youtube.com/vi/" + c[6] + "/maxresdefault.jpg", a("<img>").on("load", function () {
                      if (120 === (this.naturalWidth || this.width)) {
                          var a = this.src.split("/").pop(); switch (a) {
                              case "maxresdefault.jpg": this.src = this.src.replace(a, "sddefault.jpg"); break; case "sddefault.jpg": this.src = this.src.replace(a, "hqdefault.jpg");
                                  break; default: f && d.css("background-image", 'url("images/no-video.jpg")').show()
                          }
                      } else d.css("background-image", 'url("' + this.src + '")').show()
                  }).attr("src", b), !a.fn.YTPlayer || f || a.isMobile() || a("> *:eq(1)", this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({ videoURL: c[6], containment: "self", showControls: !1, mute: !0 }); else {
                      if (c && /vimeo/g.test(c[3])) {
                          var k = new XMLHttpRequest; k.open("GET", "https://vimeo.com/api/v2/video/" + c[6] + ".json", !0); k.onreadystatechange = function () {
                              if (4 === this.readyState) if (200 <=
                                  this.status && 400 > this.status) { var a = JSON.parse(this.responseText); d.css("background-image", 'url("' + a[0].thumbnail_large + '")').show() } else f && d.css("background-image", 'url("images/no-video.jpg")').show()
                          }; k.send(); k = null; !a.fn.vimeo_player || f || a.isMobile() || a("> *:eq(1)", this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({ videoURL: b, containment: "self", showControls: !1, mute: !0 })
                      }
                  } else f && d.css("background-image", 'url("images/video-placeholder.jpg")').show()
              })
          } a("html").addClass(a.isMobile() ?
              "mobile" : "desktop"); a(window).scroll(function () { a(".mbr-navbar--sticky").each(function () { var b = 10 < a(window).scrollTop() ? "addClass" : "removeClass"; a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short") }) }); a.isMobile() && navigator.userAgent.match(/Chrome/i) ? function (b, c) { var d = [b, b]; d[c > b ? 0 : 1] = c; a(window).smartresize(function () { var b = a(window).height(); 0 > a.inArray(b, d) && (b = d[a(window).width() > b ? 1 : 0]); a(".mbr-section--full-height").css("height", b + "px") }) }(a(window).width(), a(window).height()) :
                  t || (a(window).smartresize(function () { a(".mbr-section--full-height").css("height", a(window).height() + "px") }), a(document).on("add.cards", function (b) { a("html").hasClass("mbr-site-loaded") && a(b.target).outerFind(".mbr-section--full-height").length && a(window).resize() })); a(window).smartresize(function () { a(".mbr-section--16by9").each(b) }); a(document).on("add.cards changeParameter.cards", function (c) {
                      var d = a(c.target).outerFind(".mbr-section--16by9"); d.length ? d.attr("data-16by9", "true").each(b) : a(c.target).outerFind("[data-16by9]").css("height",
                          "").removeAttr("data-16by9")
                  }); a.fn.jarallax && !a.isMobile() && (a(window).on("update.parallax", function (b) { setTimeout(function () { var b = a(".mbr-parallax-background"); b.jarallax("coverImage"); b.jarallax("clipContainer"); b.jarallax("onScroll") }, 0) }), f ? (a(document).on("add.cards", function (b) { c(b.target); a(window).trigger("update.parallax") }), a(document).on("changeParameter.cards", function (b, d, e, h) {
                      if ("bg" === d) switch (a(b.target).jarallax("destroy").css("position", ""), h) {
                          case "type": !0 === e.parallax && c(b.target);
                              break; case "value": "image" === e.type && !0 === e.parallax && c(b.target); break; case "parallax": !0 === e.parallax && c(b.target)
                      }a(window).trigger("update.parallax")
                  })) : c(document.body), a(window).on("shown.bs.tab", function (b) { a(window).trigger("update.parallax") })); var e, h, n = 0, g = null, l = !a.isMobile(); a(window).scroll(function () {
                      h && clearTimeout(h); var b = a(window).scrollTop(), c = b <= n || l; n = b; if (g) {
                          var d = b > g.breakPoint; c ? d != g.fixed && (l ? (g.fixed = d, a(g.elm).toggleClass("is-fixed")) : h = setTimeout(function () {
                              g.fixed = d;
                              a(g.elm).toggleClass("is-fixed")
                          }, 40)) : (g.fixed = !1, a(g.elm).removeClass("is-fixed"))
                      }
                  }); a(document).on("add.cards delete.cards", function (b) { e && clearTimeout(e); e = setTimeout(function () { g && (g.fixed = !1, a(g.elm).removeClass("is-fixed")); a(".mbr-fixed-top:first").each(function () { g = { breakPoint: a(this).offset().top + 3 * a(this).height(), fixed: !1, elm: this }; a(window).scroll() }) }, 650) }); a(window).smartresize(function () {
                      a(".mbr-embedded-video").each(function () {
                          a(this).height(a(this).width() * parseInt(a(this).attr("height") ||
                              315) / parseInt(a(this).attr("width") || 560))
                      })
                  }); a(document).on("add.cards", function (b) { a("html").hasClass("mbr-site-loaded") && a(b.target).outerFind("iframe").length && a(window).resize() }); if (f) a(document).on("add.cards", function (a) { d(a.target) }); else d(document.body); a(document).on("changeParameter.cards", function (b, c, e, h) {
                      if ("bg" === c) switch (h) {
                          case "type": a(b.target).find(".mbr-background-video-preview").remove(); "video" === e.type && d(b.target); break; case "value": "video" === e.type && (a(b.target).find(".mbr-background-video-preview").remove(),
                              d(b.target))
                      }
                  }); f || a("body > *:not(style, script)").trigger("add.cards"); a("html").addClass("mbr-site-loaded"); a(window).resize().scroll(); f || a(document).click(function (b) {
                      try {
                          var c = b.target; if (!a(c).parents().hasClass("carousel")) {
                              do if (c.hash) {
                                  var d = /#bottom|#top/g.test(c.hash); a(d ? "body" : c.hash).each(function () {
                                      b.preventDefault(); var d = a(c).parents().hasClass("navbar-fixed-top") ? 60 : 0, d = "#bottom" == c.hash ? a(this).height() - a(window).height() : a(this).offset().top - d; a(this).hasClass("panel-collapse") ||
                                          a(this).hasClass("tab-pane") || a("html, body").stop().animate({ scrollTop: d }, 800, "easeInOutCubic")
                                  }); break
                              } while (c = c.parentNode)
                          }
                      } catch (e) { }
                  }); a(".cols-same-height .mbr-figure").each(function () {
                      function b() { d.css({ width: "", maxWidth: "", marginLeft: "" }); if (f && h) { var a = f / h; c.addClass({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }); var g = e.height() / e.width(); g > a && (a = 100 * (g - a) / a, d.css({ width: a + 100 + "%", maxWidth: a + 100 + "%", marginLeft: -a / 2 + "%" })) } } var c = a(this), d = c.children("img"), e = c.parent(), h = d[0].width,
                          f = d[0].height; d.one("load", function () { h = d[0].width; f = d[0].height; b() }); a(window).on("resize", b); b()
                  })
      }); if (!f) {
          if (a.fn.socialLikes) a(document).on("add.cards", function (b) { a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes", function (b, d, e) { 999 < e && a(".social-likes__counter", b.target).html(Math.floor(e / 1E3) + "k") }).socialLikes({ initHtml: !1 }) }); a(document).on("add.cards", function (b) { a(b.target).hasClass("mbr-reveal") && a(b.target).footerReveal() }); a(document).ready(function () {
              if (!a.isMobile() &&
                  a("input[name=animation]").length) {
                      var b = function (a) { if ("none" !== a.parents(".carousel-item").css("display")) return !1; var b = a.parents(".carousel-item").parent(); if (b.find(".carousel-item.active .hidden.animated").lenght) return !1; if (1 < b.attr("data-visible")) { b = b.attr("data-visible"); if (a.parents().is(".cloneditem-" + (b - 1)) && a.parents(".cloneditem-" + (b - 1)).attr("data-cloned-index") >= b) return !0; a.removeClass("animated hidden"); return !1 } return !0 }, c = function (a) {
                          var b = 0; do b += a.offsetTop || 0, a = a.offsetParent;
                          while (a); return b
                      }; a("input[name=animation]").remove(); var d = a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function () { return a(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop") }).not(function () {
                          return a(this).parents().is("form") &&
                              a(this).is("li")
                      }).addClass("hidden animated"), e = a(window); e.on("scroll resize", function () { var e = document.documentElement.scrollTop || document.body.scrollTop, f = e + window.innerHeight - 50; a.each(d, function () { var d = a(this), l = d[0], k = l.offsetHeight, l = c(l); if ((l + k >= e && l <= f || b(d)) && d.hasClass("hidden")) d.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { d.removeClass("animated fadeInUp") }) }) }); e.trigger("scroll")
              }
          }); a(".nav-dropdown").length &&
              a(".nav-dropdown").swipe({ swipeLeft: function (b, c, d, e, f) { a(".navbar-close").click() } })
      } a(document).ready(function () { if (a(".mbr-arrow-up").length) { var b = a("#scrollToTop"), c = a("body,html"), d = a(window); b.css("display", "none"); d.scroll(function () { 0 < a(this).scrollTop() ? b.fadeIn() : b.fadeOut() }); b.click(function () { c.animate({ scrollTop: 0 }, 400); return !1 }) } }); if (!f) a(".mbr-arrow").on("click", function (b) {
          b = a(b.target).closest("section").next(); b.hasClass("engine") && (b = b.closest("section").next()); b = b.offset();
          a("html, body").stop().animate({ scrollTop: b.top }, 800, "linear")
      }); if (a("nav.navbar").length) { var m = a("nav.navbar").height(); a(".mbr-after-navbar.mbr-fullscreen").css("padding-top", m + "px") } if (!f && (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./))) a(document).on("add.cards", function (b) {
          var c = a(b.target); if (c.hasClass("mbr-fullscreen")) a(window).on("load resize", function () { c.css("height", "auto"); c.outerHeight() <= a(window).height() && c.css("height", "1px") });
          if (c.hasClass("mbr-slider") || c.hasClass("mbr-gallery")) c.find(".carousel-indicators").addClass("ie-fix").find("li").css({ display: "inline-block", width: "30px" }), c.hasClass("mbr-slider") && c.find(".full-screen .slider-fullscreen-image").css("height", "1px")
      }); a(document).ready(function () {
          if (!f) {
              var b = function (b) {
                  var d = a(b).parents("section").find("iframe")[0], e = a(d).attr("src"); b.parents("section").css("z-index", "5000"); -1 !== e.indexOf("youtu") && d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',
                      "*"); if (-1 !== e.indexOf("vimeo")) { var f = new Vimeo.Player(a(d)); f.play() } a(b).parents("section").find(a(b).attr("data-modal")).css("display", "table").click(function () { -1 !== e.indexOf("youtu") && d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); -1 !== e.indexOf("vimeo") && f.pause(); a(this).css("display", "none").off("click"); b.parents("section").css("z-index", "0") })
              }; a(".modalWindow-video iframe").each(function () {
                  var b = a(this).attr("data-src"); a(this).removeAttr("data-src");
                  var d = b.match(/(http:\\/\\/|https:\\/\\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\\/(video\\/|embed\\/|watch\?v=|v\\/)?([A-Za-z0-9._%-]*)(&\S+)?/); -1 !== b.indexOf("youtu") ? a(this).attr("src", "https://youtube.com/embed/" + d[6] + "?rel=0&enablejsapi=1") : -1 !== b.indexOf("vimeo") && a(this).attr("src", "https://player.vimeo.com/video/" + d[6] + "?autoplay=0&loop=0")
              }); a("[data-modal]").click(function () { b(a(this)) })
          }
      }); if (!f && !a.isMobile()) {
          var m = a("section.menu"), u = a(window).width(); !m.find(".navbar").hasClass("collapsed") &&
              991 < u && (m.find("ul.navbar-nav li.dropdown").hover(function () { a(this).hasClass("open") || a(this).find("a")[0].click() }, function () { a(this).hasClass("open") && a(this).find("a")[0].click() }), m.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function () { a(this).hasClass("open") || a(this).find("a")[0].click() }, function () { a(this).hasClass("open") && a(this).find("a")[0].click() }))
      } a.fn.outerFind = function (a) { return this.find(a).addBack(a) }; f || ("undefined" === typeof window.initClientPlugin && 0 != a(document.body).find(".clients").length &&
          (window.initClientPlugin = !0, a(document.body).find(".clients").each(function (b, c) { a(this).attr("data-isinit") || (p(a(this)), q(a(this))) })), "undefined" === typeof window.initPopupBtnPlugin && 0 != a(document.body).find("section.popup-btn-cards").length && (window.initPopupBtnPlugin = !0, a("section.popup-btn-cards .card-wrapper").each(function (b, c) { a(this).addClass("popup-btn") })), "undefined" === typeof window.initTestimonialsPlugin && 0 != a(document.body).find(".testimonials-slider").length && (window.initTestimonialsPlugin =
              !0, a(".testimonials-slider").each(function () { p(this) })), "undefined" === typeof window.initSwitchArrowPlugin && (window.initSwitchArrowPlugin = !0, a(document).ready(function () { 0 != a(".accordionStyles").length && a('.accordionStyles .card-header a[role="button"]').each(function () { a(this).hasClass("collapsed") || a(this).addClass("collapsed") }) }), a('.accordionStyles .card-header a[role="button"]').click(function () {
                  var b = a(this).closest(".accordionStyles").attr("id"); a(this).closest(".card").find(".panel-collapse").hasClass("collapsing") ||
                      (-1 != b.indexOf("toggle") ? a(this).hasClass("collapsed") ? a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up") : a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down") : -1 != b.indexOf("accordion") && (a(this).closest(".accordionStyles ").children(".card").each(function () { a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down") }), a(this).hasClass("collapsed") && a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))
              })),
          "undefined" === typeof window.initTabsPlugin && (window.initTabsPlugin = !0, r(document.body)), 0 != a(".mbr-slider.carousel").length && a(".mbr-slider.carousel").each(function () {
              var b = a(this), c = b.find(".carousel-control"), d = b.find(".carousel-indicators li"); b.on("slide.bs.carousel", function () { c.bind("click", function (a) { a.stopPropagation(); a.preventDefault() }); d.bind("click", function (a) { a.stopPropagation(); a.preventDefault() }); b.carousel({ keyboard: !1 }) }).on("slid.bs.carousel", function () {
                  c.unbind("click"); d.unbind("click");
                  b.carousel({ keyboard: !0 }); 1 < b.find(".carousel-item.active").length && (b.find(".carousel-item.active").eq(1).removeClass("active"), b.find(".carousel-control li.active").eq(1).removeClass("active"))
              })
          })); if (f) a(document).on("add.cards", function (b) {
              a(b.target).find(".form-with-styler").length && (b = a(b.target).find(".form-with-styler"), a(b).find('select:not("[multiple]")').each(function () { a(this).styler() }), a(b).find("input[type=number]").each(function () { a(this).styler(); a(this).parent().parent().removeClass("form-control") }),
                  a(b).find("input[type=date]").each(function () { a(this).datetimepicker && a(this).datetimepicker({ format: "Y-m-d", timepicker: !1 }) }), a(b).find("input[type=time]").each(function () { a(this).datetimepicker && a(this).datetimepicker({ format: "H:i", datepicker: !1 }) }))
          }); else a("section .form-with-styler").each(function () {
              a(this).find('select:not("[multiple]")').each(function () { a(this).styler() }); a(this).find("input[type=number]").each(function () { a(this).styler(); a(this).parent().parent().removeClass("form-control") });
              var b; b = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Firefox/i) ? !0 : !1; !b && a(this).datetimepicker && (a(this).find("input[type=date]").each(function () { a(this).datetimepicker({ format: "Y-m-d", timepicker: !1 }) }), a(this).find("input[type=time]").each(function () {
                  a(this).datetimepicker({
                      format: "H:i",
                      datepicker: !1
                  })
              }))
          }); a(document).on("change", 'input[type="range"]', function (b) { a(b.target).parents(".form-group").find(".value")[0].innerHTML = b.target.value })
  })(jQuery);
  !function () { try { document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel") } catch (b) { } if (!document.getElementById("top-1")) { var a = document.createElement("section"); a.id = "top-1"; a.className = "engine"; a.innerHTML = ''; document.body.insertBefore(a, document.body.childNodes[0]) } }();
  `;
}

export function jsTemplate_script_3() {
    return `
  // options.imagesCount
  function ws_photo(g, h, l) {
    function m(a, c, b, d, h, l) {
        a[0].wowParams || (a[0].wowParams = {}); if (d && c) { var f = 80, e = 50 - f / 2, k = 50 - f / 2, m = 0; c = 5 } else f = 30, e = parseFloat(100 * Math.random() + -10), k = parseFloat(100 * Math.random() + -10), m = parseFloat(60 * Math.random() + -30), c = d ? c ? 5 : b ? 3 : 2 : c ? 3 : b ? 4 : 2; b = { top: a[0].wowParams.y || 0, left: a[0].wowParams.x || 0, width: a[0].wowParams.size || 0, height: a[0].wowParams.size || 0 }; d = { top: k, left: e, width: f, height: f }; if (g.support.transform) b = {
            translate: [50 - b.width / 2 - b.left + "%", 50 - b.width / 2 - b.top + "%", 0],
            rotate: a[0].wowParams.angle || 0, scale: b.width / 100
        }, d = { translate: [50 - d.width / 2 - d.left, 50 - d.width / 2 - d.top, 0], rotate: m || 0, scale: d.width / 100 }; else for (var n in b) b[n] += "%"; wowAnimate(a.css({ position: "absolute", zIndex: c }), b, d, h, "swing", l || 0); a[0].wowParams = { size: f, x: e, y: k, angle: m, zIndex: c }
    } function n() { if (g.support.transform) { var a = c(h[0]), a = { width: a.width(), height: a.height(), marginTop: parseFloat(a.css("marginTop")), marginLeft: parseFloat(a.css("marginLeft")) }; c(f).find("img").css(a) } else c(f).find("img").css({ width: "100%" }) }
    var c = jQuery, r = c(this), v = c(".ws_list", l), p = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent), k = g.imagesCount || 30, q = []; l = c("<div>").addClass("ws_effect ws_photo").css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#DDDDDD" }).appendTo(l); if (!p) var t = c("<div>").css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)", zIndex: 4 }).appendTo(l); for (var u = Math.max(k, h.length), e = k = 0; k < u; k++)e >= h.length &&
        (e -= h.length), c("<div>").addClass("ws_photoItem").css({ width: "100%", height: "100%", overflow: "hidden" }).append(c("<div>").css({ overflow: "hidden", position: "absolute" }).append(c(h[e]).clone())).appendTo(l), g.images && k < h.length && q.push(!g.images[e].noimage), e++; var f = l.children(".ws_photoItem"); f.each(function (a) { m(c(this), g.startSlide == a, !1, !0, 0) }); n(); c(window).on("load resize", n); this.go = function (a, e) {
            n(); if (g.images && !q[a]) {
                q[a] = !0; for (var b = a; ;) {
                    c(f[b]).find("img").attr("src", g.images[b % h.length].src);
                    if (b > u) break; b += h.length
                }
            } if (window.XMLHttpRequest) { var d = .5 * g.duration; f.each(function (b) { m(c(this), a == b, e == b, !1, d) }); p || wowAnimate(t, { opacity: 1 }, { opacity: 0 }, .7 * d, "swing"); setTimeout(function () { f.each(function (b) { m(c(this), a == b, e == b, !0, d, e == b ? function () { r.trigger("effectEnd") } : 0) }); p || wowAnimate(t, { opacity: 0 }, { opacity: 1 }, .7 * d, "swing") }, d) } else v.stop(!0).animate({ left: a ? -a + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0 }, g.duration, "easeInOutExpo", function () { r.trigger("effectEnd") })
        }
};
  `;
}

export function jsTemplate_script(){
    return `
    // wowslider initialization
(function () {
    function m(b) { var d = {}; "anim-type hidecontrols theme fullscreen timeout autoplay duration paddingtop paddingbottom showbullets height width responsive showcaptions captionseffect".split(" ").map(function (a) { d[a] = b.attr("data-" + a) }); return d } $(document).on("add.cards change.cards", function (b) {
        if ($(b.target).hasClass("mbr-wowslider-container")) {
            $(b.target).find(".mbr-wowslider-options").css("display", "none"); var d = $(b.target).closest("html").hasClass("is-builder"), a = {}, a = m($(b.target).find(".params")),
                e = $(b.target).find(".mbr-wowslider"); "false" == a.showbullets && $(b.target).find(".ws_bullets").css("display", "none"); var g = !1; "true" != a.autoplay || d || (g = !0); var h = !1; "true" == a.showcaptions && (h = !0); var f = !1; if ("boundary" == a.theme || "dodgy" == a.theme) f = [], $(".ws_bullets img").each(function (a, b) { f.push($(this).attr("src")) }); "utter" == a.theme && (f = [], $(".ws_images img").each(function (a, b) { f.push($(this).attr("src")) })); e.css({ "padding-top": 1.5 * +a.paddingtop + "rem", "padding-bottom": 1.5 * +a.paddingbottom + "rem" });
            var k = 0, n = "ws_" + a["anim-type"], p = setInterval(function () {
                k++; if (10 < k || window[n]) clearInterval(p), $(b.target).find(".mbr-wowslider").wowSlider({
                    effect: a["anim-type"], prev: "", next: "", duration: 1E3 * +a.duration, delay: 1E3 * +a.timeout, width: +a.width, height: +a.height, autoPlay: g, autoPlayVideo: !1, playPause: !0, stopOnHover: !1, loop: !1, bullets: 1, caption: h, captionEffect: a.captionseffect, onStep: function (a) { e.attr("data-cur-slide", a) }, controls: !0, controlsThumb: f, responsive: +a.responsive, fullScreen: !1, gestures: 2, onBeforeStep: 0,
                    images: 0
                })
            }, 100), c = $(b.target).attr("id"), l = "style-" + c; $("head").find("#" + l).remove(); text = '<style id="' + l + '">'; 1 == a.responsive && (text += "#" + c + " .mbr-wowslider.boxed{max-width:" + a.width + "px;max-height:" + a.height + "px;margin:0 auto} \\n", e.addClass("boxed")); 2 == a.responsive && (text += "#" + c + " .mbr-wowslider.full-width{max-height:" + a.height + "px !important} \\n", text += "#" + c + " .mbr-wowslider.full-width .ws_images>div>img{max-height:" + a.height + "px !important} \\n", e.addClass("full-width")); "true" == a.hidecontrols &&
                (text += "#" + c + " .mbr-wowslider a.ws_next, #" + c + " a.ws_prev, #" + c + " .ws_playpause{display: none} \\n", text += "#" + c + " .mbr-wowslider:hover a.ws_next, #" + c + " .mbr-wowslider:hover a.ws_prev, #" + c + "  .mbr-wowslider:hover .ws_playpause{display: block} \\n"); text += "</style>"; $("head").append(text); d && (e.css("cursor", "pointer"), $(".ws_cover").on("click", function () { $(b.target).closest(".app-component").find(".component-params").click() }))
        }
    }); $(function () {
        function b(b) { return !1 } setTimeout(function () {
            $(".ui-sortable").on("click",
                ".ws_controls > .ws_next", b); $(".ui-sortable").on("click", ".ws_controls > .ws_prev", b)
        }, 0)
    }); $(document).on("sortstop", function (b) { $(b.target).closest("#edit-component-params").find('select[name="animType"]').trigger("change") })
})();
    `;         
}

export function jsTemplate_wowslider(){
    return `// wowslider plugin
/** WOWSlider version 3.1
  Created by WowSlider.com
  Modified 10:37 13.03.2013
  Using structure
  <div id=wowslider-container>
	  <div class=ws_images><ul>
			<li><a><img src="..." id=wows0 /></a></li>...
	  </ul></div>
	  <div class=ws_bullets>
			<a href="#wows0"></a>...
	  </div>
	  <div class=ws_bullets>
			<a href="#wows0"></a>...
	  </div>
	  <div class=ws_shadow></div>
  </div>

  z-index:
	  -1 = .ws_shadow
	  no = .images - basicaly no z-index
	  8  = .ws_effect, canvas or other overlap object
	  9  = .ws_frame
		10 = <cover frame> - between .ws_images||.ws_frame and arrows+bullets
	50 = .ws_title
		55 = .ws_video_btn - div with youtube/vimeo play button (must be above description, to be able to press play when big description)
		56 = .ws_logo (must be over play video button to prevent user click when on-demand loading)
	  60 = .ws_prev,.ws_next
	  60 = .ws_thumbs - if fullWidth filmstrips go to container and need to be under controls
	  61 = .ws_fullscreen - fullscreen button ower controls!
	  70 = .ws_bullets

 */
// exported functions:
//	.wsStart([index]) - start playing [from index] if autoPlay=true, or go to step if autoPlay=false
//	.wsStop() - stop playing
jQuery.fn.wowSlider = function (a) {
	function c(a) { return F.css({ left: -a + "00%" }) } function f(a) { return ((a || 0) + I) % I } function d(A) { if (window["ws_" + A]) { var b = new window["ws_" + A](a, L, C); b.name = "ws_" + A; B.push(b) } } function h(a, b) { u ? u.pause(a.curIndex, b) : b() } function l(a, b) { u ? u.play(a, 0, b) : b() } function k(a, b, g) { N || (isNaN(a) && (a = Aa(n, I)), a = f(a), n != a && (O ? O.load(a, function () { K(a, b, g) }) : K(a, b, g))) } function v(a) { for (var b = "", g = 0; g < a.length; g++)b += String.fromCharCode(a.charCodeAt(g) ^ 1 + (a.length - g) % 7); return b } function K(b,
		Fa, e) { if (!N) { if (Fa) void 0 != e && (aa = e ^ a.revers), c(b); else { if (N) return; (function (b, A, e) { ba = Math.floor(Math.random() * B.length); g(B[ba]).trigger("effectStart", { curIndex: b, nextIndex: A, cont: g("." + B[ba].name, t), start: function () { aa = void 0 != e ? e ^ a.revers : !!(A > b) ^ a.revers ? 1 : 0; B[ba].go(A, b, aa) } }) })(n, b, e); t.trigger(g.Event("go", { index: b })) } n = b; n != a.stopOn || --a.loop || (a.autoPlay = 0); if (a.onStep) a.onStep(b) } } function p() { t.find(".ws_effect").fadeOut(200); c(n).fadeIn(200).find("img").css({ visibility: "visible" }) } function E(a,
			b, g, e, c, r) { new H(a, b, g, e, c, r) } function H(b, e, c, r, p, f) {
				var d, k, m, h, x = 0, l = 0, y = 0; b[0] || (b = g(b)); b.on((e ? "mousedown " : "") + "touchstart", function (b) { var g = b.originalEvent.touches ? b.originalEvent.touches[0] : b; 2 == a.gestures && t.addClass("ws_grabbing"); x = 0; g ? (d = g.pageX, k = g.pageY, l = y = 1, r && (l = y = r(b))) : l = y = 0; b.originalEvent.touches || (b.preventDefault(), b.stopPropagation()) }); g(document).on((e ? "mousemove " : "") + "touchmove", b, function (a) {
					if (l) {
						var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a; x = 1; m = b.pageX -
							d; h = b.pageY - k; c && c(a, m, h)
					}
				}); g(document).on((e ? "mouseup " : "") + "touchend", b, function (b) { 2 == a.gestures && t.removeClass("ws_grabbing"); l && (x && p && p(b, m, h), !x && f && f(b), x && (b.preventDefault(), b.stopPropagation()), l = x = 0) }); b.on("click", function (a) { y && (a.preventDefault(), a.stopPropagation()); y = 0 })
			} function e(b, e, c) {
				P.length && U(b); z.length && G(b); a.controlsThumb && a.controls && ca(b); if (a.caption) {
					var r = Ba(b); e = Ba(e); var p = a.captionEffect; (X[g.type(p)] || X[p] || X.none)(g.extend({ $this: t, curIdx: n, prevIdx: Y, noDelay: c },
						a), da, Ca, r, e, aa)
				} V && ((b = g("A", R.get(b)).get(0)) ? (V.setAttribute("href", b.href), V.setAttribute("target", b.target), V.style.display = "block") : V.style.display = "none"); a.responsive && ea()
			} function b() { fa && (fa = 0, setTimeout(function () { t.trigger(g.Event("stop", {})) }, a.duration)) } function r() { x(); b() } function m() { x(); a.autoPlay ? (ga = setTimeout(function () { pa || k(void 0, void 0, 1) }, a.delay), !fa && a.autoPlay && (fa = 1, t.trigger(g.Event("start", {})))) : b() } function x() { ga && clearTimeout(ga); ga = null } function y(b, a, g) {
				x();
				b && b.preventDefault(); k(a, void 0, g); m(); qa && w && w.play()
			} function ca(b) { var e = a.controlsThumb, c = e[b + 1] || e[0], r = e[(b || e.length) - 1]; Ga.attr("src", c); ra.css("transition", "none"); Ha.attr("src", r); sa.css("transition", "none"); wowAnimate(g.merge(ra, sa), { opacity: 1 }, { opacity: 0 }, 400, function () { ra.attr({ src: c, style: "" }); sa.attr({ src: r, style: "" }) }) } function ta() {
				function b(a) {
					if (!p) {
						clearTimeout(r); for (var A = 0; 2 > A; A++) {
							if (A) var f = e.find("> a"), f = ha ? e.width() : g(f.get(0)).outerWidth(!0) * f.length; else f = e.height();
							var d = z[A ? "width" : "height"](), m = d - f; if (0 > m) { d = (a[A ? "pageX" : "pageY"] - z.offset()[A ? "left" : "top"]) / d; if (c == d) break; c = d; var k = e.position()[A ? "left" : "top"]; e.css({ transition: "0ms linear", transform: "translate3d(" + k.left + "px," + k.top + "px,0)" }); e.stop(!0); if (0 < ia) { if (.2 < d && .8 > d) break; m = .5 > d ? 0 : m - 1; f = ia * Math.abs(k - m) / (Math.abs(d - .5) - .2) } else m *= Math.min(Math.max((d - .2) / .6, 0), 1), f = -ia * f / 2; e.animate(A ? { left: m } : { top: m }, f, 0 < ia ? "linear" : "easeOutCubic") } else e.css(A ? "left" : "top", m / 2)
						}
					}
				} t.find(".ws_bullets a,.ws_thumbs a").click(function (b) {
					y(b,
						g(this).index())
				}); if (z.length) {
					z.hover(function () { ua = 1 }, function () { ua = 0 }); var e = z.find(">div"); z.css({ overflow: "hidden" }); var c, r, p; ha = z.width() < t.width(); z.bind("mousemove mouseover", b); z.mouseout(function (b) { r = setTimeout(function () { e.stop() }, 100) }); z.trigger("mousemove"); if (a.gestures) {
						var f, d, m, k, x, h; E(z, 2 == a.gestures, function (b, a, g) { if (m > x || k > h) return !1; ha ? (b = Math.min(Math.max(d + g, k - h), 0), e.css("top", b)) : (b = Math.min(Math.max(f + a, m - x), 0), e.css("left", b)) }, function (b) {
							p = 1; b = e.find("> a"); m = z.width();
							k = z.height(); x = g(b.get(0)).outerWidth(!0) * b.length; h = e.height(); f = parseFloat(e.css("left")) || 0; d = parseFloat(e.css("top")) || 0; return !0
						}, function () { p = 0 }, function () { p = 0 })
					} t.find(".ws_thumbs a").each(function (b, a) { E(a, 0, 0, function (b) { return !!g(b.target).parents(".ws_thumbs").get(0) }, function (b) { p = 1 }, function (b) { y(b, g(a).index()) }) })
				} if (P.length) {
					var l = P.find(">div"), n = g("a", P), v = n.find("IMG"); if (v.length) {
						var H = function (b) {
							0 > b && (b = 0); O && O.loadTtip(b); g(n.get(U)).removeClass("ws_overbull"); g(n.get(b)).addClass("ws_overbull");
							q.show(); var a = { left: n.get(b).offsetLeft - q.width() / 2, "margin-top": n.get(b).offsetTop - n.get(0).offsetTop + "px", "margin-bottom": -n.get(b).offsetTop + n.get(n.length - 1).offsetTop + "px" }, e = v.get(b), e = { left: -e.offsetLeft + (g(e).outerWidth(!0) - g(e).outerWidth()) / 2 }; 0 > U ? (q.css(a), u.css(e)) : (document.all || (a.opacity = 1), q.stop().animate(a, "fast"), u.stop().animate(e, "fast")); U = b
						}, q = g('<div class="ws_bulframe"/>').appendTo(l), u = g("<div/>").css({ width: v.length + 1 + "00%" }).appendTo(g("<div/>").appendTo(q)); v.appendTo(u);
						g("<span/>").appendTo(q); var U = -1; n.hover(function () { H(g(this).index()) }); var w; l.hover(function () { w && (clearTimeout(w), w = 0); H(U) }, function () { n.removeClass("ws_overbull"); document.all ? w || (w = setTimeout(function () { q.hide(); w = 0 }, 400)) : q.stop().animate({ opacity: 0 }, { duration: "fast", complete: function () { q.hide() } }) }); l.click(function (b) { y(b, g(b.target).index()) })
					}
				}
			} function G(b) {
				g("A", z).each(function (a) {
					if (a == b) {
						if (a = g(this), a.addClass("ws_selthumb"), !ua) {
							var e = z.find(">div"), c = a.position() || {}, r; r = e.position() ||
								{}; for (var f = 0; 1 >= f; f++) { if (f) var d = e.find("> a"), d = ha ? e.width() : g(d.get(0)).outerWidth(!0) * d.length; else d = e.height(); d = z[f ? "width" : "height"]() - d; 0 > d ? f ? e.stop(!0).animate({ left: -Math.max(Math.min(c.left, -r.left), c.left + a.outerWidth(!0) - z.width()) }) : e.stop(!0).animate({ top: -Math.max(Math.min(c.top, 0), c.top + a.outerHeight(!0) - z.height()) }) : e.css(f ? "left" : "top", d / 2) }
						}
					} else g(this).removeClass("ws_selthumb")
				})
			} function U(b) { g("A", P).each(function (a) { a == b ? g(this).addClass("ws_selbull") : g(this).removeClass("ws_selbull") }) }
	function Ba(b) { var a = R[b]; b = g("img", a).attr("title"); a = g(a).data("descr"); b.replace(/\s+/g, "") || (b = ""); return (b ? "<span>" + b + "</span>" : "") + (a ? "<br><div>" + a + "</div>" : "") } function Da() { a.autoPlay = !a.autoPlay; a.autoPlay ? (m(), Q.removeClass("ws_play"), Q.addClass("ws_pause"), u && u.start(n)) : (ja.wsStop(), Q.removeClass("ws_pause"), Q.addClass("ws_play")) } function ea() {
		var b = va ? 4 : a.responsive, e = C.width() || a.width, c = g([L, ka.find("img"), la.find("img")]); 0 < b && document.addEventListener && t.css("fontSize", Math.max(10 *
			Math.min(e / a.width || 1, 1), 4)); if (2 == b) { var r = Math.max(e / a.width, 1) - 1; c.each(function () { g(this).css("marginTop", -a.height * r / 2) }) } if (3 == b) { var f = window.innerHeight, d = a.width / a.height; heightCentering = d > e / f; t.css("height", f); c.each(function () { g(this).css({ width: heightCentering ? "auto" : "100%", height: heightCentering ? "100%" : "auto", marginLeft: heightCentering ? (e - f * d) / 2 : 0, marginTop: heightCentering ? 0 : (f - e / d) / 2 }) }) } if (4 == b) {
				var b = window.innerWidth, p = window.innerHeight, d = (t.width() || a.width) / (t.height() || a.height);
				t.css({ maxWidth: d > b / p ? "100%" : d * p, height: "" }); c.each(function () { g(this).css({ width: "100%", marginLeft: 0, marginTop: 0 }) })
			} else t.css({ maxWidth: "", top: "" })
	} var g = jQuery, t = this, ja = t.get(0); window.ws_basic = function (b, a, e) { var c = g(this); this.go = function (a) { e.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(!0).animate({ left: a ? -a + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0 }, b.duration, "easeInOutExpo", function () { c.trigger("effectEnd") }) } }; a = g.extend({
		effect: "fade", prev: "", next: "", duration: 1E3,
		delay: 2E3, captionDuration: 1E3, captionEffect: "none", width: 960, height: 360, thumbRate: 1, gestures: 2, caption: !0, controls: !0, controlsThumb: !1, keyboardControl: !1, scrollControl: !1, autoPlay: !0, autoPlayVideo: !1, responsive: 1, support: jQuery.fn.wowSlider.support, stopOnHover: 0, preventCopy: 1
	}, a); var S = navigator.userAgent, C = g(".ws_images", t).css("overflow", "visible"), q = g("<div>").appendTo(C).css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }), F = C.find("ul").css("width", "100%").wrap("<div class='ws_list'></div>").parent().appendTo(q);
	g("<div>").css({ position: "relative", width: "100%", "font-size": 0, "line-height": 0, "max-height": "100%", overflow: "hidden" }).append(C.find("li:first img:first").clone().css({ width: "100%", visibility: "hidden" })).prependTo(C); F.css({ position: "absolute", top: 0, height: "100%", transform: /Firefox/.test(S) ? "" : "translate3d(0,0,0)" }); var O = a.images && new wowsliderPreloader(this, a), R = C.find("li"), I = R.length; F.width(); F.find("li").width(); var q = { position: "absolute", top: 0, height: "100%", overflow: "hidden" }, ka = g("<div>").addClass("ws_swipe_left").css(q).prependTo(F),
		la = g("<div>").addClass("ws_swipe_right").css(q).appendTo(F); /MSIE/.test(S) || /Trident/.test(S) || /Safari/.test(S) || /Firefox/.test(S) ? (q = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(I))), F.css({ width: q + "00%" }), R.css({ width: 100 / q + "%" }), ka.css({ width: 100 / q + "%", left: -100 / q + "%" }), la.css({ width: 100 / q + "%", left: 100 * I / q + "%" })) : (F.css({ width: I + "00%", display: "table" }), R.css({ display: "table-cell", "float": "none", width: "auto" }), ka.css({ width: 100 / I + "%", left: -100 / I + "%" }), la.css({ width: 100 / I + "%", left: "100%" })); var Aa =
			a.onBeforeStep || function (b) { return b + 1 }; a.startSlide = f(isNaN(a.startSlide) ? Aa(-1, I) : a.startSlide); O && O.load(a.startSlide, function () { }); c(a.startSlide); var V; a.preventCopy && (q = g('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", "z-index": 10, background: "#FFF", opacity: 0 }).appendTo(C), V = q.find("A").get(0)); var L = []; g(".ws_frame", t); R.each(function (b) {
				b = g(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",
					this); for (var a = g("<div></div>"), e = 0; e < this.childNodes.length;)this.childNodes[e] != b.get(0) && this.childNodes[e] != b.get(1) ? a.append(this.childNodes[e]) : e++; g(this).data("descr") || (a.text().replace(/\s+/g, "") ? g(this).data("descr", a.html().replace(/^\s+|\s+$/g, "")) : g(this).data("descr", "")); g(this).data("type", b[0].tagName); g(">iframe", this).css("opacity", 0); L[L.length] = g(">a>img", this).get(0) || g(">iframe+img", this).get(0) || g(">*", this).get(0)
			}); L = g(L); L.css("visibility", "visible"); ka.append(g(L[I - 1]).clone());
	la.append(g(L[0]).clone()); var B = []; a.effect = a.effect.replace(/\s+/g, "").split(","); for (var D in a.effect) d(a.effect[D]); B.length || d("basic"); var n = a.startSlide, Y = n, u = !1, aa = 1, N = 0; g(B).bind("effectStart", function (b, a) { N++; h(a, function () { p(); a.cont && g(a.cont).stop().show().css("opacity", 1); a.start && a.start(); Y = n; n = a.nextIndex; e(n, Y, a.captionNoDelay) }) }); g(B).bind("effectEnd", function (b, a) { c(n).stop(!0, !0).show(); setTimeout(function () { l(n, function () { N--; m(); u && u.start(n) }) }, a ? a.delay || 0 : 0) }); a.loop =
		a.loop || Number.MAX_VALUE; a.stopOn = f(a.stopOn); var ba = Math.floor(Math.random() * B.length); 2 == a.gestures && t.addClass("ws_gestures"); D = C; if (q = v("$WmkT$")) {
			if (a.gestures) {
				var Ea = 0, T, wa, ma, Z; E(C, 2 == a.gestures, function (b, e, c) { Z = !!B[0].step; x(); F.stop(!0, !0); ma && (N++, ma = 0, Z || p()); Ea = e; e > T && (e = T); e < -T && (e = -T); Z ? B[0].step(n, e / T) : a.support.transform && a.support.transition ? F.css("transform", "translate3d(" + e + "px,0,0)") : F.css("left", wa + e) }, function (b) {
					var a = /ws_playpause|ws_prev|ws_next|ws_bullets/g.test(b.target.className) ||
						g(b.target).parents(".ws_bullets").get(0); b = M ? b.target == M[0] : 0; if (a || b || u && u.playing()) return !1; ma = 1; T = C.width(); wa = parseFloat(-n * T) || 0; qa && w && w.play(); return !0
				}, function (b, e, c) {
					ma = 0; var d = C.width(), r = f(n + (0 > e ? 1 : -1)), p = d * e / Math.abs(e); 10 > Math.abs(Ea) && (r = n, p = 0); var m = 200 + 200 * (d - Math.abs(e)) / d; N--; g(B[0]).trigger("effectStart", {
						curIndex: n, nextIndex: r, cont: Z ? g(".ws_effect") : 0, captionNoDelay: !0, start: function () {
							function b() {
								a.support.transform && a.support.transition && F.css({
									transition: "0ms", transform: /Firefox/.test(S) ?
										"" : "translate3d(0,0,0)"
								}); g(B[0]).trigger("effectEnd", { swipe: !0 })
							} function c() { Z ? e > d || e < -d ? g(B[0]).trigger("effectEnd") : wowAnimate(function (b) { B[0].step(Y, (e + (d * (0 < e ? 1 : -1) - e) * b) / d) }, 0, 1, m, function () { g(B[0]).trigger("effectEnd") }) : a.support.transform && a.support.transition ? (F.css({ transition: m + "ms ease-out", transform: "translate3d(" + p + "px,0,0)" }), setTimeout(b, m)) : F.animate({ left: wa + p }, m, b) } O ? O.load(r, c) : c()
						}
					})
				}, function () { var b = g("A", R.get(n)); b && b.click() })
			} var P = t.find(".ws_bullets"), z = t.find(".ws_thumbs"),
				fa = a.autoPlay, ga, pa = !1, M = v('8B"iucc9!jusv?+,unpuimggs)eji!"'), M = M + v("uq}og<%vjwjvhhh?vfn\`sosa8fhtviez8ckifo8dnir(wjxd=70t{9"), J = D || document.body; 4 > q.length && (q = q.replace(/^\s+|\s+$/g, "")); D = q ? g("<div>") : 0; g(D).css({ position: "absolute", padding: "0 0 0 0" }).appendTo(J); if (D && document.all) {
					var xa = g("<iframe>"); xa.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", filter: "alpha(opacity=0)", opacity: .01 }); xa.attr({ src: "javascript:false", scrolling: "no", framespacing: 0, border: 0, frameBorder: "no" });
					D.append(xa)
				} g(D).css({ zIndex: 56, right: "15px", bottom: "15px" }).appendTo(J); M += v("uhcrm>bwuh=majeis<dqwm:aikp.d\`joi}9Csngi?!<"); if (M = D ? g(M) : D) M.css({ "font-weight": "normal", "font-style": "normal", padding: "1px 5px", margin: "0 0 0 0", "border-radius": "10px", "-moz-border-radius": "10px", outline: "none", display: "none" }).html(q).bind("contextmenu", function (b) { return !1 }).attr("target", "_blank"), function () {
					if (!document.getElementById("wowslider_engine")) {
						var b = document.createElement("div"); b.id = "wowslider_engine";
						b.style.position = "absolute"; b.style.left = "-1000px"; b.style.top = "-1000px"; b.style.opacity = "0.1"; b.innerHTML = '<a href="http://wowslider.com">wowslider.com</a>'; document.body.insertBefore(b, document.body.childNodes[0])
					}
				}(); D = g('<div class="ws_controls">').appendTo(C); P[0] && P.appendTo(D); if (a.controls && (q = g('<a href="#" class="ws_next"><span>' + a.next + "<i></i><b></b></span></a>"), J = g('<a href="#" class="ws_prev"><span>' + a.prev + "<i></i><b></b></span></a>"), D.append(q, J), q.bind("click", function (b) {
					y(b, n +
						1, 1)
				}), J.bind("click", function (b) { y(b, n - 1, 0) }), /iPhone/.test(navigator.platform) && (J.get(0).addEventListener("touchend", function (b) { y(b, n - 1, 1) }, !1), q.get(0).addEventListener("touchend", function (b) { y(b, n + 1, 0) }, !1)), a.controlsThumb)) var Ga = g('<img alt="" src="">').appendTo(q), ra = g('<img alt="" src="">').appendTo(q), Ha = g('<img alt="" src="">').appendTo(J), sa = g('<img alt="" src="">').appendTo(J); var ia = a.thumbRate, ua, ha; if (a.caption) {
					var da = g("<div class='ws-title' style='display:none'></div>"), Ca = g("<div class='ws-title' style='display:none'></div>");
					g("<div class='ws-title-wrapper'>").append(da, Ca).appendTo(C); da.bind("mouseover", function (b) { u && u.playing() || x() }); da.bind("mouseout", function (b) { u && u.playing() || m() })
				} var ya, X = { none: function (b, a, e, c) { ya && clearTimeout(ya); ya = setTimeout(function () { a.html(c).show() }, b.noDelay ? 0 : b.duration / 2) } }; X[a.captionEffect] || (X[a.captionEffect] = window["ws_caption_" + a.captionEffect]); (P.length || z.length) && ta(); e(n, Y, !0); a.stopOnHover && (this.bind("mouseover", function (b) { u && u.playing() || x(); pa = !0 }), this.bind("mouseout",
					function (b) { u && u.playing() || m(); pa = !1 })); u && u.playing() || m(); var w = t.find("audio").get(0), qa = a.autoPlay; if (w) {
						g(w).insertAfter(t); if (window.Audio && w.canPlayType && w.canPlayType("audio/mp3")) w.loop = "loop", a.autoPlay && (w.autoplay = "autoplay", setTimeout(function () { w.play() }, 100)); else {
							var w = w.src, q = w.substring(0, w.length - /[^\\\\/]+$/.exec(w)[0].length), na = "wsSound" + Math.round(9999 * Math.random()); g("<div>").appendTo(t).get(0).id = na; J = "wsSL" + Math.round(9999 * Math.random()); window[J] = { onInit: function () { } };
							swfobject.createSWF({ data: q + "player_mp3_js.swf", width: "1", height: "1" }, { allowScriptAccess: "always", loop: !0, FlashVars: "listener=" + J + "&loop=1&autoplay=" + (a.autoPlay ? 1 : 0) + "&mp3=" + w }, na); w = 0
						} t.bind("stop", function () { qa = !1; w ? w.pause() : g(na).SetVariable("method:pause", "") }); t.bind("start", function () { w ? w.play() : g(na).SetVariable("method:play", "") })
					} ja.wsStart = k; ja.wsRestart = m; ja.wsStop = r; var Q = g('<a href="#" class="ws_playpause"><span><i></i><b></b></span></a>'); a.playPause && (a.autoPlay ? Q.addClass("ws_pause") :
						Q.addClass("ws_play"), Q.click(function () { Da(); return !1 }), D.append(Q)); if (a.keyboardControl) g(document).on("keyup", function (b) { switch (b.which) { case 32: Da(); break; case 37: y(b, n - 1, 0); break; case 39: y(b, n + 1, 1) } }); if (a.scrollControl) t.on("DOMMouseScroll mousewheel", function (b) { 0 > b.originalEvent.wheelDelta || 0 < b.originalEvent.detail ? y(null, n + 1, 1) : y(null, n - 1, 0) }); "function" == typeof wowsliderVideo && (D = g('<div class="ws_video_btn"><div></div></div>').appendTo(C), u = new wowsliderVideo(t, a, p), "undefined" != typeof $f &&
							(u.vimeo(!0), u.start(n)), window.onYouTubeIframeAPIReady = function () { u.youtube(!0); u.start(n) }, D.on("click touchend", function () { N || u.play(n, 1) })); var va = 0; if (a.fullScreen) {
								if ("undefined" !== typeof NoSleep) var oa = new NoSleep; var W = function () {
									var b = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenchange"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitfullscreenchange"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement",
										"webkitfullscreenchange"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozfullscreenchange"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "MSFullscreenChange"]], a = {}, e, c, g = 0; for (c = b.length; g < c; g++)if ((e = b[g]) && e[1] in document) { g = 0; for (c = e.length; g < c; g++)a[b[0][g]] = e[g]; return a } return !1
								}(); if (W) {
									var za = 0; document.addEventListener(W.fullscreenchange, function (b) { document[W.fullscreenElement] ? va = 1 : (za && (za = 0, t.unwrap()), va = 0); ea(); B[0].step || p() }); g("<a href='#' class='ws_fullscreen'></a>").on("click",
										function (b) { /WOW Slider/g.test(S) || (b.preventDefault(), document[W.fullscreenElement] ? (document[W.exitFullscreen](), "undefined" !== typeof oa && oa.disable()) : (za = 1, t.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][W.requestFullscreen](), "undefined" !== typeof oa && oa.enable())) }).appendTo(C)
								}
							} a.responsive && (g(ea), g(window).on("load resize", ea)); return this
		}
};
jQuery.extend(jQuery.easing, {
	easeInOutExpo: function (a, c, f, d, h) { return 0 == c ? f : c == h ? f + d : 1 > (c /= h / 2) ? d / 2 * Math.pow(2, 10 * (c - 1)) + f : d / 2 * (-Math.pow(2, -10 * --c) + 2) + f }, easeOutCirc: function (a, c, f, d, h) { return d * Math.sqrt(1 - (c = c / h - 1) * c) + f }, easeOutCubic: function (a, c, f, d, h) { return d * ((c = c / h - 1) * c * c + 1) + f }, easeOutElastic1: function (a, c, f, d, h) {
		a = Math.PI / 2; var l = 1.70158, k = 0, v = d; if (0 == c) return f; if (1 == (c /= h)) return f + d; k || (k = .3 * h); v < Math.abs(d) ? (v = d, l = k / 4) : l = k / a * Math.asin(d / v); return v * Math.pow(2, -10 * c) * Math.sin((c * h - l) *
			a / k) + d + f
	}, easeOutBack: function (a, c, f, d, h, l) { void 0 == l && (l = 1.70158); return d * ((c = c / h - 1) * c * ((l + 1) * c + l) + 1) + f }
});
jQuery.fn.wowSlider.support = {
	transform: function () { if (!window.getComputedStyle) return !1; var a = document.createElement("div"); document.body.insertBefore(a, document.body.lastChild); a.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"; var c = window.getComputedStyle(a).getPropertyValue("transform"); a.parentNode.removeChild(a); return void 0 !== c ? "none" !== c : !1 }(), perspective: function () {
		for (var a = "perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" "),
			c = 0; c < a.length; c++)if (void 0 !== document.body.style[a[c]]) return !!a[c]; return !1
	}(), transition: function () { var a = (document.body || document.documentElement).style; return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition }()
};
(function (a) {
	window.wowAnimate = function (c, f, d, h, l, k, v) {
		function K(a) { function b(b) { cancelAnimationFrame(b); a(1); v && v() } var c = (new Date).getTime() + l, d = function () { var f = (new Date).getTime() - c; 0 > f && (f = 0); f = h ? f / h : 1; 1 > f ? (a(f), requestAnimationFrame(d)) : b(1) }; d(); return { stop: b } } function p(a, b, c, d) {
			if ("object" === typeof b) { var f = {}, k; for (k in b) f[k] = p(a, b[k], c[k], d); return f } k = ""; "string" === typeof b ? k = b : "string" === typeof c && (k = c); a: {
				var h = "px % in cm mm pt pc em ex ch rem vh vw vmin vmax deg rad grad turn".split(" ");
				for (f in h) if (-1 < k.indexOf(h[f])) { k = h[f]; break a } k = H[a] ? H[a] : ""
			} b = parseFloat(b); c = parseFloat(c); return b + (c - b) * d + k
		} if ("undefined" !== typeof c) {
			c.jquery || "function" === typeof c || (f = c.from, d = c.to, h = c.duration, l = c.delay, k = c.easing, v = c.callback, c = c.each || c.obj); var E = "num"; c.jquery && (E = "obj"); if ("undefined" !== typeof c && "undefined" !== typeof f && "undefined" !== typeof d) {
				"function" === typeof l && (v = l, l = 0); "function" === typeof k && (v = k, k = 0); "string" === typeof l && (k = l, l = 0); h = h || 0; l = l || 0; k = k || 0; v = v || 0; var H = {
					opacity: 0,
					top: "px", left: "px", right: "px", bottom: "px", width: "px", height: "px", translate: "px", rotate: "deg", rotateX: "deg", rotateY: "deg", scale: 0
				}; return K(function (e) {
					var b = k; e = "linear" == b ? e : "swing" == b ? a.easing[b] ? a.easing[b](e) : e : a.easing[b] ? a.easing[b](1, e, 0, 1, 1, 1) : e; if ("num" === E) b = f + (d - f) * e, c(b); else {
						var b = { transform: "" }, r; for (r in f) if ("undefined" !== typeof H[r]) {
							var m = p(r, f[r], d[r], e); switch (r) {
								case "translate": b.transform += " translate3d(" + m[0] + "," + m[1] + "," + m[2] + ")"; break; case "rotate": b.transform += " rotate(" +
									m + ")"; break; case "rotateX": b.transform += " rotateX(" + m + ")"; break; case "rotateY": b.transform += " rotateY(" + m + ")"; break; case "scale": b.transform = "object" === typeof m ? b.transform + (" scale(" + m[0] + ", " + m[1] + ")") : b.transform + (" scale(" + m + ")"); break; default: b[r] = m
							}
						} "" === b.transform && delete b.transform; c.css(b)
					}
				})
			}
		}
	}
})(jQuery); Date.now || (Date.now = function () { return (new Date).getTime() });
(function () {
	for (var a = ["webkit", "moz"], c = 0; c < a.length && !window.requestAnimationFrame; ++c) { var f = a[c]; window.requestAnimationFrame = window[f + "RequestAnimationFrame"]; window.cancelAnimationFrame = window[f + "CancelAnimationFrame"] || window[f + "CancelRequestAnimationFrame"] } if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
		var d = 0; window.requestAnimationFrame = function (a) {
			var c = Date.now(), f = Math.max(d + 16, c); return setTimeout(function () {
				a(d =
					f)
			}, f - c)
		}; window.cancelAnimationFrame = clearTimeout
	}
})(); (function () { var a; window.ws_caption_fade = function (c, f, d, h) { d = c.noDelay ? 0 : (c.duration / 2 - c.captionDuration / 3) / 2; 0 > d && (d = 0); f.stop(1, 1).delay(d).fadeOut(c.captionDuration / 3); h && (a && clearTimeout(a), a = setTimeout(function () { f.stop(1, 1).html(h); f.fadeIn(c.captionDuration, function () { this.filters && this.style.removeAttribute("filter") }) }, c.noDelay ? 0 : c.duration / 2 + d)) } })();
(function () {
	var a; window.ws_caption_move = function (c, f, d, h) {
		var l = jQuery, k = [{ left1: "100%", top2: "100%" }, { left1: "80%", left2: "-50%" }, { top1: "-100%", top2: "100%", distance: .7, easing: "easeOutBack" }, { top1: "-80%", top2: "-80%", distance: .3, easing: "easeOutBack" }, { top1: "-80%", left2: "80%" }, { left1: "80%", left2: "80%" }], k = k[Math.floor(Math.random() * k.length)]; d = c.noDelay ? 0 : c.duration / 2 - c.captionDuration / 3; 0 > d && (d = 0); f.stop(1, 1).delay(d).fadeOut(c.captionDuration / 3); h && (a && clearTimeout(a), a = setTimeout(function () {
			function a(e) {
				var b =
					l(d[e]).css("opacity"); l(d[e]).css({ visibility: "visible" }).css({ opacity: 0 }).animate({ opacity: b }, c.captionDuration, "easeOutCirc").animate({ top: 0, left: 0 }, { duration: c.captionDuration, easing: k.easing || "easeOutElastic1", queue: !1 })
			} f.stop(1, 1).html(h); var d = f.find(">span,>div").get(); l(d).css({ position: "relative", visibility: "hidden" }); f.show(); for (var p in k) if (/\%/.test(k[p])) {
				k[p] = parseInt(k[p]) / 100; var E = f.offset()[/left/.test(p) ? "left" : "top"], H = /left/.test(p) ? "width" : "height"; k[p] = 0 > k[p] ? k[p] * E : k[p] *
					(c.$this[H]() - f[H]() - E)
			} l(d[0]).css({ left: (k.left1 || 0) + "px", top: (k.top1 || 0) + "px" }); l(d[1]).css({ left: (k.left2 || 0) + "px", top: (k.top2 || 0) + "px" }); a(0); setTimeout(function () { a(1) }, c.captionDuration * (k.distance || .5))
		}, c.noDelay ? 0 : c.duration / 2 + d))
	}
})();
function ws_caption_slide(a, c, f, d) {
	function h(a, c) { var d, e = document.defaultView; e && e.getComputedStyle ? (e = e.getComputedStyle(a, "")) && (d = e.getPropertyValue(c)) : (d = c.replace(/\-\w/g, function (b) { return b.charAt(1).toUpperCase() }), d = a.currentStyle ? a.currentStyle[d] : a.style[d]); return d } function l(a, c, d) {
		for (var e = ["padding-left", "padding-right", "border-left-width", "border-right-width"], b = 0, f = 0; f < e.length; f++)b += parseFloat(h(a, e[f])) || 0; e = parseFloat(h(a, "width")) || (a.offsetWidth || 0) - b; c && (e += b); d && (e +=
			(parseFloat(h(a, "margin-left")) || 0) + (parseFloat(h(a, "margin-right")) || 0)); return e
	} function k(a, c, d) { for (var e = ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"], b = 0, f = 0; f < e.length; f++)b += parseFloat(h(a, e[f])) || 0; e = parseFloat(h(a, "height")) || (a.offsetHeight || 0) - b; c && (e += b); d && (e += (parseFloat(h(a, "margin-top")) || 0) + (parseFloat(h(a, "margin-bottom")) || 0)); return e } function v(a, c) {
		var d = { position: 0, top: 0, left: 0, bottom: 0, right: 0 }, e; for (e in d) d[e] = a.get(0).style[e]; a.show(); var b =
			{ width: l(a.get(0), 1, 1), height: k(a.get(0), 1, 1), "float": a.css("float"), overflow: "hidden", opacity: 0 }; for (e in d) b[e] = d[e] || h(a.get(0), e); e = K("<div></div>").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }); a.wrap(e); e = a.parent(); "static" == a.css("position") ? (e.css({ position: "relative" }), a.css({ position: "relative" })) : (K.extend(b, { position: a.css("position"), zIndex: a.css("z-index") }), a.css({ position: "absolute", top: 0, left: 0, right: "auto", bottom: "auto" })); e.css(b).show(); var f =
				c.direction || "left", b = "up" == f || "down" == f ? "top" : "left", f = "up" == f || "left" == f, m = c.distance || ("top" == b ? a.outerHeight(!0) : a.outerWidth(!0)); a.css(b, f ? isNaN(m) ? "-" + m : -m : m); var x = {}; x[b] = (f ? "+=" : "-=") + m; e.animate({ opacity: 1 }, { duration: c.duration, easing: c.easing }); a.animate(x, { queue: !1, duration: c.duration, easing: c.easing, complete: function () { a.css(d); a.parent().replaceWith(a); c.complete && c.complete() } })
	} var K = jQuery; c.stop(1, 1).fadeOut(a.captionDuration / 3, function () {
		d && (c.html(d), v(c, {
			direction: "left", easing: "easeInOutExpo",
			complete: function () { c.get(0).filters && c.get(0).style.removeAttribute("filter") }, duration: a.captionDuration
		}))
	})
}
(function () {
	var a = jQuery, c; a.extend(a.easing, { easeInQuad: function (a, c, h, l, k) { return l * (c /= k) * c + h }, easeOutQuad: function (a, c, h, l, k) { return -l * (c /= k) * (c - 2) + h } }); window.ws_caption_traces = function (f, d, h, l) {
		function k(a) {
			var b, c = parseInt; a = a.replace(/\s\s*/g, ""); "transparent" == a && (a = "rgba(255,255,255,0)"); if (b = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(a)) b = [c(b[1], 16), c(b[2], 16), c(b[3], 16)]; else if (b = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(a)) b = [17 * c(b[1], 16), 17 * c(b[2], 16), 17 * c(b[3], 16)];
			else if (b = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(a)) b = [+b[1], +b[2], +b[3], +b[4]]; else if (b = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(a)) b = [+b[1], +b[2], +b[3]]; else throw Error(a + " is not supported by $.parseColor"); isNaN(b[3]) && (b[3] = 1); return b.slice(0, 3 + !!H)
		} function v(c, b) {
			if (!c || !c.length) return c; for (var d = c.css("background-color"), f = c.css("color"), d = k(d), f = k(f), h = [d], l = 0; 3 > l; l++) {
				var v = [Math.round(d[0] - (l + 1) * (d[0] - f[0]) / 4), Math.round(d[1] - (l + 1) * (d[1] - f[1]) / 4), Math.round(d[2] -
					(l + 1) * (d[2] - f[2]) / 4)]; 4 == d.length && v.push(d[3] - (l + 1) * (d[3] - f[3]) / 4); h.push(v)
			} h.push(f); for (l in h) h[l] = (4 == d.length ? "rgba(" : "rgb(") + h[l].join(",") + ")"; d = h || p; h = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }; f = {}; b.top ? (h.top = -b.top * c.innerHeight(), f.height = 100 / d.length + "%") : b.left && (h.position = "absolute", f.height = "100%", f.width = 100 / d.length + "%", 0 > b.left ? (h.left = -b.left * c.innerWidth(), f["float"] = "left") : (h.right = b.left * c.innerWidth(), f["float"] = "right")); var h = a('<i class="ws-colored-traces">').css(h),
				E; for (E in d) a("<i>").css({ display: "block", background: d[E] }).css(f).appendTo(h); return c.append(h)
		} function K(c, b) {
			var d = { visibility: "visible" }, h = {}, k = {}; b.top ? (d.top = b.top * f.$this.height(), d.height = Math.abs(b.top) * f.$this.height(), h.top = 0, k.height = c.height()) : b.left && (d.left = b.left * f.$this.width() * 2, k.left = 0, 0 > b.left ? (h.left = d.left / 2, d.width = f.$this.width(), k.width = c.width() + 2) : (d.width = c.width() + 2, h.left = 0, d.paddingLeft = f.$this.width(), k.paddingLeft = c.css("paddingLeft"))); v(c, b).css(d).animate(h,
				{ duration: .8 * f.captionDuration, easing: "easeInQuad" }).animate(k, .8 * f.captionDuration, "easeOutQuad", function () { var b = a(this); a(".ws-colored-traces", b).remove(); b.css({ height: "", width: "", overflow: "", top: "", left: "", paddingLeft: "" }) })
		} var p = ["#fff", "#ccc", "#555", "#000"], E = [[{ top: -1 }, { left: 1 }], [{ top: -1 }, { left: -1 }], [{ left: -1 }, { left: 1 }], [{ left: 1 }, { left: -1 }]][Math.floor(4 * Math.random())], H = function () { var c = a("<div>").css("backgroundColor", "rgba(100,255,20,.5)"); return /rgba/g.test(c.css("backgroundColor")) }();
		d.parent().css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }); h = f.noDelay ? 0 : f.duration / 2 - f.captionDuration / 1.5; 0 > h && (h = 0); d.stop(1, 1).delay(h).fadeOut(f.captionDuration / 3); l && (c && clearTimeout(c), c = setTimeout(function () { d.stop(1, 1).html(l); var c = d.find(">span,>div").get(); a(c).css({ position: "relative", visibility: "hidden", verticalAlign: "top", overflow: "hidden" }); d.show(); K(a(c[0]), E[0]); setTimeout(function () { K(a(c[1]), E[1]) }, .3 * f.captionDuration) }, f.noDelay ? 0 : f.duration / 2 + h))
	}
})();
function ws_caption_parallax(a, c, f, d, h, l) {
	var k = jQuery; c.parent().css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" }); c.html(d).css("width", "100%").stop(1, 1); f.html(h).css("width", "100%").stop(1, 1); (function (c, d, f, h, l, e) {
		function b(b, c) { return b.css(a.support.transform ? { transform: "translate3d(" + c + "px,0px,0px)" } : { marginLeft: c }).css("display", "inline-block") } f = 15; h = a.$this.width(); f *= h / 100; if (a.prevIdx == a.curIdx) b(c, 0).fadeIn(l / 3), b(k(">div,>span", c), 0); else {
			var r = k(">div",
				c), m = k(">div", d), x = k(">span", c), y = k(">span", d), ca = f + h * (e ? -1 : 1), ta = f + h * (e ? 1 : -1), G = (e ? -1 : 1) * f; b(c, ca).show(); b(d, 0).show(); b(r, G); b(m, 0); b(x, 2 * G); b(y, 0); wowAnimate(function (a) { a = k.easing.swing(a); b(c, (1 - a) * ca); b(d, a * ta) }, 0, 1, a.duration); wowAnimate(function (a) { a *= .8; b(x, 2 * (1 - a) * G); b(r, (1 - a) * G); b(y, -2 * a * G); b(m, a * -G) }, 0, 1, a.duration, function () {
					y.css("opacity", 0); m.css("opacity", 0); wowAnimate(function (a) {
						a = k.easing.easeOutCubic(1, a, 0, 1, 1, 1); var c = (1 - .8) * G, d = -1.6 * G, e = .8 * -G; b(x, 2 * (1 - a) * (1 - .8) * G); b(r, (1 - a) *
							c); b(y, (1 - a) * d + -2 * a * G); b(m, (1 - a) * e + a * -G)
					}, 0, 1, /Firefox/g.test(navigator.userAgent) ? 1500 : a.delay)
				})
		}
	})(c, f, d, h, a.captionDuration, l)
};
`;
}