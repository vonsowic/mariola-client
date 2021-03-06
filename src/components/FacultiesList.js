import React from "react";
import { ListGroup, ListGroupItem, OverlayTrigger, Tooltip} from "react-bootstrap";


const tooltip = (
    <Tooltip id="tooltip">
        <strong>Kliknij, by dołączyć</strong>
    </Tooltip>
);

export default function (props) {
    return (
        <div>
            <h1>Dołącz do kierunku <small>(poniższe kierunki są z poprzedniego semestru i mają jedynie pokazać jak w nadchodzącym aplikacja mogłaby działać)</small></h1>
            {props.isLoggedIn
            ? <ListGroup>
                    {props.faculties.length > 0
                        ? props.faculties.map(f =>
                            <ListGroupItem key={f.id}>
                                <OverlayTrigger placement="right" overlay={tooltip}>
                                    <span onClick={() => props.onJoinClicked(f)}>{f.name}</span>
                                </OverlayTrigger>
                            </ListGroupItem>)
                        : <p>Brak możliwych kierunków do dołączenia</p>}
                </ListGroup>
            : <div>...ale najpierw się zaloguj</div>}

        </div>
    )
}