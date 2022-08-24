import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinSinhVien extends Component {

  handeChange = (e) => {
    let {id, value} = e.target;
    let dataType = e.target.getAttribute('data-type');
    //B1: Tạo dữ liệu action 
    const action  = {
      type: 'HANDLE_CHANGE',
      payload: {
        id: id,
        value: value,
        dataType: dataType
      }
    }
    this.props.dispatch(action);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: 'HANDLE_SUBMIT',
      payload: this.props.svInfor
    }
    this.props.dispatch(action);
  };

  render() {
    let {maSV, sdtSV, tenSV, emailSV} = this.props.svInfor
    let svError = {...this.props.svError}
    return (
      <div className="container">
        <form className="card mt-3" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Mã sinh viên</p>
                  <input
                    value={maSV}
                    data-type="maSV"
                    className="form-control"
                    id="maSV"
                    placeholder="Mã sinh viên"
                    onInput={this.handeChange}
                  />
                  <p className="text-danger">{svError.maSV}</p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    value={sdtSV}
                    data-type="sdt"
                    className="form-control"
                    id="sdtSV"
                    placeholder="Số điện thoại"
                    onInput={this.handeChange}
                  />
                  <p className="text-danger">{svError.sdtSV}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Tên sinh viên</p>
                  <input
                    value={tenSV}
                    data-type="tenSV"
                    className="form-control"
                    id="tenSV"
                    placeholder="Họ và tên"
                    onInput={this.handeChange}
                  />
                  <p className="text-danger">{svError.tenSV}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    value={emailSV}
                    data-type="emailSV"
                    className="form-control"
                    id="emailSV"
                    placeholder="example@gmail.com"
                    onInput={this.handeChange}
                  />
                  <p className="text-danger">{svError.emailSV}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success mx-2">
              Thêm SV
            </button>
            <button className="btn btn-info mx-2" type="button"  onClick={() => {
              const action = {
                type: 'HANDLE_UPDATE'
              }
              this.props.dispatch(action);
            }}>
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  svInfor: state.formSVReducer.svInfor,
  svError: state.formSVReducer.svError,
});

export default connect(mapStateToProps)(ThongTinSinhVien);
