var $grid_selectors = $('.portfolio-filter > li > a');
$grid_selectors.on('click', function () {
    $grid_selectors.parent().removeClass('active');
    $(this).parent().addClass('active');
    var selector = $(this).attr('data-filter');
    $portfolio_filter.find('.grid-item').removeClass('animated').css("visibility", ""); // avoid problem to filter after sorting
    $portfolio_filter.find('.grid-item').each(function () {
        /* remove perticular element from WOW array when you don't want animation on element after DOM lead */
        wow.removeBox(this);
        $(this).css("-webkit-animation", "none");
        $(this).css("-moz-animation", "none");
        $(this).css("-ms-animation", "none");
        $(this).css("animation", "none");
    });
    $portfolio_filter.isotope({filter: selector});
    return false;
});