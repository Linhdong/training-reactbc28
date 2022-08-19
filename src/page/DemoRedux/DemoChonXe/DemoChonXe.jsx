//rcredux
/**
 *  + Tạo xong rồi nhớ xóa export trên component
 *  + Xóa mapDispatchProps
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class DemoChonXe extends Component {
  changeColor = (color) => {
    //B1: tạo ra action
    const action = {
      type: "CHANGE_COLOR",
      payload: `./img/product/${color}-car.jpg`,
    };
    //B2: Dùng this.props.dispatch để đưa action lên store
    this.props.dispatch(action);
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3>Demo chọn xe</h3>
        <div className="row mt-2">
          <div className="col-6">
            <img src={this.props.imgCar} alt="car" className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.changeColor("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => {
                this.changeColor("silver");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-dark mx-2"
              onClick={() => {
                this.changeColor("black");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-warning mx-2"
              onClick={() => {
                this.changeColor("steel");
              }}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Nơi lấy state redux biến thành props của component
const mapStateToProps = (state) => ({
  imgCar: state.imgCar,
});

export default connect(mapStateToProps)(DemoChonXe);
