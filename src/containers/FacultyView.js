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
            facultyId={this.props.match.params.facultyId}
            isAdmin={this.props.faculties[this.props.match.params.facultyId].isAdmin}/>
    }
}

function mapStateToProps(state){
    return {
        faculties: state.user.faculties
    }
}

export default connect(mapStateToProps)(Container)