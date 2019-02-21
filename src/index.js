// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('aichipeng');

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Router from './router/router'

// export default class App extends Component {
//     constructor(props) {
//         super(props)
//     };
//     render() {
//         return <h1> Hello, world! </h1>
//     }
// }

ReactDom.render(
    <Router />,
    document.getElementById('app')
)