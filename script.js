function changeColor() {

    const color = document.querySelector('#seletorCores');

    const border = document.querySelector('.code');

    border.style.borderColor = color.value;
}

function highlight() {
    document.querySelectorAll('div.code').forEach(el => {
        hljs.highlightElement(el);
      });
}