import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../redux/action/index";

export class TaskItem extends Component {
  changeStatus() {
    return (
      <span
        className={this.props.task.status ? "btn btn-warning" : "btn btn-success"}
        onClick={this.onUpdateStatus}
      >
        {this.props.task.status === true ? "Kích Hoạt" : "Ẩn"}
      </span>
    );
  }
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm()
  };
  onUpdateTask = () => {
    this.props.onUpdateTask(this.props.task.id);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">{this.changeStatus()}</td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdateTask}
          >
            <span className="fa fa-pencil "></span> Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash "></span> Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // isDisplayForm: state.isDisplayForm,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDelete : (id) => {
      dispatch(actions.deleteTask(id))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
