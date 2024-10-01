"use strict";
// меню
document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            this.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });
});

// вопросы
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const icon = header.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                icon.textContent = '×';
            } else {
                icon.textContent = '+';
            }
        });
    });
});

// модалка
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.querySelector('.close-button');

    function showModal() {
        modalOverlay.classList.add('show');
    }

    function hideModal() {
        modalOverlay.classList.remove('show');
    }

    setTimeout(showModal, 3000); 

    closeButton.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            hideModal();
        }
    });
});

// слайдер
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);


    showSlide(currentSlide);
});

//карточки
document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});




