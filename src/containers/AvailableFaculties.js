import React from 'react'
import {connect} from "react-redux";
import FacultiesList from "../components/FacultiesList";
import {callGetNotMyFaculties, openJoinToFaculty} from "../actions/faculties";
import JoinToFaculty from "./JoinToFaculty";

class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetNotMyFaculties())
    }

    render() {
        return <div>
                <JoinToFaculty joinCallback={this.props.joinCallback}/>
                <FacultiesList
                    isLoggedIn={this.props.isLoggedIn}
                    faculties={this.props.faculties}
                    onJoinClicked={faculty => this.props.dispatch(openJoinToFaculty(faculty))}
                />
            </div>
    }
}

function mapStateToProps(state) {
    return {
        faculties: state.faculties,
        isLoggedIn: state.user.id
    }
}

export default connect(mapStateToProps)(Container)