/*
 * @Copyright (c) 2021
 * @Email push.webstudio@gmail.com
 * @Author @afashio
 */

import Dachshund from "./img.png"

export default function addImage() {
    const img = document.createElement('img')
    img.alt = 'Dachshund'
    img.width = 300
    img.src = Dachshund
    const body = document.querySelector('body')
    body.appendChild(img)
}

