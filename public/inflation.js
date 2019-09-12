//Card mouseover effect
$(document).on("mouseover", ".card", function () {
    $(this).removeClass('deflated');
    $(this).addClass('inflated');
});

//Card mouseout effect
$(document).on("mouseout", ".card", function () {
    $(this).removeClass('inflated');
    $(this).addClass('deflated');
});