export function showNumber(numberOfTasks) {
	switch (true) {
		case numberOfTasks >= 5:
			return `${numberOfTasks} zadań`;
		case numberOfTasks >= 2 && numberOfTasks <= 4:
			return `${numberOfTasks} zadania`;
		case numberOfTasks === 1:
			return `1 zadanie`;
		default:
			return 'Brak zadań';
	}
}
