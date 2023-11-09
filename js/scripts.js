function hiddenDiv() {
    document.getElementById("jewelry1").setAttribute("class", "hidden");
    document.getElementById("jewelry2").setAttribute("class", "hidden");
    document.getElementById("jewelry3").setAttribute("class", "hidden");
}

function divValue() {
    const name = document.getElementById("name").value;
    const card = document.getElementById("card").value;
    const address = document.getElementById("add").value;

    document.querySelector("span#person1").innerText = name;
    document.querySelector("span#person2").innerText = card;
    document.querySelector("span#person3").innerText = address;
    document.querySelector("span#person4").innerText = name;
    document.querySelector("span#person5").innerText = card;
    document.querySelector("span#person6").innerText = address;
    document.querySelector("span#person7").innerText = name;
    document.querySelector("span#person8").innerText = card;
    document.querySelector("span#person9").innerText = address;
}

function formValue() {
    const bracelet = document.getElementById("bra").checked;
    const necklace = document.getElementById("nec").checked;
    const earrings = document.getElementById("ear").checked;


    if (bracelet && necklace && earrings) {
        document.getElementById("jewelry1").removeAttribute("class");
        document.getElementById("jewelry2").removeAttribute("class");
        document.getElementById("jewelry3").removeAttribute("class");
    } else if (bracelet && necklace) {
        document.getElementById("jewelry1").removeAttribute("class");
        document.getElementById("jewelry2").removeAttribute("class");
    } else if (bracelet && earrings) {
        document.getElementById("jewelry1").removeAttribute("class");
        document.getElementById("jewelry3").removeAttribute("class");
    } else if (necklace && earrings) {
        document.getElementById("jewelry2").removeAttribute("class");
        document.getElementById("jewelry3").removeAttribute("class");
    } else if (bracelet) {
        document.getElementById("jewelry1").removeAttribute("class");
    } else if (necklace) {
        document.getElementById("jewelry2").removeAttribute("class");
    } else if (earrings) {
        document.getElementById("jewelry3").removeAttribute("class");
    }

}
function handleSubmission() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        hiddenDiv();
        formValue();
        divValue();

    });
}

window.addEventListener("load", handleSubmission);