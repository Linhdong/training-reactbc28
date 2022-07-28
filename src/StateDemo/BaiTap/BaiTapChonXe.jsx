import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    //state xác định giá trị mặc định
    state = {
        srcImg: './img/product/black-car.jpg'
    }

    changColor = (color) => {
        this.setState({
            srcImg: './img/product/${color}-car.jpg'
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.state.srcImg} className='w-100' />
                    </div>
                    <div className='col-6'>
                        <button className='btn text-white mx-2' style={{ background: 'red' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/red-car.jpg'
                            })
                        }}>Red</button>
                        <button className='btn text-white mx-2' style={{ background: 'black' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/black-car.jpg'
                            })
                        }}>Black</button>
                        <button className='btn text-white mx-2' style={{ background: 'silver' }} onClick={() => {
                            this.setState({
                                srcImg: './img/product/silver-car.jpg'
                            })
                        }}>Silver</button>
                        <button className='btn text-white mx-2' style={{ background: '#EEE' }} onClick={ () => {
                            this.setState({
                                srcImg: './img/product/steel-car.jpg'
                            })
                        }}>Steel</button>
                    </div>
                </div>

            </div>
        )
    }
}
