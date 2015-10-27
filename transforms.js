function buildContent(){
    var options = ['Reverse','Leetspeak','Lolspeak','Igpay Atinlay'];

    var wrapper = document.createElement('div');
    wrapper.id = 'container';
    
    wrapper.appendChild(makeHeading('Message Transmogrifier'));
    wrapper.appendChild(makeTextArea('Enter text to transmogrify!', 'text-out'));
    wrapper.appendChild(makeButtonList(options));
    wrapper.appendChild(makeTextArea('Transmogrified text will show up here!', 'text-out'));
    document.body.appendChild(wrapper);
}

function makeHeading(string){
    var headingElem = document.createElement('h1');
    headingElem.textContent = string;
    return headingElem;
}

function makeTextArea(placeholder, classname){
    var textArea = document.createElement('textarea');
    textArea.placeholder = placeholder;
    if(classname){
        textArea.className = classname;
    }
    return textArea;
}

function makeButton(string){
    var button = document.createElement('button');
    button.textContent = string;
    button.id = string.toLowerCase().replace(/\W/,'');
    button.className = 'transmog-button';
    button.addEventListener('click', transmog, false);
    return button;
}

function makeButtonList(array){
    var buttonWrap = document.createElement('div');
    buttonWrap.className = 'buttonWrap';
    for(var i = 0; i < array.length; i++){
        buttonWrap.appendChild(makeButton(array[i]));
    }
    return buttonWrap;
}

function transmog(event){
    console.log(event.target.id);
}

// String manipulations
function reverse(string){
    string.split('').reverse().join('');
}

function leet(string){
    return string;
}

function lols(string){
    return string;
}

function pigLatin(string){
    
}

buildContent();