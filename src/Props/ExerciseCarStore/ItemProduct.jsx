import React, { Component } from 'react'

export default class ItemProduct extends Component {
    render() {
        let { product, viewDetail} = this.props;
        return (
            <div>
                <div className="card">
                    <img className="w-100" src={product.img} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                        <button className='btn btn-success' onClick={() => {
                            viewDetail(product);
                        }}data-bs-toggle="modal" data-bs-target="#modelId">Xem Chi Tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
