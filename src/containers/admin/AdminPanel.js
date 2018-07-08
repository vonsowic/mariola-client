import React from 'react'
import {connect} from 'react-redux'
import Option from "../../components/Option";
import {callGetFaculty} from "../../actions/faculties";
import {
    callPatchSetExchangesEnabled,
    callPatchSetTransferWithoutExchangeEnabled,
    hide, showCourses, showExchanges, showMembers
} from "../../actions/admin";
import CoursesList from "./CoursesList";
import ExchangesList from "./ExchangesList";
import {Button, Modal, Panel} from "react-bootstrap";
import MembersList from "./MembersList";


class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(callGetFaculty(this.props.faculty.id))
    }

    _panelTypeToView() {
        switch (this.props.panelType) {
            case 'EXCHANGES':
                return <ExchangesList/>
            case 'COURSES':
                return <CoursesList/>
            case 'MEMBERS':
                return <MembersList/>
            default:
                return null
        }
    }

    render() {
        const hideModal = () => this.props.dispatch(hide());
        return (
            <div>
                <h1>{this.props.faculty.name}</h1>
                <Option
                    title="Wymiany"
                    desciption="gdy wyłączone, wymiany są zablokowane."
                    onClick={newState => this.props.dispatch(callPatchSetExchangesEnabled(this.props.faculty.id, newState))}
                    active={this.props.faculty.exchangesEnabled}
                />

                <Option
                    title="Tryb bez zamiany"
                    desciption={`gdy włączony, wymiany będą następować w miarę występowania wolnych miejsc.
                    Po włączeniu natychmiastowo studenci, którzy utworzyli już intencje wymian będą (w miarę możliwości) przenoszeni z uwzględnieniem pierwszeństwa typu "kto był pierwszy, ten lepszy" :).
                    Tip: użyj, gdy masz pewność, że wszyscy członkowie Twojego kierunku korzystają z tej aplikacji (wtedy masz dokładne informacje o ilości uczestników w danej grupie).`}
                    onClick={newState => this.props.dispatch(callPatchSetTransferWithoutExchangeEnabled(this.props.faculty.id, newState))}
                    active={this.props.faculty.transferWithoutExchangeEnabled }
                />
                <Modal
                    show={this.props.modalVisible}
                    onHide={hideModal}
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Body>
                        { this._panelTypeToView() }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={hideModal}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>

                <ListPanel
                    title="Członkowie"
                    description={`wraz z informacją o grupie oraz możliwością banowania.`}
                    onClick={() => this.props.dispatch(showMembers())}/>

                <ListPanel
                    title="Przedmioty"
                    description={`wraz z grupami,
                    ilością członków w każdej grupie,
                    limitem miejsc na dany przedmiot
                    oraz możliwością modyfikacji limitu ilości miejsc na dany przedmiot.`}
                    onClick={() => this.props.dispatch(showCourses())}/>

                <ListPanel
                    title="Wymiany"
                    description={`kto z kim i za co.`}
                    onClick={() => this.props.dispatch(showExchanges())}/>
            </div>
        )
    }
}

function ListPanel(props) {
    return (
        <Panel>
            <Panel.Heading>{props.title}</Panel.Heading>
            <Panel.Body>
                <p>{props.description}</p>
                <Button bsStyle="primary" onClick={props.onClick}>Pokaż</Button>
            </Panel.Body>
        </Panel>
    )
}

function mapStateToProps(state){
    return {
        faculty: state.visibleFaculty,
        modalVisible: state.adminPanel.visible,
        panelType: state.adminPanel.panelType
    }
}

export default connect(mapStateToProps)(Container)