function setupMusicBeatTrackViewer(track, divId) {
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

    var svg = document.createElementNS(svgNS, "svg");
    div.appendChild(svg);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 800 550");
    var g = document.createElementNS(svgNS, "g");
    g.setAttribute("id", "beatAnimGroup");
    g.setAttribute("opacity", "0.25");
    g.setAttribute("stroke", "white");
    g.setAttribute("transform", "scale(0,0)");
    svg.appendChild(g);
    var c = document.createElementNS(svgNS, "circle");
    c.setAttribute("r", 5);
    c.setAttribute("fill", "none");
    c.setAttribute("stroke-width", 3);
    g.appendChild(c);
    c = document.createElementNS(svgNS, "circle");
    c.setAttribute("r", 8);
    c.setAttribute("fill", "none");
    c.setAttribute("stroke-width", 2);
    g.appendChild(c);
    c = document.createElementNS(svgNS, "circle");
    c.setAttribute("r", 12);
    c.setAttribute("fill", "none");
    c.setAttribute("stroke-width", 4);
    g.appendChild(c);

    var doBeatAnim = function() {
        if (!!sw) {
            var beatAnim;
            var scale = 2 + 5 * Math.random();
            var x = 800 * (Math.random());
            var y = 550 * (Math.random());
            var animDur = 0.75;
            beatAnim = new sw.animation.Animate('beatAnimGroup', {
                txf: {
                    from: {sx: 1, sy: 1},
                    to: {sx: 2, sy: 2},
                    template: "scale(#sx, #sy)"
                }
            }, animDur, yui.util.Easing.elasticOut);
            //beatAnim.stop();
            beatAnim.attributes.txf.from.sx = 1;
            beatAnim.attributes.txf.from.sy = 1;
            beatAnim.attributes.txf.to.sx = scale;
            beatAnim.attributes.txf.to.sy = scale;
            beatAnim.getEl().setAttribute("transform", "translate(" + x + "," + y + ")");
            beatAnim.attributes.txf.template = "translate(" + x + "," + y + ") scale(#sx,#sy)";
            beatAnim.animate();
        }
    }

    return doBeatAnim;
}

