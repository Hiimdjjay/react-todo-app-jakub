import { Button } from '../Button/Button.jsx';
import styles from './ToDoItem.module.css';
import { useState } from 'react';

export function ToDoItem({
	name,
	done,
	onDeleteClickButton,
	onDoneClickButton,
	onConfirmClickButton,
}) {
	const [isInputShown, setIsInputShow] = useState(false);
	const [inputValue, setInputValue] = useState(name);
	return (
		<>
			{!isInputShown ? (
				<li className={styles.element}>
					<span className={`${styles.name} ${done ? styles.done : ''}`}>
						{name}
					</span>

					{!done && <Button onClick={onDoneClickButton}>Zrobione</Button>}
					<Button onClick={() => setIsInputShow(true)}>Edycja</Button>

					<Button onClick={onDeleteClickButton}>Usuń</Button>
				</li>
			) : (
				<form
					className={styles.editForm}
					onSubmit={e => {
						e.preventDefault();
						setIsInputShow(false);
						onConfirmClickButton(inputValue);
					}}>
					<input
						value={inputValue}
						className={styles.editInput}
						onChange={e => setInputValue(e.target.value)}></input>
					<Button>Potwierdź</Button>
				</form>
			)}
		</>
	);
}
