import React from 'react'
import {connect} from "react-redux";
import {setNextWeekDate, setPreviousWeekDate, setTodayDate} from "../actions/calendar";
import Calendar from "../components/Calendar";


class BaseCalendarContainer extends React.Component {

    _blockUpdate = false;

    componentDidMount() {
        this._callGet()
    }

    _callGet() {
        this.props.callGet();
    }

    componentDidUpdate() {
        if( !this._blockUpdate ) {
            this._callGet();
            this._blockUpdate=true
        } else {
            this._blockUpdate=false
        }
    }

    render() {
        return (
            <Calendar
                courses={this.props.courses}
                setOnToday={() => this.props.dispatch(setTodayDate())}
                setOnPrev={() => this.props.dispatch(setPreviousWeekDate())}
                setOnNext={() => this.props.dispatch(setNextWeekDate())}
                start={this.props.start}
                end={this.props.end}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses,
        start: state.calendar.start,
        end: state.calendar.end,
    }
}

export default connect(mapStateToProps)(BaseCalendarContainer)