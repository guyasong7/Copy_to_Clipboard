const btn = document.getElementById('btn');

const text = document.getElementById('text');

const copied = document.getElementById('copied');

function copyText() {
    text.focus();
    text.select();

    var copy = document.execCommand('copy');

    if(copy === true) {
        copied.innerHTML = 'Text Copied to Clipboard';
        text.style.border = '1px solid green';
    } else {
        return;
    }

}