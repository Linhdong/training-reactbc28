import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {

    state = {
        fSize: 16 //default 16px 
    }
  render() {
    return (
      <div className='container mt-4'>
        <hr/>
        <h3>Bài tập tăng giảm phong chữ</h3>
        {/*                              16   + px  ==> 16px */}
        <p style={{fontSize: this.state.fSize + 'px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus corporis illum quae itaque est nisi, voluptate similique omnis tempora dolorem beatae amet sit error cum delectus, aliquid reiciendis temporibus!
        </p>
        <button className='btn btn-primary mx-2' onClick={() => {
            this.setState({
                fSize: this.state.fSize + 5
            })
        }}>+</button>
        <button className='btn btn-primary mx-2' onClick={() => {
            this.setState({
                fSize: this.state.fSize - 5
            })
        }}>-</button>
      </div>
    )
  }
}
