import React, { Component } from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

export class TaskControl extends Component {
  render() {
    return (
      <div className="row mb-4">
        {/* tìm kiếm */}
        <TaskSearch onSearch={this.props.onSearch} />
        {/* sắp xếp */}
        <TaskSort
          onSortItem={this.props.onSortItem}
          sortBy={this.props.sortBy}
          sortValue={this.props.sortValue}
        />
      </div>
    );
  }
}

export default TaskControl;
