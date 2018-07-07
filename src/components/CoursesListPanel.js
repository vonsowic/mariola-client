import React from 'react'
import {Button, ButtonGroup, Col, Glyphicon, Grid, OverlayTrigger, Panel, Row, Tooltip} from "react-bootstrap";

export default function (props) {
    return (
        <Grid fluid>
            {props.courses.map((c, i) => <CourseItem
                key={i}
                course={c}
                onIncrease={() => props.onUpdate(Object.assign({}, c, { maxStudentsNumber: c.maxStudentsNumber + 1}))}
                onDecrease={() => props.onUpdate(Object.assign({}, c, { maxStudentsNumber: c.maxStudentsNumber - 1}))}/>)} </Grid>)
}

function CourseItem({course, onIncrease, onDecrease}) {
    const numberOfStudentsInfo = <Tooltip id="number-of-students-info">Ilość uczestników / maksymalna ilość uczestników</Tooltip>
    return (
        <Row>
            <Col md={6}>{course.name} {course.group}</Col>
            <Col md={3}>
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={numberOfStudentsInfo}>
                    <span>{course.studentsCount} / {course.maxStudentsNumber}</span>
                </OverlayTrigger>
            </Col>
            <Col md={3}>
                <div>
                    <ButtonGroup>
                        <Button bsSize="small" onClick={onIncrease}><Glyphicon glyph="plus"/></Button>
                        <Button bsSize="small" onClick={onDecrease}><Glyphicon glyph="minus"/></Button>
                    </ButtonGroup>
                </div>
            </Col>
        </Row>
    )
}

