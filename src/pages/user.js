import React from 'react';

 export default class List extends React.Component{
    render() {
        return(
            <div>
                <h1>用户中心</h1>
                <button onClick={() => this.props.history.push('')}>首页</button><br/>
                <button onClick={() => this.props.history.push('list')}>列表</button>
            </div>
        )
    }
 }