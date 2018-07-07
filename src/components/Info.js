import React from "react";
import {ButtonToolbar, Glyphicon, OverlayTrigger, Popover} from "react-bootstrap";

const info = props => (
    <Popover id="info-popover" title={props.title}>
        <p>{props.body}</p>
    </Popover>);


export default props => (
    <ButtonToolbar>
        <OverlayTrigger trigger={['hover','focus']} placement='right' overlay={info(props)}>
            <span>
                <Glyphicon glyph="info-sign" />
            </span>
        </OverlayTrigger>
    </ButtonToolbar>)

