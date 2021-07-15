/*
 * @Copyright (c) 2021
 * @Email push.webstudio@gmail.com
 * @Author @afashio
 */

import './hello-world-button.scss'

class HelloWorldButton {
    get body() {
        return document.querySelector('body');
    }

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        button.onclick = () => this.renderParagraph();
        this.body.appendChild(button);
    }

    renderParagraph() {
        const p = document.createElement('p');
        p.innerHTML = 'Hello World';
        p.classList.add('hello-world-text')
        this.body.appendChild(p);
    }
}

export default HelloWorldButton
