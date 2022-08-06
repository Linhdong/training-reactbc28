import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {
    renderProductLitst = () => {
        let { products, viewDetail } = this.props;
        return products.map((item, index) => {
            return <div className='col-3' key={index}>
                <ItemProduct product={item} viewDetail={viewDetail}/>
            </div>
        })
    }
    render() {
        return (
            <div>
                <div className='row'>
                    {this.renderProductLitst()}
                </div>
            </div>
        )
    }
}
