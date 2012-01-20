(function($) {

    $.ajax({
        url: "/test/qunit/test/index.html",
        async : false,
        success: function( data ) {

            $("body").append("<iframe id='temp-frame' name='temp-frame' seamless='' sandbox='' style='display:none' />");
            $("body").append("<div id='for-replacement' />");
            var frame = document.getElementById("temp-frame").contentDocument;
            frame.write(data);

//            // inject qunit.css
//            $("html head").append($("<link rel='Stylesheet' media='screen' href='/test/qunit.css' />"));



            // copy all JavaScripts
//            $("html head script:not([src$='qunit.js']):not([src$='same.js']:not([src$='test.js'])", frame).each(function(index, element) {
//                var src = '/test/sizzle/test/' + $(this).attr('src');
//                console.log(src);
//                var head= document.getElementsByTagName('head')[0];
//                var script= document.createElement('script');
//                script.type= 'text/javascript';
//                script.src= src;
//                head.appendChild(script);
//            });

            // inject body
            var body = document.adoptNode($("body", frame).get(0));
            $("html body div.for-replacement").replaceWith(body.children());
        }
    });



})(jstestdriver.jQuery);