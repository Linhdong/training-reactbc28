import React, { Component } from 'react'
import { connect } from 'react-redux'

class Buger extends Component {
    renderTopping = (id) => {
        const {burger} = this.props;
        let cheese = burger.find(item => item.id === id);
        console.log(cheese)
        //Số lượng
        let {quantity} = cheese;
        const arrDivJSX = [];
        for(let i=0; i < quantity; i++){
            //Mỗi lần duyệt tạo ra 1 div đưa vào array
            const divTopping = <div className={id} key={i}></div>
            arrDivJSX.push(divTopping);
        }
        return arrDivJSX;
    }
  render() {
    return (
      <div className='container'>
        <div className='breadTop'></div>
        {this.renderTopping('cheese')}
        {this.renderTopping('beef')}
        {this.renderTopping('salad')}
        <div className='breadBottom'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger: state.bugerReducer.burger
})


export default connect(mapStateToProps)(Buger)