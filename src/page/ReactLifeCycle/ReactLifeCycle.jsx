import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1
        }
        console.log('constructor');
    }
    
    static getDerivedStateFromProps(newProps,currentState){
        //Can thiệp trước khi render ra giao diện 
        //có static thì ko gán đc this 
        console.log('getDerivedStateFromProps');
        // currentState.number = 2
        // //return về state mới, nếu giữ state cũ thì return null
        // return currentState;
        return null;
    }

    shouldComponentUpdate(newProps,newState){
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render');
        return (
            <div className='container'>
                
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>

                <h3>Like: {this.state.like}</h3>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>Like</button>

                <Child number = {this.state.number}/>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount');
        //tương tự như window.onload
        //Sau khi render ra giao diện thì đi ra hàm này 
        //Chỉ chạy 1 lần khi component load lần đầu tiên 
    }
}

/**
 * Life Cycle
 *  + Mouting: 
 *      + Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhằm mục đích xử lý state và props.
 *      + Can thiệp thay đổi state trước render (sử dụng getDerivedStateFromProps).
 *      + Can thiệp thay đổi state sau khi render (sử dụng componentDidMount())
 *      + componentDidMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên (thường dùng để call api)
 *  +  
 */