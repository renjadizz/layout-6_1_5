import icon_expand from '../img/icon_expand.svg';
import icon_hide from '../img/icon_hide.svg';

function hideShowText(text, icon, hidable) {
    if (hidable.style.display === '' || hidable.style.display === 'none') {
        text.textContent = "Скрыть";
        icon.src = icon_hide;
        hidable.style.cssText = "display: block";
    } else {
        text.textContent = "Читать далее";
        icon.src = icon_expand;
        hidable.style.cssText = "display: none";
    }
}

function hideShowContent(text, icon, hidable) {
    if (hidable[0].style.display === '' || hidable[0].style.display === 'none') {
        text.textContent = "Скрыть";
        icon.src = icon_hide;
        hidable.forEach(function (elem) {
            elem.style.cssText = "display: flex";
        });
    } else {
        text.textContent = "Показать все";
        icon.src = icon_expand;
        hidable.forEach(function (elem) {
            elem.style.cssText = "display: none";
        });
    }
}

let servicesText = document.querySelector("#text-change");
let servicesIcon = document.querySelector("#text-image");
let servicesHidable = document.querySelector("#text-hide");
let hideShowServices = document.querySelector("#text-button");
hideShowServices.onclick = () => hideShowText(servicesText, servicesIcon, servicesHidable);

let brandsText = document.querySelector("#brand-text");
let brandsIcon = document.querySelector("#brand-image");
let brandsHidable = Array.from(document.getElementsByClassName("brands__tab__button--hidable"));
let hideShowBrands = document.querySelector("#brand-button");
hideShowBrands.onclick = () => hideShowContent(brandsText, brandsIcon, brandsHidable);

let devicesText = document.querySelector("#devices-text");
let devicesIcon = document.querySelector("#devices-image");
let devicesHidable = Array.from(document.getElementsByClassName("devices__tab__button--hidable"));
let hideShowDevices = document.querySelector("#devices-button");
hideShowDevices.onclick = () => hideShowContent(devicesText, devicesIcon, devicesHidable);