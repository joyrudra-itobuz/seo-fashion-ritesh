// Rahul start
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "3.3",
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        425: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        },
        575: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 3.5,
        spaceBetween: 50,
        },
    },
    });
    //Rahul end

    //ritabrita basak JS STARTS
    const element = document.querySelector("#follow");

    element.addEventListener('wheel', (event) => {
    event.preventDefault();

    element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
        
    });
    });

    // gsap.fromTo(".star",{x:-20}, {x:35, y:120, rotate:270, repeat:-1, duration:4});

    //ritabrita basak JS ENDS