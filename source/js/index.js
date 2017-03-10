$(document).ready(function () {
    var transitionEvent = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

    $('.site-logo').hover(function () {
        var parent = $(this);
        var span = parent.children('span');

        span.off(transitionEvent);
        parent.addClass('shrink');
        span.on(transitionEvent, function () {
            span.removeClass('short');
            span.text('austin burdine');
            parent.removeClass('shrink');
        });
    }, function () {
        var parent = $(this);
        var span = parent.children('span');
        
        span.off(transitionEvent);
        parent.addClass('shrink');
        span.on(transitionEvent, function () {
            span.addClass('short');
            span.text('ab');
            parent.removeClass('shrink');
        });
    });
});