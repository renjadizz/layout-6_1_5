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
let callMenu = document.querySelector(".call");

export function feedbackShow(event) {
    let elemMenu;
    if (event.currentTarget.id === "menu__feedback") {
        elemMenu = feedbackMenu;
    }
    if (event.currentTarget.id === "menu__call") {
        elemMenu = callMenu;
    }
    elemMenu.style.cssText = "margin-right: 0";
    mainContent.style.filter = "blur(1rem)";
    if (window.innerWidth < 440) {
        elemMenu.style.width = `${window.innerWidth}px`;
    }
    mainContent.addEventListener("mousedown", feedbackClose);
}

export function feedbackClose(event) {
    let elemMenu;
    console.log(feedbackMenu.style.marginRight);
    if (feedbackMenu.style.marginRight === "0px") {
        elemMenu = feedbackMenu;
    } else {
        elemMenu = callMenu;
    }
    event.stopPropagation();
    let feedBackWidth = elemMenu.getBoundingClientRect().width;
    elemMenu.style.marginRight = `-${feedBackWidth}px`;
    elemMenu.style.width = `${feedBackWidth}px`;
    if (window.innerWidth > 768) {
        setTimeout(function () {
            mainContent.style.filter = "none";
        }, 1000);
    }
    mainContent.removeEventListener("mousedown", feedbackClose);
}
