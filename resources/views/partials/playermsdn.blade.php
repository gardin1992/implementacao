<div id="grid" class="col-sm-12">
    <div id="col1">
        <label>Enter .mpd file:
            <input type="text" id="filename" value="sample_dash.xml" />
        </label> <button id="load">Play</button><br />

        <!-- some areas to display info and content -->
        <div id="mydiv">
            <span id="myspan"><br />This demo requires Internet Explorer 11</span>
        </div>
        <div id="videoInfo"></div>
        <div>&nbsp;</div>
        <div id="curInfo">
            <h3>Current values:</h3>
            <ul>
                <li>Index: <span id="curIndex"></span> of <span id="numIndexes"></span></li>
                <li>Segment length: <span id="segLength"></span></li>
                <li>Video time: <span id="curTime"></span></li>
            </ul>
        </div>
    </div>
    <div id="col2">
        <video id="myVideo" autoplay="autoplay" >No video available</video>
        <div id="description">
            This example uses HTML5 video, Media Source Extensions, and MPEG-DASH files.<br />
            For more info see <a href="http://go.microsoft.com/fwlink/p/?LinkID=390962">Building a simple MPEG-DASH streaming player</a>.
        </div>
    </div>
</div>
