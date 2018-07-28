import React from 'react'
import Faculties from "../containers/AvailableFaculties";
import {Button, Jumbotron} from "react-bootstrap";

export default function HomePage(props) {
    return (
        <div>
            <Jumbotron>
                <h1>Mariola<small>(beta)</small></h1>
                <p>To nieoficjala giełda wymian zajęć dla studentów AGH wydziału EAIIB</p>
                <Button bsStyle='success' onClick={() => props.history.push('/about')}>Dowiedz się więcej</Button>

            </Jumbotron>

            <hr/>
            <Faculties joinCallback={facultyId => props.history.push(`/${facultyId}/exchanges`)}/>

            {props.isLoggedIn
                ? <p>Jeśli nie ma go na powyższej liście, wyślij prośbę o utworzenie na <a href="mailto:mariola.dev@gmail.com">mariola.dev@gmail.com</a></p>
                : null}
        </div>
    )
}
