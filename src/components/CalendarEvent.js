import React from "react";
import {OverlayTrigger, Popover} from "react-bootstrap";
import moment from "moment";

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
        <Popover id={`popover-info-${event.id}`} title={getFormattedTitle(event)}>
            <span>
                <small>{event.other}</small>
            </span>
        </Popover>)
}

function getFormattedTitle(event) {
    return `${event.name} 
        ${event.group} 
        ${moment(event.start).format('HH:mm')}
        -
        ${moment(event.end).format('HH:mm')}`
}
