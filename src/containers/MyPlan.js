import React from "react";
import {connect} from "react-redux";
import {callGetMyCourses} from "../actions/courses";
import BaseCalendarContainer from "./BaseCalendarContainer";


class MyPlan extends React.Component {
    render() {
        return (
            <BaseCalendarContainer
                callGet={weekDate => this.props
                    .dispatch(
                        callGetMyCourses(weekDate))}
            />
        )
    }
}

function mapStateToProps() {
    return {
    }
}

export default connect(mapStateToProps)(MyPlan)