import React, { Component } from "react";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./redux/action/index";
export class App extends Component {
  onToggleForm = () => {
    this.props.onToggleForm();
  };
  
  render() {
    const { isDisplayForm } = this.props;
    const elForm = isDisplayForm === true ? <TaskForm /> : "";
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {/* form */}
            {elForm}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary text-center mb-3"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span> Thêm Công Việc
            </button>
            <button
              type="button"
              className="btn btn-danger text-center ml-1 mb-3 "
            >
              Generate Data
            </button>
            {/* Tìm Kiếm */}
            <TaskControl />
            {/* sắp xếp */}
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
