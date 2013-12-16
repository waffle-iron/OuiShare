$(document).foundation('orbit', {
    animation: 'slide',
    timer_speed: 10000,
    pause_on_hover: true,
    resume_on_mouseout: false,
    animation_speed: 500,
    slide_number: false,
    next_class: 'orbit-next',
    prev_class: 'orbit-prev',
    timer: false
});
$(document).foundation();

$(window).load(function() {
    function language() {
        var lingua = $("#l18n").val();
        window.location = lingua;
    }
    $("#l18n").change(language);

    $(".orbit-bullets li.active").prepend("<span class='block'></span>");

    $("#slideshow").on("orbit:after-slide-change", function(event, orbit) {
        $(".orbit-bullets li").html("");
        $(".orbit-bullets li.active").prepend("<span class='block'></span>");
    });


    var container = document.querySelector('.more-content ul');
    var column = document.querySelector('.more-content ul li');
    var msnry = new Masonry( container, column,  {
        // options
        columnWidth: column ,
        itemSelector: 'li'
    });

});
