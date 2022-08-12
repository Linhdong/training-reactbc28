import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      {id: '1', name: 'product 1', price: 2000, img: 'https://picsum.photos/50/50', description: 'description 1', productType: 'mobile'},
      {id: '2', name: 'product 2', price: 1000, img: 'https://picsum.photos/50/50', description: 'description 2', productType: 'tablet'}
    ]
  }

  addProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = [...this.state.arrProduct, {...newProduct}]
    //setState
    this.setState({
      arrProduct: arrProductUpdate
    }, () => {
      this.luuStore();
    })
    
  }

  delProduct = (idDel) => {
    console.log(idDel);
    let arrProductUpdate = this.state.arrProduct.filter(pro => pro.id != idDel);
    //setState
    this.setState({
      arrProduct: arrProductUpdate
    }, () =>{
      this.luuStore();
    })
    
  }
 
 luuStore() {
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem('arrProduct', value);
 }

 layStore() {
    if(localStorage.getItem('arrProduct')){
      let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
      return arrProduct;
    }
    return [];
 }

  render() {
    return (
      <div className='container'>
        <h3>Product Management</h3>
        <FormProduct addProduct={this.addProduct}/>
        <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct}/>
      </div>
    )
  }
  componentDidMount(){
    //Hàm này sẽ thực hiện sau khi nội dung được render
    this.setState({
      arrProduct: this.layStore()
    })
  }
}
