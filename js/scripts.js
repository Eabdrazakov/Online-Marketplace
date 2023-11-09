function hiddenDiv() {
    document.getElementById("jewelry1").setAttribute("class", "hidden");
    document.getElementById("jewelry2").setAttribute("class", "hidden");
    document.getElementById("jewelry3").setAttribute("class", "hidden");
}

function formValue() {
    const program = parent(document.querySelector('input[name="jewelry"]:checked')).value;
    const name = document.getElementById("name").value;
    const card = parent(document.getElementById("card")).value;
    const address = document.getElementById("add").value;

    document.querySelector("span#person1").innerText = name;
    document.querySelector("span#person2").innerText = card;
    document.querySelector("span#person3").innerText = address;

    document.querySelector("div#jewelry1").removeAttribute("class");
    document.querySelector("div#jewelry2").removeAttribute("class");
    document.querySelector("div#jewelry3").removeAttribute("class");

    if (program === "brac" && program === "neck" && program === "earr") {
        document.getElementById("jewelry1").removeAttribute("class");
        document.getElementById("jewelry2").removeAttribute("class");
        document.getElementById("jewelry3").removeAttribute("class");
    } else if (program === "brac" && program === "neck") {
        document.getElementById("jewelry1").removeAttribute("class");
        document.getElementById("jewelry2").removeAttribute("class");
    } else if (program === "brac" && program === "earr") {
        document.getElementById("jewelry1").removeAttribute("class");
        document.getElementById("jewelry3").removeAttribute("class");
    } else if (program === "neck" && program === "earr") {
        document.getElementById("jewelry2").removeAttribute("class");
        document.getElementById("jewelry3").removeAttribute("class");
    } else if (program === "brac") {
        document.getElementById("jewelry1").removeAttribute("class");
    } else if (program === "neck") {
        document.getElementById("jewelry2").removeAttribute("class");
    } else if (program === "earr") {
        document.getElementById("jewelry3").removeAttribute("class");
    }

}
