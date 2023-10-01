const validateFormData = (data, fieldsData) => {
	const errors = [];

	fieldsData.forEach((field) => {
		if (field.pattern && !field.pattern.test(data[field.name])) {
			errors.push(field.errorMessage);
		}
	});

	return errors;
};

export default validateFormData;
