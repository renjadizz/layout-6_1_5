let menuPanel = document.querySelector(".menu");
let mainContent = document.querySelector(".main-content");

export function menuShow() {
    menuPanel.style.cssText = "margin-left: 0";
    menuPanel.style.boxShadow = `2rem 0 3rem #F2F2F2`;
    mainContent.style.filter = "blur(1rem)";
    mainContent.addEventListener("mousedown", menuClose);
}

export function menuClose(event) {
    event.stopPropagation();
    menuPanel.style.cssText = "margin-left: -320px";
    menuPanel.style.boxShadow = `none`;

    setTimeout(function () {
        mainContent.style.filter = "none";
    }, 1000);
    mainContent.removeEventListener("mousedown", menuClose);
}

let feedbackMenu = document.querySelector(".feedback");

export function feedbackShow() {

    feedbackMenu.style.cssText = "margin-right: 0";
    mainContent.style.filter = "blur(1rem)";
    if (window.innerWidth < 440) {
        feedbackMenu.style.width = `${window.innerWidth}px`;
    }
    mainContent.addEventListener("mousedown", feedbackClose);
}

export function feedbackClose(event) {
    event.stopPropagation();
    let feedBackWidth = feedbackMenu.getBoundingClientRect().width;
    feedbackMenu.style.marginRight = `-${feedBackWidth}px`;
    feedbackMenu.style.width = `${feedBackWidth}px`;
    if (window.innerWidth > 768) {
        setTimeout(function () {
            mainContent.style.filter = "none";
        }, 1000);
    }
    mainContent.removeEventListener("mousedown", feedbackClose);
}
