import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../redux/action/index";

export class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  // chỉ được gọi duy nhất 1 lần
  componentWillMount() {
    console.log("Render 1 lần");
    // truyền vào cái key nào thì cần nhận lại key đó và key được truyền đó là task ở dòng code 151
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
      console.log(this.state);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
      console.log(this.state);
    } else if (!nextProps.task) {
      console.log("sửa thành thêm");
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (event) => {
    // đầu tiên tạo ra biến target
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    // console.log(this.state);
    // đóng form
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: false,
    });
  };
  render() {
    var { id } = this.state;
    return (
      <div>
        <div className="panel panel-warning">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="panel-title">
              {id !== "" ? " Cập Nhật Công Việc" : " Thêm Công Việc"}
            </h4>
            <button
              className="fas fa-times-circle text-end"
              onClick={this.onCloseForm}
            ></button>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Họ Và Tên :</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Lưu
                </button>
                &nbsp;
                <button
                  onClick={this.onClear}
                  type="button"
                  className="btn btn-danger"
                >
                  Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const saveData = (state) => {
  return {
    task: state.tasks,
  };
};
const saveDataDispatch = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};
export default connect(saveData, saveDataDispatch)(TaskForm);
