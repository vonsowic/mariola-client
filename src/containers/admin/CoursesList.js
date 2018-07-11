import React from 'react'
import { connect } from 'react-redux';
import {callGetCourses} from "../../actions/courses";
import {callPatchSetMaxStudentsNumber} from "../../actions/admin";
import {Button, ButtonGroup, Glyphicon, OverlayTrigger, Tooltip} from "react-bootstrap";
import BaseListView from "../../components/BaseListView";

class Container extends React.Component {
    componentDidMount(){
        this.props.dispatch(callGetCourses(this.props.facultyId));
    }

    render() {
        return <BaseListView
            descriptions={['Nazwa przedmiotu', 'Ilość uczestników / maksymalna ilość uczestników']}
            elements={this.props.courses
                .filter(({group}) => group !== '0')
                .sort((o1, o2) => o1.name > o2.name)}
            render={ props => <CourseItem
                onIncrease={() => this.props.dispatch(
                    callPatchSetMaxStudentsNumber(Object.assign({}, props, {
                        maxStudentsNumber: props.maxStudentsNumber + 1
                    }), this.props.facultyId))}
                onDecrease={() => this.props.dispatch(
                    callPatchSetMaxStudentsNumber(Object.assign({}, props, {
                        maxStudentsNumber: props.maxStudentsNumber - 1
                    }), this.props.facultyId))}
                course={props}/> }
        />
    }
}

function mapStateToProps(state){
    return {
        facultyId: state.visibleFaculty.id,
        courses: Object.values(state.courses)
    }
}

function CourseItem({course, onIncrease, onDecrease}) {
    const numberOfStudentsInfo = <Tooltip id="number-of-students-info">Ilość uczestników / maksymalna ilość uczestników</Tooltip>
    return (
        <tr>
            <td>{course.name} {course.group}</td>
            <td>
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={numberOfStudentsInfo}>
                    <span>{course.studentsCount} / {course.maxStudentsNumber}</span>
                </OverlayTrigger>
            </td>
            <td>
                <div>
                    <ButtonGroup>
                        <Button bsSize="small" onClick={onIncrease}><Glyphicon glyph="plus"/></Button>
                        <Button bsSize="small" onClick={onDecrease}><Glyphicon glyph="minus"/></Button>
                    </ButtonGroup>
                </div>
            </td>
        </tr>
    )
}

export default connect(mapStateToProps)(Container)