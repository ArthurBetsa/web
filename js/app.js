"use strict";
// 123123
// 123123
// 123123
function(){};
$(function () {

    let workSlider = $('[data-slider="slick"]');

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
    let modalWorks = $(".portfolio__col");

    modalWorks.on("click", function (event) {
        event.preventDefault();
        const modalId = $('#modal_project');
        let $this = $(this);
        let modalWorkCetegory = $(".modal-work__info--category");
        let modalWorkDate = $(".modal-work__category--date");
        let thisWorkCategory = $this.data("cat");
        let thisWorkDate = $this.find("[datetime]").attr("dateTime");

        modalWorkCetegory.html(`${thisWorkCategory}`);
        modalWorkDate.html(`${thisWorkDate}`);

        modalId.addClass('show');
        $('body').addClass("no-scroll");
    });

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $('body').addClass("no-scroll");

        workSlider.slick('setPosition');
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
    // Slick-slider: https://kenwheeler.github.io/slick/
    // ===========================================

    workSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


    // и тут я не могу сделать стрелочную функцию, почему?
    $(".slickPrev").on("click", function (event) {

        event.preventDefault();

        let curentSlider = $(this)
            .parents('.modal')
            .find('[data-slider="slick"]');


        curentSlider.slick("slickPrev");
    });
    $(".slickNext").on("click", function (event) {

        event.preventDefault();
        let curentSlider = $(this)
            .parents('.modal')
            .find('[data-slider="slick"]');

        curentSlider.slick("slickNext");
    });

    // =================
    // Mobile navigation
    // =================

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

});

