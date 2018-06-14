import React, {Component} from 'react'
import {callGetIntentions, callDeleteIntention} from '../actions/intentions'
import { connect } from 'react-redux';
import IntentionsView from '../components/IntentionsView'

class IntentionsList extends Component {
    componentDidMount(){
        this.props.dispatch(callGetIntentions(this.props.facultyId))
    }

    render() {
        return this.props.intentions.length > 0
            ? <IntentionsView
                userId={this.props.userId}
                intentions={this.props.intentions}
                onDeleteIntention={intentionId => this.props.dispatch(callDeleteIntention(intentionId))}/>
            : <div>
                <p>Brak możliwych wymian do wyświetlenia</p></div>
    }
}

function mapStateToProps(state){
    return {
        intentions: state.intentions,
        userId: state.user.id
    }
}


export default connect(mapStateToProps)(IntentionsList)