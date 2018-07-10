import React from 'react'
import Faculties from "../containers/Faculties";
import {Button, Jumbotron} from "react-bootstrap";

export default function HomePage(props) {
    return (
        <div>
            <Jumbotron>
                <h1>Mariola</h1>
                <p>To nieoficjala giełda wymian zajęć dla studentów AGH wydziału EAIIB</p>
                <Button bsStyle='success' onClick={() => props.history.push('/about')}>Dowiedz się więcej</Button>

            </Jumbotron>

            <hr/>
            <Faculties joinCallback={facultyId => props.history.push(`/${facultyId}/exchanges`)}/>
        </div>
    )
}
