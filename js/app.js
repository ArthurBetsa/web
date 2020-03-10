$(function () {


    // filter
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == "All") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });


    // modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass("no-scroll");

        $("#works-slider").slick('setPosition');

    });

    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $('body').removeClass("no-scroll");

    });

    $(".modal").on("click", function (event) {
        $(this).removeClass("show");
        $("body").removeClass("no-scroll");
    });
//почему не работает стрелочная функция тут?
// Почему разный контекст при function (event){}  И event => {} ???

//     $(".modal").on("click", event => {
//         $(this).removeClass("show");
//         $("body").removeClass("no-scroll");
//     });


    //но работает тут?
    $(".modal__dialog").on("click", event => {
        event.stopPropagation();
    });

    // ===========================================
    // slider: https://kenwheeler.github.io/slick/
    // ===========================================

    $('#works-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false
    });
});