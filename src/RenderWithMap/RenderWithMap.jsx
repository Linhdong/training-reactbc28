import React, { Component } from 'react'

const data = [
    { id: 1, name: 'Red car', price: 1000, img: './img/product/red-car.jpg' },
    { id: 2, name: 'Black car', price: 1000, img: './img/product/black-car.jpg' },
    { id: 3, name: 'Silver car', price: 1000, img: './img/product/silver-car.jpg' },
    { id: 4, name: 'Steel car', price: 1000, img: './img/product/steel-car.jpg' },
]

export default class RenderWithMap extends Component {
    //Cách 1: Duyệt mảng và hiển thị bằng dòng lặp for
    renderProduct = () => {
        //output: [<tr>/<tr>,<tr></tr>]
        const arrTrJSX = [];
        for(let index = 0; index < data.length; index++){
            //Mỗi lần duyệt thì lấy ra 1 Object
            let prod = data[index];
            let tr = <tr>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td><img src={prod.img} width={50}/></td>
            </tr>;
            //Đưa vào mảng arrJSX
            arrTrJSX.push(tr); //[<tr><td>1</td></tr>,<tr><td>1</td></tr>]
        }
        return arrTrJSX;
    }
    //Cách 2 dùng hàm Map 
    renderProduct1 = () => {
        //output: [<tr>/<tr>,<tr></tr>]
        const arrTrJSX = data.map((prod,index) => {
            return <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td><img src={prod.img} width={50}/></td>
                    </tr>;
        });
        
        return arrTrJSX;
    }

    render() {
        return (
            <div className='container'>
                <h3>Render table product</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct1()}
                    </tbody>
                </table>
            </div>
        )
    }
}
