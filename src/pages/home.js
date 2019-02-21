import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    // navigateTo = (path) =>{
    //     console.log(path)
    // };
    navigateTo(path) {
        console.log(path)
    }
    render() {
        return (
            <div>
                <h1>首页</h1>
                <button onClick={() => this.props.history.push('user')}>个人中心</button><br/>
                <button onClick={() => this.props.history.push('list')}>列表</button>
            </div>
        )
    }
}