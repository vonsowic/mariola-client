import React, {Component} from 'react'
import {callGetIntentions, callDeleteIntention} from '../actions/intentions'
import { connect } from 'react-redux';
import BaseListView from '../components/BaseListView'
import {Button, Well} from "react-bootstrap";

class IntentionsList extends Component {
    componentDidMount(){
        this.props.dispatch(callGetIntentions(this.props.facultyId))
    }

    render() {
        return this.props.intentions.length > 0
            ? <div>
                <h2>Inni studenci chcą chodzić na:</h2>
                <BaseListView
                    descriptions={['Przedmiot', 'Student', 'Z grupy', 'Na grupe']}
                    elements={this.props.intentions}
                    render={props => <IntentionListElement
                        key={props.key}
                        content={props}
                        userId={this.props.userId}
                        onDeleteIntention={() => this.props.dispatch(callDeleteIntention(props.id))}/>}
                />
            </div>
            : <div>
                <Well bsSize="small">Brak możliwych wymian do wyświetlenia</Well>
            </div>
    }
}

function IntentionListElement(props){
    const i = props.content;
    return <tr key={props.key}>
        <td>{i.what.name}</td>
        <td>{i.from.name} {i.from.lastName}</td>
        <td>{i.what.group}</td>
        <td>{i.for.group}</td>
        {i.from.id === props.userId
            ? <td><Button bsStyle="danger" onClick={props.onDeleteIntention}>Usuń</Button></td>
            : <td/>}
    </tr>
}

function mapStateToProps(state){
    return {
        facultyId: state.visibleFaculty.id,
        intentions: state.intentions,
        userId: state.user.id
    }
}


export default connect(mapStateToProps)(IntentionsList)