import React from 'react'
import { connect } from 'react-redux';
import CoursesListPanel from "../../components/CoursesListPanel";
import {callGetCourses} from "../../actions/courses";
import {callPatchSetMaxStudentsNumber} from "../../actions/admin";

class Container extends React.Component {
    componentDidMount(){
        this.props.dispatch(callGetCourses(this.props.facultyId));
    }

    render() {
        return <CoursesListPanel
            courses={this.props.courses
                .filter(({group}) => group !== '0')
                .sort((o1, o2) => o1.name > o2.name)}
            onUpdate={course => this.props.dispatch(callPatchSetMaxStudentsNumber(course, this.props.facultyId))}
        />
    }
}

function mapStateToProps(state){
    return {
        facultyId: state.visibleFaculty.id,
        courses: Object.values(state.courses)
    }
}

export default connect(mapStateToProps)(Container)