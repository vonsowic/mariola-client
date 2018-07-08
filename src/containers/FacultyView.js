import React from 'react'
import {connect} from 'react-redux'
import FacultyView from '../components/FacultyView'
import {setVisibleFacultyId} from "../actions/faculties";

class Container extends React.Component {
    componentWillMount() {
        this.props.dispatch(setVisibleFacultyId(this.props.match.params.facultyId))
    }

    render() {
        return <FacultyView
            url={this.props.match.url}
            facultyId={this.props.faculty.id}
            isAdmin={this.props.isAdmin}/>
    }
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
        isAdmin: state.user.faculties[state.visibleFaculty.id] ? state.user.faculties[state.visibleFaculty.id].isAdmin : false,
        faculties: state.user.faculties
    }
}

export default connect(mapStateToProps)(Container)