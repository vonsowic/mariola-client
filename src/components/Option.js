import React from 'react'
import {Panel} from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'


export default props => (
    <Panel>
        <Panel.Heading>{props.title}</Panel.Heading>
        <Panel.Body>
            <p>{props.desciption}</p>
            <Toggle
                onClick={props.onClick}
                on={<h2>ON</h2>}
                off={<h2>OFF</h2>}
                size="xs"
                onstyle="danger"
                offstyle="primary"
                active={props.active}
            />
        </Panel.Body>
    </Panel>
)