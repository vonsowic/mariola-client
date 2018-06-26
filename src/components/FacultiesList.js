import React from "react";
import {Button, ListGroup, ListGroupItem, OverlayTrigger, Tooltip} from "react-bootstrap";


const tooltip = (
    <Tooltip id="tooltip">
        <strong>Kliknij, by dołączyć</strong>
    </Tooltip>
);

export default function (props) {
    return (
        <div>
            <ListGroup>
                {props.faculties.length > 0
                    ? props.faculties.map(f =>
                        <ListGroupItem>
                            <OverlayTrigger placement="right" overlay={tooltip}>
                                <span onClick={() => props.onJoinClicked(f)}>{f.name}</span>
                            </OverlayTrigger>
                        </ListGroupItem>)
                : <p>Jesteś już we wszystkich możliwych kierunkach &#x1F628;</p>}
            </ListGroup>
            <Button>Lub utwórz nowy</Button>
        </div>
    )
}