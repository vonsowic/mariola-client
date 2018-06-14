import React from 'react'
import BigCalendar from 'react-big-calendar'
import {connect} from 'react-redux'
import moment from "moment/moment";


class FacultyPlan extends React.Component {
    componentDidMount(){
        // this.props.dispatch(callGetFacultyCourses())
    }

    render(){
        return (
            <BigCalendar
                defaultDate={new Date()}
                defaultView="work_week"
                views={["work_week", "week", "month"]}
                style={{height: "100vh"}}
                min={new Date(moment().hour(7).minute(0))}
                max={new Date(moment().hour(21).minute(0))}
                events={[]}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        detailedCourses: state.detailedCourses
    }
}

export default connect(mapStateToProps)(FacultyPlan)