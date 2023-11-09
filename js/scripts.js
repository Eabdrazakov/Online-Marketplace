function hiddenDiv() {
    document.getElementById("jewelry1").setAttribute("class", "hidden");
    document.getElementById("jewelry2").setAttribute("class", "hidden");
    document.getElementById("jewelry3").setAttribute("class", "hidden");
}

function formValue() {
    const program = parent(document.querySelector('input[name="jewelry"]:checked')).value;

}