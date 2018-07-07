import React, {Component} from 'react';
import FacultyInfo from "../components/FacultyInfo";
import {connect} from "react-redux";
import {callGetFaculty} from "../actions/faculties";


class Container extends Component {
    componentDidMount(){
        if (this.props.faculty.id) {
            this.props.dispatch(callGetFaculty(this.props.faculty.id))
        }
    }

    render() {
        return <FacultyInfo
            faculty={this.props.faculty}
        />
    }
}

function mapStateToProps(state) {
    return {
        faculty: state.visibleFaculty
    }
}

export default connect(mapStateToProps)(Container)