/*
 * @Copyright (c) 2021
 * @Email push.webstudio@gmail.com
 * @Author @afashio
 */
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },
    mode: "none"
}