import React from 'react'
import { connect } from 'react-redux';
import {callGetFacultyMembers, setBanToStudent} from "../../actions/admin";
import BaseListView from "../../components/BaseListView";
import Button from "react-bootstrap/es/Button";

class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetFacultyMembers(this.props.faculty))
    }

    render() {
        const createBanAction = (student, ban) => () => this.props.dispatch(setBanToStudent(this.props.faculty, student, ban));
        return <BaseListView
            descriptions={['Student', 'Grupa']}
            elements={this.props.members.sort((m1, m2) => m1.lastName > m2.lastName )}
            render={member => <MemberItem
                member={member}
                button={member['user_faculty'].isBanned
                ? <Button onClick={createBanAction(member, false)} bsStyle="primary">Odbanuj</Button>
                : <Button onClick={createBanAction(member, true)} bsStyle="warning">Banuj</Button>} />} />
    }
}

function MemberItem({member, button}) {
    return (
        <tr>
            <td>{member.name} {member.lastName}{member['user_faculty'].isAdmin ? '(starosta)' : ''}</td>
            <td>
                {member['user_faculty'].group}
            </td>
            <td>
                {button}
            </td>
        </tr>
    )
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
        members: Object.values(state.adminPanelMembers)
    }
}


export default connect(mapStateToProps)(Container)