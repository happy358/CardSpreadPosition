/*!
 * CardSpreadPosition.js v0.0.1
 * Copyright(c)2024 Wakana Y.K./happy358
 * Site:https://github.com/happy358/CardSpreadPosition/
 * Released under the MIT license.
 * see https://github.com/happy358/CardSpreadPosition/blob/master/LICENSE
 */
console.clear();
class CardSpreadPosition {
    constructor() {
        (this.element = ".card"),
            (this.rangeX = 24),
            (this.rangeY = 20),
            (this.rangeAngle = 15),
            (this.randomOrder = !1);
    }
    init(e = null) {
        e &&
            ((this.element = e.element || this.element),
            (e.rangeX || 0 == e.rangeX) && (this.rangeX = e.rangeX),
            (e.rangeY || 0 == e.rangeY) && (this.rangeY = e.rangeY),
            (e.rangeAngle || 0 == e.rangeAngle) &&
                (this.rangeAngle = e.rangeAngle),
            (this.randomOrder = e.randomOrder || this.randomOrder));
    }
    run(e) {
        this.init(e), this.addHtml();
    }
    addHtml() {
        (this.elems = document.querySelectorAll(this.element)),
            this.style(),
            this.spread();
    }
    spread(e = !1) {
        let r = window.innerWidth;
        this.elems.forEach((t) => {
            let n = 0,
                s = t.getBoundingClientRect(),
                a = (s.right - s.left) / 2 + s.left;
            (n = a < r ? r - a - r / 2 : a - r - r / 2),
                (n += Math.random() * this.rangeX * this.plusOrMinus()),
                t.style.setProperty("--card-x", Math.round(n) + "px");
            let i = 0;
            if (
                ((i = Math.random() * this.rangeY * this.plusOrMinus()),
                t.style.setProperty("--card-y", Math.round(i) + "px"),
                !e)
            ) {
                let e = Math.random() * this.rangeAngle * this.plusOrMinus();
                if (
                    (t.style.setProperty("--card-angle", Math.round(e) + "deg"),
                    this.randomOrder)
                ) {
                    let e = Math.random() * this.elems.length;
                    t.style.setProperty("z-index", Math.round(e));
                }
            }
        });
    }
    plusOrMinus() {
        return Math.random() < 0.5 ? -1 : 1;
    }
    style() {}
    reset() {
        this.elems.forEach((e) => {
            e.style.setProperty("--card-x", "0px"),
                e.style.setProperty("--card-y", "0px");
        });
    }
    resize() {
        this.reset(), this.spread(!0);
    }
}
var e = null;
function r() {
    clearTimeout(e),
        (e = setTimeout(function () {
            cardSpreadPosition.resize();
        }, 500));
}
window.onresize = r;
const cardSpreadPosition = new CardSpreadPosition();
