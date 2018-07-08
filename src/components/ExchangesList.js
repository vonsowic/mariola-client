import React from 'react'
import {Col, Grid, Row} from "react-bootstrap";

export default function (props) {
    return (
        <Grid fluid>
            {props.exchanges.map((e, i) => <ExchangeItem
                key={i}
                exchange={e}
                />)} </Grid>)
}

function ExchangeItem({exchange}) {
    return (
        <Row>
            <Col md={6}>{exchange.what.name}</Col>
            <Col md={3}>{exchange.from.name} {exchange.from.lastName} z {exchange.what.group} do {exchange.for.group}</Col>
            <Col md={3}>{exchange.to
                ? `${exchange.from.name} ${exchange.from.lastName} z ${exchange.what.group} do ${exchange.for.group}`
                : 'przejście bez wymiany'}</Col>
        </Row>
    )
}

