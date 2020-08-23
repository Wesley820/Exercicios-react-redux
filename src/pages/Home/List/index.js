import React from 'react';
import { useSelector } from 'react-redux';

export default function List() {
  const tasks = useSelector((tasks) => tasks);

  return (
    <ul>{tasks && tasks.map((task) => <li key={task.id}>{task.text}</li>)}</ul>
  );
}
