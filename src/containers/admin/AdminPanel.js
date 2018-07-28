import React from 'react'
import {connect} from 'react-redux'
import Option from "../../components/Option";
import {callGetFaculty} from "../../actions/faculties";
import {
    callPatchSetExchangesEnabled,
    callPatchSetTransferWithoutExchangeEnabled,
} from "../../actions/admin";
import CoursesList from "./CoursesList";
import ExchangesList from "./ExchangesList";
import {Tabs, Tab} from "react-bootstrap";
import MembersList from "./MembersList";


class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetFaculty(this.props.faculty.id))
    }

    render() {
        return (
            <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Główna">
                    <h1>{this.props.faculty.name}</h1>
                    <Option
                        title="Wymiany"
                        desciption="gdy wyłączone, wymiany są zablokowane."
                        onClick={newState => this.props.dispatch(callPatchSetExchangesEnabled(this.props.faculty.id, newState))}
                        active={this.props.faculty.exchangesEnabled}
                    />

                    <Option
                        title="Tryb bez zamiany"
                        desciption={`gdy włączony, wymiany będą następować w miarę występowania wolnych miejsc(limity w zakładce Przedmioty).
                            Po włączeniu natychmiastowo studenci, którzy utworzyli już intencje wymian będą (w miarę możliwości) przenoszeni z uwzględnieniem pierwszeństwa typu "kto był pierwszy, ten lepszy" :).
                            Tip: użyj, gdy masz pewność, że wszyscy członkowie Twojego kierunku korzystają z tej aplikacji (wtedy masz dokładne informacje o ilości uczestników w danej grupie).`}
                        onClick={newState => this.props.dispatch(callPatchSetTransferWithoutExchangeEnabled(this.props.faculty.id, newState))}
                        active={this.props.faculty.transferWithoutExchangeEnabled }
                    />
                </Tab>

                <Tab eventKey={2} title="Historia wymian">
                    <ExchangesList/>
                </Tab>

                <Tab eventKey={3} title="Członkowie">
                    <small>wraz z informacją o grupie oraz możliwością banowania</small>
                    <MembersList/>
                </Tab>

                <Tab eventKey={4} title="Przedmioty">
                    <small>wraz z grupami,
                        ilością członków w każdej grupie,
                        limitem miejsc na dany przedmiot
                        oraz możliwością modyfikacji limitu ilości miejsc na dany przedmiot</small>
                    <CoursesList/>
                </Tab>
            </Tabs>
        )
    }
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
    }
}

export default connect(mapStateToProps)(Container)