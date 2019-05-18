import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      Name:
        { props.task.name }
        <br></br>
        Winter Bank's Customers:
        { props.task.balance }
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Killed
      </button>
       
};

export default TaskItem;