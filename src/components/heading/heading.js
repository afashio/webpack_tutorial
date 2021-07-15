/*
 * @Copyright (c) 2021
 * @Email push.webstudio@gmail.com
 * @Author @afashio
 */
import './heading.scss'

export default class Heading {
    render() {
        const h1 = document.createElement('h1')
        const body = document.querySelector('body')
        h1.innerHTML = 'Webpack is awesome!'
        body.appendChild(h1)
    }
}
