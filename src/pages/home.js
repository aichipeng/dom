import React from 'react';
import { DatePicker } from 'antd';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    navigateTo = (path) =>{
        console.log(path)
        this.props.history.push(path)
    };
    // navigateTo(path) {
    //     console.log(path)
    //     this.props.history.push(path)
    // }
    render() {
        return (
            <div>
                <h1>首页</h1>
                <DatePicker />
                <button onClick={() => this.props.history.push('user/3')}>个人中心</button><br/>
                <button onClick={() => this.props.history.push('list')}>列表</button><br/>
                <button onClick={() => this.navigateTo('list')}>函数跳转列表</button>
            </div>
        )
    }
}