import React, { Component } from 'react'

export default class Databinding extends Component {

    product = {
        id: 1,
        name: 'product 1',
        price: '1000',
        img: 'https://i.pravatar.cc?u=2'
    }

    //phương thức
    renderCardProduct = () => {
        //Nội dung render phải là string, boolean, number hoặc jsx (Có thẻ bao phủ)
        return (
            <div className='card'>
                <img src={this.product.img} alt="" width={200} />
                <div className='content-card'>
                    <p>id: {this.product.id}</p>
                    <p>name: {this.product.name}</p>
                    <p>price: {this.product.price}</p>
                </div>
            </div>
        )
    }

    render() {
        const title = 'Cybersoft';
        const person = {
            name: 'Ekuda',
            age: 29
        }
        const renderText = (tenLop) => {
            return `Hello ${tenLop}`;
        }
        return (
            <div className='container'>
                <p id='pText'>{title}</p>
                <hr />
                <div className='card w-25 mt-2'>
                    <img src="https://i.pravatar.cc?u=1" alt="" />
                    <div className='card-body'>
                        <p>Name: {person.name}</p>
                        <p>Age: {person.age}</p>
                    </div>
                </div>
                <hr />
                <h3>Binding gọi hàm: Chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return .Cú pháp {`{goiham()}`}</h3>
                {renderText(`Bootcamp28`)}
                <hr />
                <div className='alert alert-primary'>
                    Product info:
                    <p>id: {this.product.id}</p>
                    <p>name: {this.product.name}</p>
                    <img src={this.product.img} alt="" width={200} />
                    <p>price: {this.product.price}</p>
                </div>
                <hr/>
                <h3>Card product</h3>
                <div className='w-25'>
                    {this.renderCardProduct()}
                </div>
            </div>

        )
    }
}
