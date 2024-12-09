// let buttonWidth = document.querySelector('.brands__button').offsetWidth
// console.log(buttonWidth) 
if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {

        //! Основные настройки 
        direction: 'horizontal', // 'vertical', 'horizontal'
        loop: false, // true - круговой слайдер, false - слайдер с конечными положениями
        speed: 900, // скорость переключения слайдов
        effect: 'slider', // cards, coverflow, flip, fade, cube
        // initialSlide: 2, // Начинаем со 2 слайдера
        // freeMode: true, // можно перетаскивать как ленту

        slidesPerView: 'auto', // кол-во активных слайдов
        // centeredSlides: true, // центрирование слайдов

        //! Пагинация (точки)
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // true - Пагинация становится кликабельной
            // dynamicBullets: true, // динамические буллеты
        },

        spaceBetween: 20,

        //! Автоматическое перелистывание
        // autoplay: {
        //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
        // },

        // simulateTouch: true, // вкл откл перетаскивание на ПК

        // touchRadio: 1, // чувствительность свайпа

        // touchAngle: 45, // угол срабаывания свайпа/перетаскивания

        // grabCursor: true, // курсор перетаскивания

    });
}

const sliderItems = document.querySelector('.brands') // контейнер с брендами

const button = document.querySelector('.read-more__button') //блок кнопки

let buttonIcon = document.querySelector('.read-more__button--icon') // иконка
let buttonText = document.querySelector('.read-more__button--text') // текст
let readMore = true

button.addEventListener('click', () => {
    if (readMore) {
        sliderItems.style.maxHeight = '150px'
        buttonIcon.style.transform = 'rotate(0deg)'
        buttonText.textContent = 'Показать все'

    } else {
        sliderItems.style.maxHeight = '335px'
        buttonIcon.style.transform = 'rotate(-180deg)'
        buttonText.textContent = 'Скрыть'
    }

    readMore = !readMore
})