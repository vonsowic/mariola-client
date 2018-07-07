import React from 'react'
import {connect} from "react-redux";
import {setDate} from "../actions/calendar";
import Calendar from "../components/Calendar";


class BaseCalendarContainer extends React.Component {

    _blockUpdate = true;

    componentDidMount() {
        this._callGet()
    }

    _callGet() {
        this.props.callGet(this.props.date);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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
                setDate={date => this.props.dispatch(setDate(date))}
                date={this.props.date}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        courses: Object.values(state.courses),
        date: state.calendar.date,
    }
}

export default connect(mapStateToProps)(BaseCalendarContainer)