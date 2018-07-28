import React from 'react'
import { connect } from 'react-redux';
import {callGetExchanges} from "../../actions/exchanges";
import BaseListView from "../../components/BaseListView";

class Container extends React.Component {
    componentDidMount(){
        this.props.dispatch(callGetExchanges(this.props.faculty))
    }

    render() {
        return <BaseListView
            descriptions={['Przedmiot', 'Kto', 'Z kim']}
            render={exchange => <ExchangeItem exchange={exchange}/>}
            elements={this.props.exchanges}/>
    }
}


function ExchangeItem({exchange}) {
    return (
        <tr>
            <td>{exchange.what.name}</td>
            <td>{exchange.from.name} {exchange.from.lastName} z {exchange.what.group} do {exchange.for.group}</td>
            <td>{exchange.to
                ? `${exchange.from.name} ${exchange.from.lastName} z ${exchange.what.group} do ${exchange.for.group}`
                : 'przejście bez wymiany'}</td>
        </tr>
    )
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
        exchanges: state.exchanges
    }
}


export default connect(mapStateToProps)(Container)