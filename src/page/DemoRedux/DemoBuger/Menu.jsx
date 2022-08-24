import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenu = () => {
    const { burger } = this.props;
    return burger.map((item, index) => {
        return  <tr>
                    <td>{item.id}</td>
                    <td>
                        <button className='btn btn-primary mx-2' onClick={() => {
                            const action = {
                                type: 'CHANGE_TOPPING',
                                payload: {
                                    id: item.id,
                                    quantity: 1
                                }
                            }
                            this.props.dispatch(action)
                        }}>+</button> 
                        {item.quantity}
                        <button className='btn btn-primary mx-2' onClick={() => {
                            const action = {
                                type: 'CHANGE_TOPPING',
                                payload: {
                                    id: item.id,
                                    quantity: -1
                                }
                            }
                            this.props.dispatch(action)
                        }}>-</button>
                    </td>
                    <td>{item.price}</td>
                </tr>
    })
  };

  tinhTongTien = () => {
    const {burger} = this.props;
    return burger.reduce((total, item, index) => {
        return total += item.quantity * item.price;
    },0);
  }
  render() {
    return (
      <div className="container">
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <th>Topping</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          <tbody>
            {this.renderMenu()}
            <tr>
              <td colSpan={2}></td>
              <td>Total: {this.tinhTongTien()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    burger: state.bugerReducer.burger
});

export default connect(mapStateToProps)(Menu);
