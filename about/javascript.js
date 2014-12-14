$(document).ready(function() {
    var AboutUsDiv = $("#AboutUs");
    var Individuals = $("#Individuals")
    var offset = Individuals.position().top;
    var Ed = $("#Ed");
    var EdPos = Ed.position().top + offset;
    var Two = $("#Two");
    var TwoPos = Two.position().top + offset;
    var Three = $("#Three");
    var ThreePos = Three.position().top + offset;
    var Four = $("#Four");
    var FourPos = Four.position().top + offset;
    var Five = $("#Five");
    var FivePos = Five.position().top + offset;
    var Six = $("#Six");
    var SixPos = Six.position().top + offset;
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var halfWindowHeight = windowHeight / 2;
        var newOpacity = (windowHeight - windowPos) / windowHeight;
        updateLeft (Ed, EdPos, windowPos, halfWindowHeight, true)
        updateLeft (Two, TwoPos, windowPos, halfWindowHeight, false)
        updateLeft (Three, ThreePos, windowPos, halfWindowHeight, true)
        updateLeft (Four, FourPos, windowPos, halfWindowHeight, false)
        updateLeft (Five, FivePos, windowPos, halfWindowHeight, true)
        updateLeft (Six, SixPos, windowPos, halfWindowHeight, false)
        AboutUsDiv.css({opacity: newOpacity});
        AboutUsDiv.html("Window Height:" + windowHeight + "<br />Scroll position: " + windowPos + "<br />New opacity:" + newOpacity + "pos:" + EdPos + " 2/3:" + halfWindowHeight);
    });
    function updateLeft (div, pos, windowPos, heightThreshold, left){
        var windowWidth = $(window).width();
    	if (pos - heightThreshold >=  windowPos){
    		if (left)
        		var newLeft = 0.9 * ((windowPos / (pos - heightThreshold)) - 1);
        	else
        		var newLeft = 1 - (0.9 * (windowPos / (pos - heightThreshold)));
        	div.css({left: newLeft*windowWidth});
        } else {
        	if (left)
        		div.css({left: 0});
        	else
        		div.css({left: 0.1 * windowWidth})
        }
    }
});