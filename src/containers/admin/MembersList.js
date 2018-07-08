import React from 'react'
import { connect } from 'react-redux';
import {callGetFacultyMembers, callPatchAddAdmin, setBanToStudent} from "../../actions/admin";
import MembersList from "../../components/MembersList";

class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetFacultyMembers(this.props.faculty))
    }

    render() {
        return <MembersList
            members={this.props.members.sort((m1, m2) => m1.lastName > m2.lastName )}
            onAddAdmin={student => this.props.dispatch(callPatchAddAdmin(this.props.faculty, student))}
            onBan={student => this.props.dispatch(setBanToStudent(this.props.faculty, student, true))}
            onUnban={student => this.props.dispatch(setBanToStudent(this.props.faculty, student, false))}/>
    }
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
        members: Object.values(state.adminPanelMembers)
    }
}


export default connect(mapStateToProps)(Container)