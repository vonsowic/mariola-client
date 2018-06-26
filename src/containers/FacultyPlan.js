import React from "react";
import {connect} from "react-redux";
import {callGetDetailedCourses} from "../actions/courses";
import BaseCalendarContainer from "./BaseCalendarContainer";


class FacultyPlan extends React.Component {
    render() {
        return (
            <BaseCalendarContainer
                callGet={() => this.props.dispatch(
                    callGetDetailedCourses(this.props.facultyId, this.props.start, this.props.end)
                )}/>
        )
    }
}

function mapStateToProps(state){
    return {
        start: state.calendar.start,
        end: state.calendar.end,
    }
}

export default connect(mapStateToProps)(FacultyPlan)