! function(t) {
    jQuery.scrollSpeed = function(e, n, i) {
        var o, l, r, u = t(document),
            h = t(window),
            a = t("html, body"),
            c = i || "default",
            d = 0,
            f = !1;
        if (window.navigator.msPointerEnabled) return !1;
        h.on("mousewheel DOMMouseScroll", function(t) {
            var i = t.originalEvent.wheelDeltaY,
                s = t.originalEvent.detail;
            return o = u.height() > h.height(), l = u.width() > h.width(), f = !0, o && (r = h.height(), (i < 0 || s > 0) && (d = d + r >= u.height() ? d : d += e), (i > 0 || s < 0) && (d = d <= 0 ? 0 : d -= e), a.stop().animate({
                scrollTop: d
            }, n, c, function() {
                f = !1
            })), l && (r = h.width(), (i < 0 || s > 0) && (d = d + r >= u.width() ? d : d += e), (i > 0 || s < 0) && (d = d <= 0 ? 0 : d -= e), a.stop().animate({
                scrollLeft: d
            }, n, c, function() {
                f = !1
            })), !1
        }).on("scroll", function() {
            o && !f && (d = h.scrollTop()), l && !f && (d = h.scrollLeft())
        }).on("resize", function() {
            o && !f && (r = h.height()), l && !f && (r = h.width())
        })
    }, jQuery.easing.default = function(t, e, n, i, o) {
        return -i * ((e = e / o - 1) * e * e * e - 1) + n
    }
}(jQuery);