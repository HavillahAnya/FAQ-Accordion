"use strict";

const accordionContents = document.querySelectorAll(".accordion__content");

accordionContents.forEach((item, index) => {
  let accordionHeader = item.querySelector(".accordion__content-header");
  let accordionText = item.querySelector(".accordion__content-text");

  accordionHeader.addEventListener("click", () => {
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      accordionText.style.height = `${accordionText.scrollHeight}px`;
      item
        .querySelector(".accordion__content-icon")
        .classList.replace("plus-icon", "minus-icon");
    } else {
      accordionText.style.height = "0px";
      item
        .querySelector(".accordion__content-icon")
        .classList.replace("minus-icon", "plus-icon");
    }

    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContents.forEach((item2, index2) => {
    if (index1 !== index2) {
      item2.classList.remove("open");

      item2.querySelector(".accordion__content-text").style.height = "0px";

      item2
        .querySelector(".accordion__content-icon")
        .classList.replace("minus-icon", "plus-icon");
    }
  });
}
