import React from 'react'
import Faculties from "../containers/Faculties";
import {Jumbotron} from "react-bootstrap";
import Image from "react-bootstrap/es/Image";

export default function HomePage(){
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Mariola to aplikacja pozwalajaca na wymiany grup w poszczegolnych przedmiotach.
                </p>
                <Image src="" responsive rounded />
            </Jumbotron>
            <Faculties/>
        </div>
    )
}