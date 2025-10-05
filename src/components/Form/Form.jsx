import { Button } from '../Button/Button.jsx';
import styles from './Form.module.css';
import { useState } from 'react';

export function Form({ handleSubmitForm }) {
	const [inputValue, setInputValue] = useState('');
	const [popupIsShown, setPopupIsShown] = useState(false);

	return (
		<>
			<form
				className={styles.form}
				onSubmit={e => {
					e.preventDefault();
					if (inputValue === '') {
						setPopupIsShown(true);
					} else {
						handleSubmitForm(inputValue);
						setInputValue('');
						setPopupIsShown(false);
					}
				}}>
				<input
					value={inputValue}
					className={styles.input}
					onChange={e => setInputValue(e.target.value)}></input>

				<Button>Dodaj</Button>
			</form>

			{popupIsShown && (
				<p className={styles.error}>Musisz wpisać treść zadania!</p>
			)}
		</>
	);
}
