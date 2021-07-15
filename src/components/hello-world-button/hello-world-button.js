/*
 * @Copyright (c) 2021
 * @Email push.webstudio@gmail.com
 * @Author @afashio
 */

import './hello-world-button.scss'

class HelloWorldButton {
    body = document.querySelector('body');
    buttonCssClass = 'hello-world-button';
    textCssClass = 'hello-world-text';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add(this.buttonCssClass);
        button.onclick = () => this.renderParagraph();
        this.body.appendChild(button);
    }

    renderParagraph() {
        const p = document.createElement('p');
        p.innerHTML = 'Hello World';
        p.classList.add(this.textCssClass)
        this.body.appendChild(p);
    }
}

export default HelloWorldButton
