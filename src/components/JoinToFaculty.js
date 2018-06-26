import React from "react";
import {Button, DropdownButton, MenuItem, Modal} from "react-bootstrap";

export default class extends React.Component {
    state = {
        selectedGroupText: null
    };

    render() {
        return (
            <Modal show={true} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dołącz do {this.props.faculty.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DropdownButton title={this.state.selectedGroupText || "Wybierz grupę"}>
                        { this.props.groups.map((g, index) =>
                            <MenuItem onClick={() => this.setState({selectedGroupText: g})} eventKey={index}>{g}</MenuItem>) }
                    </DropdownButton>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Zamknij</Button>
                    <Button bsStyle="primary" onClick={() => this.props.onAccepted(this.props.faculty, this.state.selectedGroupText)}>Dołącz!</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}