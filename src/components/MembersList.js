import React from 'react'
import {Button, Col, Grid, Row} from "react-bootstrap";

export default function (props) {
    return (
        <Grid fluid>
            {props.members.map((m, i) => <MemberItem
                key={i}
                member={m}
                button={m['user_faculty'].isBanned
                    ? <Button bsStyle="success" onClick={() => props.onUnban(m)}>Odbanuj</Button>
                    : <Button bsStyle="warning" onClick={() => props.onBan(m)}>Banuj</Button> }
                addAdminButton={ !m['user_faculty'].isAdmin
                    ? <Button onClick={() => props.onAddAdmin(m)}><small>dodaj jako admina</small></Button>
                    : null}
                />)} </Grid>)
}

function MemberItem({member, button}) {
    return (
        <Row>
            <Col md={7}>{member.name} {member.lastName}{member['user_faculty'].isAdmin ? '(starosta)' : ''}</Col>
            <Col md={2}>
                {member['user_faculty'].group}
            </Col>
            <Col md={3}>
                {button}
            </Col>
        </Row>
    )
}

