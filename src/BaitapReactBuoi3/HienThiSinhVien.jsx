import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

class HienThiSinhVien extends PureComponent {
  renderTTSV = (arrSinhVien) => {
    return arrSinhVien.map((sv, index) => {
        return <tr key={index}>
                <td>{sv.maSV}</td>
                <td>{sv.tenSV}</td>
                <td>{sv.sdtSV}</td>
                <td>{sv.emailSV}</td>
                <td>
                  <button className="btn btn-danger rounded mx-2" onClick={()=>{
                    const action = {
                      type: 'HANDLE_DELETE',
                      payload: sv.tenSV
                    }
                    this.props.dispatch(action)
                  }}>Del</button>
                  <button className="btn btn-info rounded mx-2" onClick={() => {
                    const action = {
                      type: 'HANDLE_EDIT',
                      payload: sv.maSV
                    }
                    this.props.dispatch(action)
                  }}>Edit</button>
                </td>
        </tr>
    })
  };
  handleSearch = (e) => {
    let {id, value} = e.target;
    const action = {
      type: 'HANDLE_SEARCH',
      payload: value
    }
    this.props.dispatch(action);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: 'HANDLE_SUBMIT_SEARCH',
      payload: this.props.tenSVSearch
    }
    this.props.dispatch(action);
  };

  render() {
  
    console.log('Tên sinh viên: ', this.props.tenSVSearch);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mt-3 mb-3">
            <input className="form-control" placeholder='Nhập mã sinh viên' id='search' onInput={this.handleSearch} type="text" width={20}/>
            <button className="btn btn-outline-primary" id="button-addon2">Search</button>
          </div>
        </form>
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ và Tên</th>
              <th>Số điện thoại</th>
              <th>Emaili</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.renderTTSV(this.props.thongTinhSV)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  thongTinhSV: state.formSVReducer.arrSinhVien,
  tenSVSearch: state.formSVReducer.tenSVSearch
});

export default connect(mapStateToProps)(HienThiSinhVien);
