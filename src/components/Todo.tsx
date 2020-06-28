import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';
import { TodoState } from '../interface';

const Todo: React.FC = ({ todos, deleteTodo }) => {
  const onDelete = e => {
    deleteTodo(Number(e.target.id));
  };
  return (
    <>
      {todos.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/${item.id}`}>{item.todo}</Link>
            <button type="button" id={item.id} onClick={onDelete}>
              X
            </button>
          </li>
        );
      })}
    </>
  );
};

const mapStateToProps: (
  state: TodoState[]
) => { todos: TodoState[] } = state => {
  return { todos: state };
};
const mapDispachToProps = dispatch => {
  return {
    deleteTodo: (id: number) => dispatch(actionCreator.deleteTodo(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Todo);
