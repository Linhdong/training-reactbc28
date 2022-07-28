import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        alert('Hello Button 1')
    }
    
    showMess = (name) => {
        // console.log(`Hello ${name}`);
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div className='container'>
                <button id='btnClick' onClick={(e) => {
                    alert('Hello CyberSoft')
                }}>Click me</button>

                <button className='btn btn-primary ml-2' onClick={this.handleClick}>Click</button>
                <hr/>
                <h3>Handle Click Params</h3>
                {/* Cách 1  -> Nên sử dụng tối ưu performance */}
                <button onClick={(e) => {
                    //Gọi các hàm khác thực thi khi click
                    this.showMess('Khải-san');
                }}>Show mess</button>
                {/* Cách 2 -> sử dụng bind*/}
                <button className='btn btn-primary ml-2' onClick={this.showMess.bind(this, 'Mentor Khải-san')}>Click</button>

            </div>
        )
    }
}
