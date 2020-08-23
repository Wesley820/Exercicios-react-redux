import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!input) return;

    dispatch({
      type: 'ADD_TASK',
      payload: {
        text: input,
      },
    });

    setInput('');
  }

  function handleChangeInput(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        placeholder="adicionar tarefa"
        type="text"
        value={input}
        onChange={handleChangeInput}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
