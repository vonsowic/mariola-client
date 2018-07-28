import React from "react";
import {connect} from "react-redux";
import {DropdownButton, MenuItem} from "react-bootstrap";
import {callGetFacultyGroups} from "../actions/faculties";
import {showAll, showGroup, showNoLectures} from "../actions/filters";

class FilterList extends React.Component {
    state={
        filtersTitle: 'Wszystko'
    };

    componentDidMount() {
        this.props.dispatch(callGetFacultyGroups(this.props.faculty))
    }

    render() {
        const onClick = (newTitle, action) => () => {
            this.setState({filtersTitle: newTitle});
            this.props.dispatch(action())
        };

        return (
            <DropdownButton title={this.state.filtersTitle} id="course-filter-list">
                <MenuItem onClick={onClick('Wszystko', showAll)} eventKey="1">Wszystko</MenuItem>
                <MenuItem onClick={onClick('Ćw. i laby', showNoLectures)} eventKey="2">Ćw. i laby</MenuItem>
                {this.props.groups.map((g, i) => <MenuItem onClick={onClick(g, () => showGroup(g))} key={i+3}>{g}</MenuItem>)}
            </DropdownButton>
        )
    }
}

function mapStateToProps(state) {
    return {
        faculty: state.visibleFaculty,
        groups: state.joinToFacultyWindow.groups
    }
}

export default connect(mapStateToProps)(FilterList)