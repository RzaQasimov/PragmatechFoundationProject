let div = document.createElement('div');
div.classList.add('block');
document.querySelector('body').appendChild(div);

for (let i=0; i<10; i++){
    let diviki = document.createElement('div');
    document.querySelector('div').appendChild(diviki);
    diviki.innerText = i;
    diviki.classList.add('miniBlock');
}