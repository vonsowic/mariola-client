import React from "react";
import {connect} from "react-redux";
import {callGetDetailedCourses} from "../actions/courses";
import BaseCalendarContainer from "./BaseCalendarContainer";


class FacultyPlan extends React.Component {
    render() {
        return (
            <BaseCalendarContainer
                callGet={weekDate => this.props.dispatch(
                    callGetDetailedCourses(this.props.facultyId, weekDate)
                )}/>
        )
    }
}

function mapStateToProps(state){
    return {
        facultyId: state.visibleFaculty.id,
    }
}

export default connect(mapStateToProps)(FacultyPlan)