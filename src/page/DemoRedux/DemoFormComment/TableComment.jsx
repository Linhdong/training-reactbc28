import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
  render() {
    let { arrComment } = this.props;
    return (
      <div>
        <div className="img mt-2">
          <img src="https://i.pravatar.cc?u=30" alt="..." height={200} />
        </div>
        {arrComment.map((comment, index) => {
          return (
            <div className="row align-items-center mt-2" key={index}>
              <div className="col-2">
                <img
                  src={`https://i.pravatar.cc?u=${comment.name}`}
                  alt="..."
                  width={50}
                />
              </div>
              <div
                className="col-8 bg-secondary text-white rounded"
                style={{ background: "rgba(0,0,0,0.1)", padding: 15 }}
              >
                <h3>{comment.name}</h3>
                <p>{comment.content}</p>
                <div style={{ textAlign: "right" }}>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      const action = {
                        type: "DELETE_CONTENT",
                        payload: index,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      const action = {
                        type: "EDIT_CONTENT",
                        payload: index,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                   Edit 
                  </button>
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => {
                      const action = {
                        type: "UPDATE_CONTENT",
                      };
                      this.props.dispatch(action);
                    }}
                  >
                   Update 
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducer.arrComment,
});

export default connect(mapStateToProps)(TableComment);
