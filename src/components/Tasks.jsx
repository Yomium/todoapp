import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import cn from 'classnames';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds } } = state;
  const tasks = allIds.map((id) => byId[id]);
  const props = { tasks };
  return props;
}

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
}

class Tasks extends React.Component {
  handleRemoveTask = (id) => () => {
    const { removeTask } = this.props;
    removeTask({ id });
  }

  handleToggleTaskState = (id) => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState({ id });
  }

  renderTask = (task) => {
    const classes = cn({
      'task': true,
      [task.state]: true,
    });

    return (<div key={task.id} className={classes}>
      <div className="target">
        <input id={`input${task.id}`} type="checkbox" checked={task.state === 'finished'} onChange={this.handleToggleTaskState(task.id)} />
        <label htmlFor={`input${task.id}`}>
          {task.state === 'active' ? task.text: <s>{task.text}</s>}
        </label>
      </div>
      <button type="button" data-test="task-remove" className="close" onClick={this.handleRemoveTask(task.id)}>
        <span>&times;</span>
      </button>
    </div>);
  };

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6">
          {tasks.map(this.renderTask)}
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Tasks);
