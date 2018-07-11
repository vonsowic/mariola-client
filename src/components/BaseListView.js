import React from 'react'
import {Button, ButtonGroup, Glyphicon, Table} from 'react-bootstrap'

export default function BaseListView(props) {
    return (
        <div>
            { props.onPrev && props.onNext
                ? <div>
                    <ButtonGroup className="pull-right">
                        <Button onClick={props.onPrev}><Glyphicon glyph="arrow-left"/></Button>
                        <Button onClick={props.onNext}><Glyphicon glyph="arrow-right"/></Button>
                    </ButtonGroup>
                </div>
                : null }


            <Table striped condensed hover>
                <thead>
                <tr>
                    { props.descriptions.map((d, i) => <th key={i}>{ d }</th> )}
                </tr>
                </thead>
                <tbody>
                { props.elements.map((e, key) => props.render(Object.assign({}, e, {key}))) }
                </tbody>
            </Table>
        </div>)

}


