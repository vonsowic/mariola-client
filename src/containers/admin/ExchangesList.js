import React from 'react'
import { connect } from 'react-redux';
import ExchangesList from "../../components/ExchangesList";
import {callGetExchanges} from "../../actions/exchanges";

class Container extends React.Component {
    componentDidMount(){
        this.props.dispatch(callGetExchanges(this.props.faculty))
    }

    render() {
        return <ExchangesList exchanges={this.props.exchanges}/>
    }
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
        exchanges: state.exchanges
    }
}


export default connect(mapStateToProps)(Container)