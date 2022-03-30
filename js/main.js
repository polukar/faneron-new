window.onload = () => {
    new Swiper('.create__slider', {
        loop: true,
        slidesPerView: "auto",
        speed: 3000,
        autoplay: {
            delay: 0,
        },
        grabCursor: false,
    });

    new Swiper('.exposition__slider', {
        loop: false,
        slidesPerView: 1,
        speed: 2000,
        navigation: {
            nextEl: '.exposition__slider .slider-next',
            prevEl: '.exposition__slider .slider-prev',
        },
    });

    new Swiper('.exposition__second-slider', {
        loop: false,
        slidesPerView: 'auto',
        speed: 2000,
        navigation: {
            nextEl: '.exposition__second-slider .slider-next',
            prevEl: '.exposition__second-slider .slider-prev',
        },
        breakpoints: {
            980: {
                slidesPerView: 3,
            }
        }
    });

    new Swiper('.laboratory-slider', {
        loop: false,
        slidesPerView: "auto",
        speed: 2000,
        navigation: {
            nextEl: '.laboratory-slider .slider-next',
            prevEl: '.laboratory-slider .slider-prev',
        },
        breakpoints: {
            980: {
                slidesPerView: 3,
            }
        }
    });
    new Swiper('.date-slider', {
        loop: false,
        slidesPerView: 'auto',
        speed: 1000,
        navigation: {
            nextEl: '.date-slider .data-slider-next ',
        },
    });






    // ==> preloader
    $("[data-preloader]").fadeOut(1000, () => {
        $("[data-preloader]").remove()
    })



    $(window).on('scroll', function() {
        var windowHeight = $(window).innerHeight() / 2;
        var scrollTop = $(window).scrollTop() + windowHeight;
        $('.dialog').each(function() {
            var ofsetTop = $(this).offset().top;
            if (ofsetTop < scrollTop) {
                $(this).addClass('animate');
            }
        })
    })

    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });


    // accarrdeon

    let slideUp = (target, duration = 500) => {

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }

    let slideDown = (target, duration = 500) => {

        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }


    const accardeon = document.querySelectorAll('.accardion');

    if (accardeon) {
        accardeon.forEach(elem => {
            const main = elem.querySelector('.accardion__main');
            const drop = elem.querySelector('.accardion__drop');

            main.addEventListener('click', () => {
                if (main.classList.contains('active')) {
                    main.classList.remove('active');
                    slideUp(drop);
                } else {
                    main.classList.add('active');
                    slideDown(drop);
                }
            })
        })
    }


    $('.user__avatar-wrap').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var pic = $(this).find('img').attr('src');
        $('.form__load .user__avatar img').attr('src', pic);
    });


    $('.date-slide').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.popup-tickets__item').on('click', function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.popup__tab').removeClass('active');
        $('.popup__tab:eq(' + index + ')').addClass('active');
    });

    $('.popup__date').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    const calendar = document.querySelector('.calendar-open__input');
    if (calendar) {
        new AirDatepicker('.calendar-open__input', {
            position: 'left center'
        });
    }


    $('.counter__minus').on('click', function() {
        var valueInput = Number($(this).siblings('.counter__input').val());
        if (valueInput > 1) {
            $(this).siblings('.counter__input').val(valueInput - 1)
        }
    });
    $('.counter__plus').on('click', function() {
        var valueInput = Number($(this).siblings('.counter__input').val());
        if (valueInput < 100) {
            $(this).siblings('.counter__input').val(valueInput + 1)
        }
    });


    const rsponsiveSize = (size) => {
        let defaulWidth;
        if (size < 980) {
            defaulWidth = 375;
        } else {
            defaulWidth = 1440;
        }
        let defaultSize = 16;
        let page = document.querySelector('html');
        let newSize = size / (defaulWidth / defaultSize);
        page.style = `font-size: ${newSize}px`;
    }


    $('.popup__close').on('click', function() {
        $(this).parents('.popup').fadeOut();
    })


    setTimeout(() => {
        const size = window.innerWidth;
        rsponsiveSize(size);
    }, 200)


    window.addEventListener('resize', () => {
        const size = window.innerWidth;
        rsponsiveSize(size);
    })



}