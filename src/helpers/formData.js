export const formFields = [
	{
		name: 'date',
		placeholder: 'RRRR-MM-DD',
		label: 'Date',
		pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
		errorMessage: 'Correct the entered date',
	},
	{
		name: 'time',
		placeholder: 'HH:MM',
		label: 'Time',
		pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
		errorMessage: 'Correct the entered time',
	},
	{
		name: 'firstName',
		label: 'First Name',
		placeholder: 'First Name',
		pattern: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+$/,
		errorMessage: 'Enter the first name',
	},
	{
		name: 'lastName',
		label: 'Last Name',
		placeholder: 'Last Name',
		pattern: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+$/,
		errorMessage: 'Enter the last name',
	},
	{
		name: 'email',
		placeholder: 'name@email.com',
		label: 'Email',
		pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
		errorMessage: 'Enter a valid email address',
	},
];
