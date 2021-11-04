let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
//Function to create add element to the page
btn.addEventListener('click', () => {
        let txt = input.value;
        if (txt === "") {
            alert('You must write something');
        } else {
            let li = document.createElement('li');
            li.innerHTML = txt;
            list.insertBefore(li, list.childNodes[0]);
            input.value = '';
            li.style.fontWeight = '900';
            li.style.color = 'white';
        }
    })
    //function That will Allow us to mark done subject
list.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
})