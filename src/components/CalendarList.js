import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	updateMeetingAction,
	deleteMeetingAction,
	loadMeetingsAction,
} from '../actions/calendar';
import Pagination from './Pagination';
import { PaginationWrapper } from './Pagination.styled';
import { updateMeetingFromApi, deleteMeetingFromApi } from '../providers/api';
import { StyledTable, Container } from './Table.styled';
import TableHeader from './TableHeader';
import DeletingRow from './DeletingRow';
import EditingRow from './EditingRow';
import DefaultRow from './DefaultRow';
import sortData from '../helpers/sortData';
import NoMeetingsMessage from './NoMeetingsMessage';

class CalendarList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortBy: 'date',
			sortDirection: 'asc',
			editingId: null,
			editedMeeting: null,
			deletingId: null,
			currentPage: 1,
			meetingsPerPage: 10,
			totalPages: Math.ceil(this.props.meetings.length / 10),
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.meetings !== this.props.meetings) {
			this.setState({
				totalPages: Math.ceil(this.props.meetings.length / 10),
			});
		}
	}

	handleSort = (column) => {
		const direction =
			this.state.sortBy === column && this.state.sortDirection === 'asc'
				? 'desc'
				: 'asc';
		this.setState({
			sortBy: column,
			sortDirection: direction,
		});
	};

	handleInputChange = (field, value) => {
		this.setState((prevState) => ({
			editedMeeting: {
				...prevState.editedMeeting,
				[field]: value,
			},
		}));
	};

	handleEdit = (id) => {
		const meetingToEdit = this.props.meetings.find(
			(meeting) => meeting.id === id
		);
		this.setState({
			editingId: id,
			editedMeeting: { ...meetingToEdit },
		});
	};

	saveChanges = (id) => {
		updateMeetingFromApi(id, this.state.editedMeeting)
			.then((updatedMeetings) => {
				this.props.loadAllMeetings(updatedMeetings);
				this.setState({ editingId: null });
			})
			.catch((error) => {
				console.error('Error updating meeting:', error);
			});
	};

	confirmDelete = (id) => {
		deleteMeetingFromApi(id)
			.then(() => {
				this.props.deleteMeeting(id);
				this.setState({ deletingId: null });
			})
			.catch((error) => {
				console.error('Error deleting meeting:', error);
			});
	};

	renderArrow = (column) => {
		if (this.state.sortBy !== column) return null;
		return this.state.sortDirection === 'asc' ? '↓' : '↑';
	};

	changePage = (page) => {
		this.setState({ currentPage: page });
	};

	renderMeetingRow = (itemData, rowNumber) => {
		if (this.state.editingId === itemData.id) {
			return (
				<EditingRow
					key={itemData.id}
					editedMeeting={this.state.editedMeeting}
					itemData={itemData}
					rowNumber={rowNumber}
					onInputChange={this.handleInputChange}
					saveChanges={this.saveChanges}
					cancelEdit={() => this.setState({ editingId: null })}
				/>
			);
		} else if (this.state.deletingId === itemData.id) {
			return (
				<DeletingRow
					key={itemData.id}
					itemData={itemData}
					rowNumber={rowNumber}
					confirmDelete={this.confirmDelete}
					cancelDelete={() => this.setState({ deletingId: null })}
				/>
			);
		} else {
			return (
				<DefaultRow
					key={itemData.id}
					itemData={itemData}
					rowNumber={rowNumber}
					handleEdit={this.handleEdit}
					handleDelete={() => this.setState({ deletingId: itemData.id })}
				/>
			);
		}
	};

	render() {
		const sortedMeetings = sortData(
			this.props.meetings,
			this.state.sortBy,
			this.state.sortDirection
		);

		const startIndex =
			(this.state.currentPage - 1) * this.state.meetingsPerPage;
		const endIndex = startIndex + this.state.meetingsPerPage;
		const meetingsToShow = sortedMeetings.slice(startIndex, endIndex);
		if (this.props.meetings.length === 0) {
			return <NoMeetingsMessage />;
		}

		return (
			<div>
				<Container>
					<StyledTable>
						<TableHeader
							onSort={this.handleSort}
							sortBy={this.state.sortBy}
							sortDirection={this.state.sortDirection}
							renderArrow={this.renderArrow}
							handleSort={this.handleSort}
						/>
						<tbody>
							{meetingsToShow.map((item, index) =>
								this.renderMeetingRow(item, startIndex + index + 1)
							)}
						</tbody>
					</StyledTable>
				</Container>
				{this.state.totalPages > 1 && (
					<PaginationWrapper>
						<Pagination
							currentPage={this.state.currentPage}
							totalPages={this.state.totalPages}
							onPageChange={this.changePage}
							totalMeetings={this.props.meetings.length}
							meetingsPerPage={this.state.meetingsPerPage}
						/>
					</PaginationWrapper>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	meetings: state.meetings,
});

const mapDispatchToProps = (dispatch) => ({
	updateMeeting: (id, meeting) => dispatch(updateMeetingAction(id, meeting)),
	deleteMeeting: (id) => dispatch(deleteMeetingAction(id)),
	loadAllMeetings: (meetings) => dispatch(loadMeetingsAction(meetings)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarList);
