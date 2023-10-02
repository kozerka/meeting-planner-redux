import React from 'react';
import { connect } from 'react-redux';
import validateFormData from '../helpers/validateFormData';
import { formFields } from '../helpers/formData';
import { sendMeetingAction } from '../actions/calendar';
import { sendMeeting } from '../providers/api';
import { v4 as uuidv4 } from 'uuid';
import Button from './ui/Button';
import Input from './ui/Input';

class CalendarForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		date: '',
		time: '',
		errors: [],
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const errors = validateFormData(this.state, formFields);
		this.setState({ errors });

		if (errors.length === 0) {
			this.saveMeeting();
			this.clearFormFields();
		}
	};

	renderFormFields() {
		return formFields.map((field) => (
			<Input
				key={field.name}
				label={field.label}
				name={field.name}
				placeholder={field.placeholder}
				value={this.state[field.name]}
				onChange={this.handleFieldChange}
			/>
		));
	}
	handleFieldChange = (e) => {
		if (this.isFieldNameCorrect(e.target.name)) {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}
	};

	saveMeeting() {
		const meetingData = this.getFieldsData();
		meetingData.id = uuidv4();
		sendMeeting(meetingData)
			.then((response) => {
				this.props.sendMeeting(meetingData);
				 if (this.props.onClose) {
						this.props.onClose();
					}
			})
			.catch((error) => {
				console.error('Problem with sending meeting:', error);
			});
	}

	clearFormFields() {
		const fieldsData = this.getFieldsData();
		for (const prop in fieldsData) {
			fieldsData[prop] = '';
		}

		this.setState(fieldsData);
	}

	getFieldsData() {
		const fieldsData = Object.assign({}, this.state);
		delete fieldsData['errors'];

		return fieldsData;
	}

	isFieldNameCorrect(name) {
		const fieldsData = this.getFieldsData();

		return typeof fieldsData[name] !== 'undefined';
	}

	renderErrors() {
		return this.state.errors.map((err, index) => <li key={index}>{err}</li>);
	}

	render() {
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<ul>{this.renderErrors()}</ul>
				{this.renderFormFields()}
				<div>
					<Button type="submit">Submit Meeting</Button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	meetings: state.meetings,
});

const mapDispatchToProps = (dispatch) => ({
	sendMeeting: (meetingData) => dispatch(sendMeetingAction(meetingData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm);