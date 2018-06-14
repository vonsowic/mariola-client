import React from 'react'
import {connect} from 'react-redux'
import FacultyView from '../components/FacultyView'

class Container extends React.Component {
    render() {
        return <FacultyView
            url={this.props.match.url}
            facultyId={this.props.match.params.facultyId}
            isAdmin={this.props.faculties[this.props.match.params.facultyId]}/>
    }
}

function mapStateToProps(state){
    return {
        faculties: state.user.faculties
    }
}

export default connect(mapStateToProps)(Container)