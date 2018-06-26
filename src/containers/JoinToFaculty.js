import React from 'react'
import {connect} from "react-redux";
import JoinToFaculty from "../components/JoinToFaculty";
import {callGetFacultyGroups, callJoinToFaculty, closeJoinToFaculty} from '../actions/faculties'

class Container extends React.Component {
   render() {
        if( this.props.isOpen) {
            this.getGroupsIfNeccessary();

            return <JoinToFaculty
                isOpen={this.props.isOpen}
                faculty={this.props.faculty}
                onClose={() => this.props.dispatch(closeJoinToFaculty())}
                onAccepted={(faculty, group) => this.props.dispatch(callJoinToFaculty(faculty, group))}
                groups={this.props.groups}
            />
        } else return null
    }

    getGroupsIfNeccessary() {
       if ( this.props.groups.length === 0) {
           this.props.dispatch(callGetFacultyGroups(this.props.faculty));
       }
    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.joinToFacultyWindow.isOpen,
        faculty: state.joinToFacultyWindow.faculty,
        groups: state.joinToFacultyWindow.groups
    }
}

export default connect(mapStateToProps)(Container)