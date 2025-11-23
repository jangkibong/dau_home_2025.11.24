//태블릿 vh단위 버그대응
function setRealHeight() {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
}
setRealHeight();
window.addEventListener("resize", setRealHeight);

//pc에서도 drag하여 scroll처리
const tabScrollFn = function () {
    const slider = document.querySelectorAll("#container .sub_tab");
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.forEach((el) => {
            el.addEventListener("mousedown", (e) => {
                isDown = true;
                el.classList.add("active");
                startX = e.pageX - el.offsetLeft;
                scrollLeft = el.scrollLeft;
            });

            el.addEventListener("mouseleave", () => {
                isDown = false;
                el.classList.remove("active");
            });

            el.addEventListener("mouseup", () => {
                isDown = false;
                el.classList.remove("active");
            });

            el.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - el.offsetLeft;
                const walk = (x - startX) * 1.5; // 속도 조절
                el.scrollLeft = scrollLeft - walk;
            });
        });
    }
};

document.addEventListener("DOMContentLoaded", tabScrollFn());

// 25.11.14 추가
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "c") || (e.ctrlKey && e.key === "a") || e.key === "PrintScreen") {
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
