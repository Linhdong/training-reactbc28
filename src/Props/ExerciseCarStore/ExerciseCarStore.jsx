import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

const data = [
    { id: 1, name: 'black car', img: './img/product/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/product/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/product/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/product/steel-car.jpg', price: 4000 }
];

export default class ExerciseCarStore extends Component {
    state = {
        productModal:{ id: 3, name: 'silver car', img: './img/product/silver-car.jpg', price: 3000 }
    }

    //State đặt tại đâu thì setState sẽ đặt tại component đó
    viewDetail = (newproductModal) => {
        //Lấy dữ liệu product người dùng click thay thế cho state hiện tại
       this.setState({
            productModal: newproductModal
       })
    }

    render() {

        return (
            <div className='container'>
                <Modal productModal={this.state.productModal}/>
                <ProductList products={data} viewDetail={this.viewDetail} />
            </div>
        )
    }
}
