import React from 'react'
import {connect} from "react-redux";
import FacultiesList from "../components/FacultiesList";
import {callGetNotMyFaculties, openCreateFaculty, openJoinToFaculty} from "../actions/faculties";

class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetNotMyFaculties())
    }

    render() {
        return <FacultiesList
            faculties={this.props.faculties}
            onJoinClicked={faculty => this.props.dispatch(openJoinToFaculty(faculty))}
            onCreateClicked={() => this.props.dispatch(openCreateFaculty())}
        />
    }
}

function mapStateToProps(state) {
    return {
        faculties: state.faculties
    }
}

export default connect(mapStateToProps)(Container)