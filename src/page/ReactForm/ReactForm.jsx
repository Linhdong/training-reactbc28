import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";
import axios, { Axios } from "axios";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: 2000,
        img: "https://picsum.photos/50/50",
        description: "description 1",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: 1000,
        img: "https://picsum.photos/50/50",
        description: "description 2",
        productType: "tablet",
      },
    ],

    productEdit: {
      id: "",
      name: "",
      price: 0,
      img: "",
      description: "",
      productType: "mobile",
    },
  };

  addProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = [...this.state.arrProduct, { ...newProduct }];
    //setState
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      () => {
        this.luuStore();
      }
    );
  };

  delProduct = (idDel) => {
    console.log(idDel);
    let arrProductUpdate = this.state.arrProduct.filter(
      (pro) => pro.id != idDel
    );
    //setState
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      () => {
        this.luuStore();
      }
    );
  };

  editProduct = (productClick) => {
    this.setState({
      productEdit: productClick
    })
  }

  updateProduct = (productUpdate) => {
    let prod = this.state.arrProduct.find( pro => pro.id === productUpdate.id);
    if(prod){
      prod.id = productUpdate.id;
      prod.name = productUpdate.name;
      prod.price = productUpdate.price;
      prod.description = productUpdate.description;
      prod.productType = productUpdate.productType;
      prod.img = productUpdate.img;
    }

    //set lại state 
    this.setState({
      arrProduct: this.state.arrProduct
    }, () => {
      this.luuStore();
    })
  }

  luuStore() {
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem("arrProduct", value);
  }

  layStore() {
    if (localStorage.getItem("arrProduct")) {
      let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
      return arrProduct;
    }
    return [];
  }

  render() {
    return (
      <div className="container">
        <h3>Product Management</h3>
        <FormProduct
          addProduct={this.addProduct}
          productEdit={this.state.productEdit}
          updateProduct={this.updateProduct}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
  componentDidMount() {
    //Hàm này sẽ thực hiện sau khi nội dung được render
  //   this.setState({
  //     arrProduct: this.layStore(),
  //   });
  //lấy thông tin sản phẩm từ API
    let promise = axios({
      url: 'https://svcy.myclass.vn/api/Product/GetAll',
      method: 'GET' 
    });

    promise.then(result => {
      this.setState({
        arrProduct: result.data
      })
    })

    promise.catch( err => {
      console.log(err);
    })

  }
  
}
