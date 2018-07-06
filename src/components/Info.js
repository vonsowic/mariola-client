import React from "react";
import {ButtonToolbar, Glyphicon, OverlayTrigger, Popover} from "react-bootstrap";

const info = ({faculty}) => (
    <Popover id='info-icon' title="Wymiany">
        <p>{!faculty.exchangesEnabled
            ? 'zablokowane'
            : faculty.transferWithoutExchangeEnabled
                ? 'możliwe w miarę istniejących miejsc'
                : 'możliwe tylko w przypadku znalezienia zastępstwa'
        }</p>
    </Popover>);


export default props => (
    <ButtonToolbar>
        <OverlayTrigger trigger={['hover','focus']} placement='right' overlay={info(props)}>
            <span>
                <Glyphicon glyph="info-sign" />
            </span>
        </OverlayTrigger>
    </ButtonToolbar>)

