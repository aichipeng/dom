import React from 'react';

 export default class List extends React.Component{
    render() {
        return(
            <div>
                <h1>列表</h1>
                <button onClick={() => this.props.history.push('')}>首页</button><br/>
                <button onClick={() => this.props.history.push('user')}>个人中心</button>
            </div>
        )
    }
 }