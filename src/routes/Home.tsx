import React, { useState } from 'react';
import { actionCreator } from '../store';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

const Home: React.FC = ({ addTodo }) => {
  const [text, setText] = useState<string>('');
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <>
      <h1>React TODO</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Todo.."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="ADD" />
      </form>
      <ul>
        <Todo />
      </ul>
    </>
  );
};

const mapDispachToProps = dispatch => {
  return {
    addTodo: (text: string) => dispatch(actionCreator.addTodo(text))
  };
};

export default connect(
  undefined,
  mapDispachToProps
)(Home);
