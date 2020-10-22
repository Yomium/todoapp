import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  handleSubmit = (values) => {
    const { addTask, reset } = this.props;
    const task = { ...values, id: _.uniqueId(), state: 'active' };
    addTask({ task });
    reset();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row justify-content-center">
        <div className="col-8 col-md-5 col-lg-4 justify-content-center">
          <form className="form" onSubmit={handleSubmit(this.handleSubmit)}>
            <div className="form-group">
              <Field name="text" className="form-control" required component="input" type="text" />
            </div>
            <button type="submit" className="btn addTaskBtn">Add</button>
          </form>
      </div>
      </div>
    );
  }
}

const ConnectedTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default reduxForm({
  form: 'newTask'
})(ConnectedTaskForm);
