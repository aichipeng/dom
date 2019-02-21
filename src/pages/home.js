import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>首页</h1>
                <button onClick={() => this.props.history.push('list')}>通过函数跳转</button>
            </div>
        )
    }
}