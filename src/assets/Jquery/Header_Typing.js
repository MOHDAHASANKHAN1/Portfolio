
class Txt {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new Txt(elements[i], JSON.parse(toRotate), period);
        }
    }

    //INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.09em solid #fff}";
    document.body.appendChild(css);
};

let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
    }
}).observe(document, { subtree: true, childList: true });

function onUrlChange() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new Txt(elements[i], JSON.parse(toRotate), period);
        }
    }

    //INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.09em solid #fff}";
    document.body.appendChild(css);

    // portfolio javascript start here

    $("#All").removeClass("text-blue-600");
    $("#All").addClass("bg-blue-600 text-white");

    $("#All").click(function () {
        $("#Design").removeClass("bg-blue-600 text-white");
        $("#Development").removeClass("bg-blue-600 text-white");
        $("#Marketing").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".first").removeClass("hidden");
        $(".second").removeClass("hidden");
        $(".fourth").removeClass("hidden");
        $(".third").removeClass("hidden");
        $(".fifth").removeClass("hidden");
        $(".sixth").removeClass("hidden");
    });

    $("#Design").click(function () {
        $("#All").removeClass("bg-blue-600 text-white");
        $("#Development").removeClass("bg-blue-600 text-white");
        $("#Marketing").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".first").removeClass("hidden");
        $(".fourth").removeClass("hidden");
        $(".second").addClass("hidden");
        $(".third").addClass("hidden");
        $(".fifth").addClass("hidden");
        $(".sixth").addClass("hidden");
    });

    $("#Development").click(function () {
        $("#All").removeClass("bg-blue-600 text-white");
        $("#Design").removeClass("bg-blue-600 text-white");
        $("#Marketing").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".second").removeClass("hidden");
        $(".fifth").removeClass("hidden");
        $(".third").addClass("hidden");
        $(".sixth").addClass("hidden");
        $(".fourth").addClass("hidden");
        $(".first").addClass("hidden");
    });

    $("#Marketing").click(function () {
        $("#All").removeClass("bg-blue-600 text-white");
        $("#Development").removeClass("bg-blue-600 text-white");
        $("#Design").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".third").removeClass("hidden");
        $(".sixth").removeClass("hidden");
        $(".first").addClass("hidden");
        $(".second").addClass("hidden");
        $(".fourth").addClass("hidden");
        $(".fifth").addClass("hidden");
    });
}