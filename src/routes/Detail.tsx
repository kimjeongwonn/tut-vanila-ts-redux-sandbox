import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { TodoState } from '../interface';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Detail: React.FC = ({ todos, deleteTodo }) => {
  const id = useParams().id;
  const currentTodo = todos.find(item => item.id === Number(id));
  const onDelete = e => {
    deleteTodo(currentTodo.id);
  };
  return (
    <>
      <h1>Detail</h1>
      <p>TODO IS {currentTodo?.todo}</p>
      <Link to="/">
        <button type="button" onClick={onDelete}>
          DELETE
        </button>
        <button type="button">
         BACK
        </button>
        </Link>
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
)(Detail);
