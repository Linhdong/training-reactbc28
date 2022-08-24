import React, { Component } from "react";
import { connect } from "react-redux";

class FormComment extends Component {
  handleSubmit = (evenet) => {
    evenet.preventDefault();
    //Gửi dữ liệu lên redux
    const action = {
        type: 'HANDLE_SUBMIT',
        payload: this.props.commentInfo
    }
    this.props.dispatch(action);
  };

  handleChange = (event) => {
    let { id, value } = event.target;
    //Gửi dữ liệu lên redux
    const action = {
      type: "HANDLE_CHANGE",
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  render() {
    let { name, content } = this.props.commentInfo;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            id="name"
            className="form-control"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input
            id="content"
            className="form-control"
            value={content}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success">Comment</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  commentInfo: state.commentReducer.commentInfo,
});

export default connect(mapStateToProps)(FormComment);
