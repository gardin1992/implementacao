function setupGpsTrackAltitudeViewer(gpsTrack, divId) {
    var svgNS = "http://www.w3.org/2000/svg";
    var xlinkNS = "http://www.w3.org/1999/xlink";
    if (divId === null) return;
    var div = (typeof divId === 'object' ? divId : document.getElementById(divId));
    var svg = document.createElementNS(svgNS, "svg");
    div.appendChild(svg);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    var path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke", "red");
    path.setAttribute("stroke-width", "1");
    path.setAttribute("fill", "none");
    svg.appendChild(path);
    var imagepara = document.createElementNS(svgNS, "image");
    imagepara.setAttributeNS(xlinkNS, "href", "km_paraglidingr.png");
    svg.appendChild(imagepara);
    var altitude = document.createElementNS(svgNS, "text");
    altitude.setAttribute("font-family", "sans-serif");
    altitude.setAttribute("font-weight", "bold");
    svg.appendChild(altitude);

    var pathData = "M";
    var minalt, maxalt;

    minalt = Infinity;
    maxalt = - Infinity;
    var gps = [];
    var i;
    for (i = 0; i < gpsTrack.cues.length; i++) {
        gps[i] = JSON.parse(gpsTrack.cues[i].text);
        if (-gps[i].alt > maxalt) maxalt = -gps[i].alt;
        if (-gps[i].alt < minalt) minalt = -gps[i].alt;
        pathData += gpsTrack.cues[i].startTime +",-"+gps[i].alt+ " ";
    }
    var altimagesize;
    altimagesize = (maxalt-minalt)/10;
    svg.setAttribute("viewBox", ""+(-altimagesize)+" "+(minalt-altimagesize)+" "+(gpsTrack.cues[i-1].endTime+altimagesize)+" "+(maxalt-minalt+2*altimagesize));
    path.setAttribute("d", pathData);
    path.setAttribute("stroke-width", altimagesize/10);

    imagepara.setAttribute("width", altimagesize);
    imagepara.setAttribute("height", altimagesize);
    //altitude.setAttribute("font-size", imagesize);

    var processCueForGPSAltitude = function() {
        var gps = JSON.parse(this.activeCues[0].text);
        imagepara.setAttribute("x", this.activeCues[0].startTime-altimagesize/2);
        imagepara.setAttribute("y", -gps.alt-altimagesize);
        altitude.textContent = gps.alt+"m";
        altitude.setAttribute("x", this.activeCues[0].startTime-altimagesize/2);
        altitude.setAttribute("y", -gps.alt-altimagesize);
    }

    return processCueForGPSAltitude;
}
