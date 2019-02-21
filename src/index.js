// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('aichipeng');

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Router from './router/router'
ReactDom.render(
    <Router />,
    document.getElementById('app')
)