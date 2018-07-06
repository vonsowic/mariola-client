import React from 'react'
import {connect} from 'react-redux'
import Option from "../components/Option";
import {callGetFaculty} from "../actions/faculties";
import {
    callPatchSetExchangesEnabled,
    callPatchSetTransferWithoutExchangeEnabled} from "../actions/admin";


class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetFaculty(this.props.faculty.id))
    }

    render() {
        return (
            <div>
                <Option
                    title="Wymiany"
                    desciption="Gdy wyłączone, wymiany są zablokowane."
                    onClick={newState => this.props.dispatch(callPatchSetExchangesEnabled(this.props.faculty.id, newState))}
                    active={this.props.faculty.exchangesEnabled}
                />

                <Option
                    title="Tryb bez zamiany"
                    desciption={`Gdy włączony, wymiany będą następować w miarę występowania wolnych miejsc.
                    Po włączeniu natychmiastowo studenci, którzy utworzyli już intecje wymian będą, w miarę możliwości, przenoszenie z uwzględnieniem pierwszeństwa typu "kto był pierwszy, ten lepszy".
                    Tip: użyj, gdy masz pewność, że wszyscy członkowie Twojego kierunku korzystają z tej aplikacji.`}
                    onClick={newState => this.props.dispatch(callPatchSetTransferWithoutExchangeEnabled(this.props.faculty.id, newState))}
                    active={this.props.faculty.transferWithoutExchangeEnabled }
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty
    }
}

export default connect(mapStateToProps)(Container)