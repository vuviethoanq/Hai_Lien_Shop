/* ================= HERO SLIDER ================= */

let heroIndex = 0;

const slides = document.querySelectorAll(".hero .slide");
const dots = document.querySelectorAll(".hero .dot");
const nextBtn = document.querySelector(".hero .next");
const prevBtn = document.querySelector(".hero .prev");

// kiểm tra tồn tại trước khi chạy
if (slides.length > 0) {

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[i].classList.add("active");
        dots[i].classList.add("active");
    }

    // nút next
    if (nextBtn) {
        nextBtn.onclick = () => {
            heroIndex = (heroIndex + 1) % slides.length;
            showSlide(heroIndex);
        };
    }

    // nút prev
    if (prevBtn) {
        prevBtn.onclick = () => {
            heroIndex = (heroIndex - 1 + slides.length) % slides.length;
            showSlide(heroIndex);
        };
    }

    // auto chạy
    setInterval(() => {
        heroIndex = (heroIndex + 1) % slides.length;
        showSlide(heroIndex);
    }, 4000);
}