import React from 'react';
import { connect } from 'react-redux';
import validateFormData from '../helpers/validateFormData';
import { formFields } from '../helpers/formData';
import { sendMeetingAction } from '../actions/calendar';
import { sendMeeting } from '../providers/api';
import { v4 as uuidv4 } from 'uuid';

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
			<div key={field.name}>
				<label>
					{field.label}:
					<input
						name={field.name}
						onChange={this.handleFieldChange}
						value={this.state[field.name]}
						placeholder={field.placeholder || ''}
					/>
				</label>
			</div>
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
					<input type="submit" value="Save meeting" />
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