const buttonPercent = document.getElementById("button-percent");

buttonPercent.addEventListener(
    "click"
    ,() => addTextSecondLine("%")
);

const addTextSecondLine = (word) => {
    const secondLine = document.getElementById("second-line");
    const oldText = secondLine.textContent;
    secondLine.textContent = oldText + word;
};