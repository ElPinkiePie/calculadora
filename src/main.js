const buttonPercent = document.getElementById("button-percent");
const buttonSeven = document.getElementById("button-seven")
const buttonEight = document.getElementById("button-eight")
const buttonNine = document.getElementById("button-nine")
const buttonFour = document.getElementById("button-four")
const buttonFive = document.getElementById("button-five")
const buttonSix = document.getElementById("button-six")
const buttonOne = document.getElementById("button-one")
const buttonTwo = document.getElementById("button-two")
const buttonThree = document.getElementById("button-three")
const buttonZero = document.getElementById("button-zero")
const buttonDot = document.getElementById("button-dot")
const buttonCE = document.getElementById("button-ce")

buttonPercent.addEventListener(
    "click"
    ,() => addTextSecondLine("%")
);

buttonSeven.addEventListener(
    "click"
    ,() => addTextSecondLine("7")
);

buttonEight.addEventListener(
    "click"
    ,() => addTextSecondLine("8")
);

buttonNine.addEventListener(
    "click"
    ,() => addTextSecondLine("9")
);

buttonFour.addEventListener(
    "click"
    ,() => addTextSecondLine("4")
);

buttonFive.addEventListener(
    "click"
    ,() =>addTextSecondLine("5")
);

buttonSix.addEventListener(
    "click"
    ,() => addTextSecondLine("6")
);

buttonOne.addEventListener(
    "click"
    ,() => addTextSecondLine("1")
);

buttonTwo.addEventListener(
    "click"
    ,() => addTextSecondLine("2")
);

buttonThree.addEventListener(
    "click"
    ,() => addTextSecondLine("3")
);

buttonZero.addEventListener(
    "click"
    ,() => addTextSecondLine("0")
);

buttonDot.addEventListener(
    "click"
    ,() => addTextSecondLine(".")
)

buttonCE.addEventListener(
    "click"
    ,() => clearSecondLine()
)

/*La funciòn clearSecondLine no recibe parametros y remplaza
el "second-line" con un cadena "0"*/
const clearSecondLine = () => {
    const secondLine = document.getElementById("second-line");
    /*La propiedad textContent del HTMLElement
    (osea el contenido del texto en la segunda linea) sera = a una cadena "0"*/
    secondLine.textContent = "0";

};

const addTextSecondLine = (word) => {
    const secondLine = document.getElementById("second-line");
    const oldText = secondLine.textContent;
    if(word==="." && oldText.includes(".")){
        word = ""
    }

    secondLine.textContent = oldText + word;
};