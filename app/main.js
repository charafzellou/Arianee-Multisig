const list = document.getElementById("list");
let value = 3;

function add() {
    value += 1;
    list.innerHTML += `
        <div class="form-group" id="key-`+ value +`">
            <input class="form-control form-control-lg" type="text" placeholder="key n°` + value +`">
        </div>`;
    value += 1;
    list.innerHTML += `
        <div class="form-group" id="key-`+ value + `">
            <input class="form-control form-control-lg" type="text" placeholder="key n°` + value + `">
        </div>`;
    return value;
}

function remove() {
    console.log(document.getElementById(`key-` + value))
    document.getElementById(`key-` + value)  ;
    value -= 1;
    document.getElementById(`key-` + value).remove;
    value -= 1;
    return value;
}

Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}