/*!
 * jQuery Image Zoom
 * http://webdesignfan.com/
 *
 * Copyright 2010, Charles Stover and WebDesignFan.com
 */
var imageZoom = function (effect, popup, thumbnail) {
    var borderWidth = 4,
        effects = ["blur", "inner", "tint"];
    for (var x = 0; x < 3; x++) {
        if (typeof(effect[effects[x]]) == "undefined")
            effect[effects[x]] = false;
    }
    var css = {
            background: "background-image: url('" + thumbnail["src"].replace(/\\'/g, "\\\'") + "');",
            dimensions: "height : " + (screen.height-70) + "px; width : " + (screen.width-20) + "px;"
        },
        ratio = {
            height: popup["height"] /screen.height,
            width: popup["width"] /screen.width
        };
    css["thumbnail"] =css["background"] + " " + css["dimensions"];
    console.log(css["box"]);
    document.write(
        '<div class="image-zoom blur">' +
        '<div class="thumbnail cover-bg" style="' + css["thumbnail"] + '">' +
        '<div class="blur cover-bg">' +
        '<div class="cover-bg" style="' + css["thumbnail"] + '">' +
        '<div class="cover-bg" style="' + css["thumbnail"] + '">' +
        '<div class="cover-bg" style="' + css["thumbnail"] + '">' +
        '<div class="cover-bg" style="' + css["thumbnail"] + '">' +
        '<\/div><\/div><\/div><\/div><\/div>' +
        '<div class="box" rel="' + popup["width"] + 'x' + popup["height"] + '/' + thumbnail["width"] + 'x' + thumbnail["height"] + '/' + borderWidth + '" ' +
        'style="'+css["background"] +'background-size:'+ screen.width+'px '+screen.height+'px;'+ ' height : ' + Math.round(thumbnail["width"] / ratio["width"]) + 'px; top : -' + thumbnail["height"] + 'px; ' +
        'width : ' + Math.round(thumbnail["width"] / ratio["width"]) + 'px;"><\/div><\/div><\/div>'
    );
    $("div.image-zoom:last div.blur div, div.image-zoom:last div.box, div.image-zoom:last div.tint, div.image-zoom:last div.popup").fadeTo(0, 0);
    $("div.image-zoom:last div.thumbnail")
        .mouseenter(
        function () {
            $(this).children("div.box").fadeTo(333, 1);
            $(this).find("div.blur div:not(div.tint)").fadeTo(333, 0.8);
        }
    )
        .mouseleave(
        function () {
            $(this).children("div.box").fadeTo(333, 0);
            $(this).find("div.blur div").fadeTo(333, 0);
        }
    )
        .mousemove(
        function (e) {
            var dimensions = $(this).children("div.box").attr("rel").split(/\//),
                offset = $(this).parent().offset();
            dimensions[0] = dimensions[0].split(/x/);
            dimensions[1] = dimensions[1].split(/x/);
            dimensions[2] = parseInt(dimensions[2], 10);

            var ratio = {
                    height: parseInt(dimensions[0][1], 10) / parseInt(dimensions[1][1], 10),
                    width: parseInt(dimensions[0][0], 10) / parseInt(dimensions[1][0], 10)
                },
            x = e.pageX - offset.left,
            y = e.pageY - offset.top;
            x = x - $(this).width() / ratio["width"] / 2;
            y = y - $(this).height() / ratio["height"] / 2;
            if (x < 0)
                x = 0;
            if (x > $(this).width() - $(this).width() / ratio["width"])
                x = $(this).width() - $(this).width() / ratio["width"];
            if (y < 0)
                y = 0;
            if (y > $(this).height() - (1.5*($(this).height() / ratio["height"])))
                y = $(this).height() - (1.5*($(this).height() / ratio["height"]));
            x = Math.round(x-10);
            y = Math.round(y-10 - $(this).height() - dimensions[2]);
            $(this).children("div.box").css({
                backgroundPosition: (x > 0 ? "-" + x + "px" : 0) + " " + (y > 0 - $(this).height() - dimensions[2] ? '-' + (y + $(this).height() + dimensions[2]) + "px" : 0),
                left: (x - dimensions[2]) + "px",
                top: y + "px"
            });
        }
    );

};