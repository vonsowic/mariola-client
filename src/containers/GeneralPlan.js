import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {Modal, Button} from 'react-bootstrap'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from 'react-redux'
import {callGetCourses, callGetMyCoursesIds} from "../actions/courses";
import {callPostIntention} from "../actions/intentions";
import {select, deselect} from "../actions/calendar";
import Help from "./FacultyInfo";
import CalendarEvent from "../components/CalendarEvent";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class GeneralPlan extends Component {
    componentDidMount(){
        this.props.dispatch(callGetCourses(this.props.facultyId));
        this.props.dispatch(callGetMyCoursesIds())
    }

    render(){
        const closeModal = () => this.props.dispatch(deselect())
        return (
            <div>
                <Modal show={this.props.selectedCourseId != null} onEscapeKeyDown={closeModal} onHide={closeModal}>
                    <Modal.Header>
                        <Modal.Title>Na pewno chcesz chodzić na:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.selectedCourseToText()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={()=>{
                            this.props.dispatch(callPostIntention(this.props.selectedCourseId))
                            closeModal()
                        }}>Tak</Button>
                        <Button onClick={closeModal}>Nie</Button>
                    </Modal.Footer>
                </Modal>

                <Help/>

                <BigCalendar
                    toolbar={false}
                    onSelectEvent={course=>{
                        this.props.dispatch(select(course))
                    }}
                    defaultView="work_week"
                    views={["work_week"]}
                    eventPropGetter={event => ({
                            style: {
                                opacity: event.group === '0' ? 0.5 : 1.0,
                                backgroundColor: this.props.myCoursesIds.includes(event.id)
                                    ? "#ad4ca4"
                                    : "#3174ad",
                            }
                    })}
                    style={{
                        height: "100vh",
                    }}
                    components={{
                        event: CalendarEvent,
                        day: {
                            header: Test,
                            event: Test,
                        }
                    }}
                    formats={{
                        dayFormat: 'dddd'
                    }}
                    min={new Date(moment().hour(7).minute(0))}
                    max={new Date(moment().hour(21).minute(0))}
                    events={this.props.courses}
                />
            </div>)
    }

    selectedCourseToText(){
        if(!this.props.selectedCourseId){
            return '';
        }

        const selectedCourse = this.props.courses.find(course => course.id === this.props.selectedCourseId);
        return `${selectedCourse.name}, grupa ${selectedCourse.group}`
    }
}

function Test() {
    return <div>Hello</div>
}

function mapStateToProps(state) {
    return {
        facultyId: state.visibleFaculty.id,
        courses: Object.values(state.courses),
        selectedCourseId: state.calendar.selectedCourseId,
        myCoursesIds: state.myCoursesIds
    }
}

export default connect(mapStateToProps)(GeneralPlan)