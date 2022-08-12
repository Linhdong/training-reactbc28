import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {

    let { arrProduct,delProduct } = this.props;
    return (
      
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              { arrProduct.map((prod, index) => {
                return  <tr key={index}>
                            <td>{prod.id}</td>
                            <td><img src={prod.img} /></td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.productType}</td>
                            <td>{prod.description}</td>
                            <td>
                            <button className='btn btn-danger mx-2' onClick={() => {
                                  delProduct(prod.id)
                            }}>Del</button>
                            <button className='btn btn-primary mx-2'>Edit</button>
                            </td>
                        </tr>
              })}
            </tbody>
        </table>
        
      </div>
    )
  }
}