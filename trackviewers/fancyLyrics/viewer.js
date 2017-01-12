function setupFancySubtitleTrackViewer(track, divId) {
    var svgNS = "http://www.w3.org/2000/svg";
    var xlinkNS = "http://www.w3.org/1999/xlink";
    if (divId === null) return;
    var div = (typeof divId === 'object' ? divId : document.getElementById(divId));

    var s = document.createElement("script");
    s.src = "trackviewers/fancyLyrics/res/2.0/scripts/yui/yahoo-dom-event/yahoo-dom-event.js";
    s.async = false;
    div.appendChild(s);
    s = document.createElement("script");
    s.src = "trackviewers/fancyLyrics/res/2.0/scripts/yui/animation/animation-min.js";
    s.async = false;
    div.appendChild(s);
    s = document.createElement("script");
    s.src = "trackviewers/fancyLyrics/res/2.0/scripts/dom-utils.js";
    s.async = false;
    div.appendChild(s);
    s = document.createElement("script");
    s.src = "trackviewers/fancyLyrics/res/2.0/scripts/animation/animate.js";
    s.async = false;
    div.appendChild(s);
    s = document.createElement("style");
    var styleContent ="@font-face { font-family: 'jinky'; src: url('trackviewers/fancyLyrics/res/1.0/fonts/jinky/JINKY.eot'); src: local('Jinky Regular'), local('Jinky-Regular'), url('trackviewers/fancyLyrics/res/1.0/fonts/jinky/JINKY.TTF') format('truetype'); }";
    s.innerHTML = styleContent;
    div.appendChild(s);

    var svg = document.createElementNS(svgNS, "svg");
    div.appendChild(svg);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 800 550");

    var defs = document.createElementNS(svgNS, "defs");
    svg.appendChild(defs);

    var path = document.createElementNS(svgNS, "path");
    path.setAttribute("id", "linePath");
    path.setAttribute("d", "M -400 0 Q -300 -100 -200 0 Q -100 100 0 0 Q 100 -100 200 0 Q 300 100 400 0");
    defs.appendChild(path);

    var g = document.createElementNS(svgNS, "g");
    g.setAttribute("id", "lyricGroup");
    g.setAttribute("fill", "white");
    g.setAttribute("stroke", "none");
    g.setAttribute("text-anchor", "middle");
    g.setAttribute("font-size", "30");
    g.setAttribute("font-weight", "bold");
    g.setAttribute("font-family", "jinky,'Myriad Pro', Myriad, Helvetica, sans-serif");
    g.setAttribute("transform", "translate(400,225)");
    svg.appendChild(g);

    var t = document.createElementNS(svgNS, "text");
    t.setAttribute("id", "t");
    g.appendChild(t);

    var tp = document.createElementNS(svgNS, "textPath");
    tp.setAttribute("id", "tp");
    tp.setAttributeNS(xlinkNS, "href", "#linePath");
    t.appendChild(tp);

    var doLineAnimation = function() {
        var nextFadeInEnd;
        var fadeInDur = 0.4;
        var speedFadeOutDur = 2;
        var fadeOutDur = 7;
        var minFadeOutDur = speedFadeOutDur + 0.2;
        var curFadeInDur;
        var curFadeOutDur;
        var p;
        var fadeIn;
        var fadeOut;
        var speedFadeOut;

        var t = document.getElementById("t");
        var tp = document.getElementById("tp");
        tp.setAttribute("startOffset", (25 + 50 * Math.random()) + "%");
        t.setAttribute('y', (-100 + Math.random()*200));
        t.setAttribute("transform", "scale(0.2,0.2)");
        if (this.activeCues[0]) tp.textContent = this.activeCues[0].text;
        else tp.textContent ='';

        if (!this.activeCues[0]) return;

        if (this.activeCues[0]) {
            nextFadeInEnd = (this.activeCues[0].endTime - this.activeCues[0].startTime) + fadeInDur;
        }

        cueDur = this.activeCues[0].endTime - this.activeCues[0].startTime;

        curFadeInDur = Math.min(fadeInDur, nextFadeInEnd);

        fadeIn = new sw.animation.Animate('t', {
            opacity: {
                from: 1,
                to: 0
            },
            txf: {
                from: {sx: 1.2, r: 80 * (Math.random() - 0.5)},
                to: {sx: 2.0, r: 0},
                template: "scale(#sx) rotate(#r)"
            }
        }, cueDur, yui.util.Easing.easeIn);
        /*
         curFadeOutDur = Math.min(fadeOutDur, nextFadeInEnd - curFadeInDur);
         if (false && curFadeOutDur > minFadeOutDur) {
         // We have time for a slow fade out phase. We want a slow speed,
         // even if se do not have the full fadeOutDur.
         p = curFadeOutDur / fadeOutDur;

         s = 5 * p + 1.3 * (1 - p);
         fadeOut = new sw.animation.Animate('t', {
         txf: {
         from: {sx: 1.3, r: 0},
         to: {sx: s},
         by: {r: 80 * (Math.random() - 0.5)},
         template: "scale(#sx) rotate(#r)"
         },
         opacity: {from: 1, to: 0}
         }, curFadeOutDur, undefined);

         fadeIn.onEnd(fadeOut);

         if (p < 1) {
         speedFadeOut = new sw.animation.Animate('t', {
         opacity: {to: 0},
         txf: {
         from: {sx: s},
         to: {sx: 5},
         by: {r: 80 * (Math.random() - 0.5)},
         template: "scale(#sx) rotate(#r)"
         }
         }, speedFadeOutDur, undefined);
         fadeOut.onEnd(speedFadeOut);
         }
         } else {
         // No time for slow fade out. Speed the line out.
         speedFadeOut = new sw.animation.Animate('t', {
         opacity: {
         from: 1,
         to: 0
         },
         txf: {
         from: {sx: 1.3, r: 0},
         to: {sx: 1.3, r: 60 * (Math.random() - 0.5)},
         template: "scale(#sx) rotate(#r)"
         }
         }, cueDur/2, undefined);
         fadeIn.onEnd(speedFadeOut);
         }
         */
        fadeIn.animate();
    }

    return doLineAnimation;
}

