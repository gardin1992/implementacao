function setupGpsTrackPositionViewer(gpsTrack, divId) {
    var svgNS = "http://www.w3.org/2000/svg";
    var xlinkNS = "http://www.w3.org/1999/xlink";
    if (divId === null) return;
    var div = (typeof divId === 'object' ? divId : document.getElementById(divId));
    var svg = document.createElementNS(svgNS, "svg");
    div.appendChild(svg);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "17121.400000000005 469912.8 91.19999999995798 106.39999999995098");

    var path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke", "red");
    path.setAttribute("fill", "none");
    svg.appendChild(path);
    var imagestart = document.createElementNS(svgNS, "image");
    imagestart.setAttributeNS(xlinkNS, "href", "trackviewers/gps/km_flagstart.png");
    svg.appendChild(imagestart);
    var imageend = document.createElementNS(svgNS, "image");
    imageend.setAttributeNS(xlinkNS, "href", "trackviewers/gps/km_flagend.png");
    svg.appendChild(imageend);
    var imagepara = document.createElementNS(svgNS, "image");
    imagepara.setAttributeNS(xlinkNS, "href", "trackviewers/gps/km_paraglidingr.png");
    svg.appendChild(imagepara);
    var position = document.createElementNS(svgNS, "text");
    position.setAttribute("text-anchor", "middle");
    position.setAttribute("font-family", "sans-serif");
    position.setAttribute("font-weight", "bold");
    svg.appendChild(position);

    var pathData = "M";
    var scaleFactor = 10000;
    var minlong, maxlong, minlat, maxlat;
    minlat = 1.7129;
    maxlat = 1.7197;
    minlong = 46.9928;
    maxlong = 47.0004;

    /*	minlat = Infinity;
     minlong = Infinity;
     maxlat = -Infinity;
     maxlong = -Infinity;
     var gps = [];
     var i;
     for (i = 0; i < gpsTrack.cues.length; i++) {
     gps[i] = JSON.parse(gpsTrack.cues[i].text);
     if (gps[i].lat < minlat) minlat = gps[i].lat;
     if (gps[i].long < minlong) minlong = gps[i].long;
     if (gps[i].lat > maxlat) maxlat = gps[i].lat;
     if (gps[i].long > maxlong) maxlong = gps[i].long;
     pathData += (gps[i].lat*scaleFactor)+","+(gps[i].long*scaleFactor)+" ";
     }
     */
    var delta = Math.max((maxlat - minlat)*scaleFactor, (maxlong - minlong)*scaleFactor);
    var imagesize = delta/10;
    //svg.setAttribute("viewBox", ""+(minlat*scaleFactor-imagesize)+" "+(minlong*scaleFactor-2*imagesize)+" "+(delta+2*imagesize)+" "+(delta+4*imagesize));
    path.setAttribute("d", pathData);
    path.setAttribute("stroke-width", delta/100);

    /*	imagestart.setAttribute("x", gps[0].lat*scaleFactor);
     imagestart.setAttribute("y", gps[0].long*scaleFactor-imagesize);
     imagestart.setAttribute("width", imagesize);
     imagestart.setAttribute("height", imagesize);

     imageend.setAttribute("x", gps[i-1].lat*scaleFactor);
     imageend.setAttribute("y", gps[i-1].long*scaleFactor-imagesize);
     imageend.setAttribute("width", imagesize);
     imageend.setAttribute("height", imagesize);
     */
    imagepara.setAttribute("width", imagesize);
    imagepara.setAttribute("height", imagesize);
    position.setAttribute("font-size", "5");

    var processCueForGPSPosition = function () {
        var gps = JSON.parse(this.activeCues[0].text);
        imagepara.setAttribute("x", gps.lat*scaleFactor-imagesize/2);
        imagepara.setAttribute("y", gps.long*scaleFactor-imagesize);
        position.textContent = gps.long+","+gps.lat;
        position.setAttribute("x", gps.lat*scaleFactor-imagesize/2);
        position.setAttribute("y", gps.long*scaleFactor-imagesize);
    }
    return processCueForGPSPosition;
}