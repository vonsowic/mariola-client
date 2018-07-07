import React, {Component} from 'react'
import {Button, Table} from 'react-bootstrap'

export default class IntentionsList extends Component {
    render(){
        return (
            <div>
                <Table striped condensed hover>
                    <thead>
                        <tr>
                            <th>Przedmiot</th>
                            <th>Utworzone przez</th>
                            <th>Z grupy</th>
                            <th>Na grupe</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.intentions.map(i =>
                            <IntentionListElement
                                userId={this.props.userId}
                                key={i.id}
                                content={i}
                                onDeleteIntention={this.props.onDeleteIntention}/>)}
                    </tbody>
                </Table>
            </div>)
    }
}

function IntentionListElement(props){
    const i = props.content;
    return <tr>
            <td>{i.what.name}</td>
            <td>{i.from.name} {i.from.lastName}</td>
            <td>{i.what.group}</td>
            <td>{i.for.group}</td>
            {i.from.id === props.userId
                ? <td><Button bsStyle="danger" onClick={() => props.onDeleteIntention(i.id)}>Usuń</Button></td>
                : <td/>}
        </tr>
}
