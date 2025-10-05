import styles from './App.module.css';
import { Form } from './components/Form/Form.jsx';
import { ToDoItem } from './components/ToDoItem/ToDoItem.jsx';
import { useState } from 'react';
import { showNumber } from './utils/showNumber.js';

function App() {
	const [isFormShown, setIsFormShown] = useState(false);
	const [todos, setTodos] = useState([
		{ name: 'Wywieźć śmieci', done: false, id: 1 },
		{ name: 'Przyrządzić obiad', done: true, id: 2 },
	]);

	function onSubmitForm(newText) {
		setTodos(prevTodos => [
			...prevTodos,
			{ name: newText, done: false, id: Math.random() },
		]);
		setIsFormShown(false);
	}

	function deleteItem(id) {
		setTodos(prevTodos => prevTodos.filter(todoItem => todoItem.id !== id));
	}

	function doneItem(id) {
		setTodos(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id !== id) {
					return todo;
				}
				return {
					...todo,
					done: true,
				};
			})
		);
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{showNumber(todos.length)}</h2>
				</div>
				{!isFormShown && (
					<button
						className={styles.button}
						onClick={() => setIsFormShown(true)}>
						+
					</button>
				)}
			</header>
			{isFormShown && (
				<Form handleSubmitForm={newText => onSubmitForm(newText)} />
			)}
			<ul>
				{todos.map(({ name, done, id }) => (
					<ToDoItem
						key={id}
						name={name}
						done={done}
						onDeleteClickButton={() => deleteItem(id)}
						onDoneClickButton={() => doneItem(id)}
						onConfirmClickButton={editedValue =>
							setTodos(prevTodos =>
								prevTodos.map(todoToEdit => {
									if (todoToEdit.id !== id) {
										return todoToEdit;
									}
									return { ...todoToEdit, name: editedValue };
								})
							)
						}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
