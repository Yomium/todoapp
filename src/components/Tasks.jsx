import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

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

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          {tasks.map(({ id, text, state }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">
                <input id={`input${id}`} type="checkbox" checked={state === 'finished'} onChange={this.handleToggleTaskState(id)} />
                <label htmlFor={`input${id}`}>
                  {state === 'active' ? text : <s>{text}</s>}
                </label>
              </span>
              <button type="button" data-test="task-remove" className="close" onClick={this.handleRemoveTask(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Tasks);
