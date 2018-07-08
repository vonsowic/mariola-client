import React from "react";
import {OverlayTrigger, Popover} from "react-bootstrap";

export default function ({event}) {
    return (
        <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="top"
            overlay={infoAboutOther(event)}>
            <small>{event.name}</small>
        </OverlayTrigger>
    )
};

function infoAboutOther(event) {
    return (
        <Popover id={`popover-info-${event.id}`} title={`${event.name} ${event.group}`}>
            <span>
                <small>{event.other}</small>
            </span>
        </Popover>)
}