import React, { Component } from 'react'

export default class ProductCard extends Component {
    //this.props: thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    /**
     *  So sánh state và props
     *  Giống nhau: State và Props đều là thuộc tính có sắn của react class component dùng để binding dữ liệu ra giao diện
     *  Khác nhau: State có thể gán lại giá trị thông qua phương thức setState, Props không thể gán lại giá trị (readonly) dùng để nhận giá trị từ componnet cha truyền vào
     * 
     */
    render() {
        const { item } = this.props;
        return (
            <div className='card'>
                <img src={`https://i.pravatar.cc?u=${item?.age}`} alt='' />
                <div className='card-body'>
                    <p>Name: {item?.name}</p>
                    <p>Age: {item?.age}</p>
                </div>
            </div>
        )
    }
}
