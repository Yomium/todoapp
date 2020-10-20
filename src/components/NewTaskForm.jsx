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
      <form className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group mx-3">
          <Field name="text" required component="input" type="text" />
        </div>
        <input type="submit" className="btn btn-primary btm-sm" value="Add" />
      </form>
    );
  }
}

const ConnectedTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default reduxForm({
  form: 'newTask'
})(ConnectedTaskForm);
