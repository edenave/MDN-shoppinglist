const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');



button.onclick = function() {
    let itemInput = input.value;
    input.value = '';



const listItem = document.createElement('li');
const span = document.createElement('span');
const button1 = document.createElement('button');

const appendedSpan = listItem.append(span);
span.textContent = itemInput;
const appendedButton = listItem.append(button1);
button1.textContent = "delete";

ul.append(listItem);

button1.onclick = function(){
    ul.removeChild(listItem)
}
}
