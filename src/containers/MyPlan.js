import React from "react";
import {connect} from "react-redux";
import {callGetMyCourses} from "../actions/courses";
import BaseCalendarContainer from "./BaseCalendarContainer";


class MyPlan extends React.Component {
    render() {
        return (
            <BaseCalendarContainer callGet={() => this.props.dispatch(callGetMyCourses(this.props.start, this.props.end))}/>
        )
    }
}

function mapStateToProps(state){
    return {
        start: state.calendar.start,
        end: state.calendar.end,
    }
}

export default connect(mapStateToProps)(MyPlan)