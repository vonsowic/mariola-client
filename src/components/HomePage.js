import React from 'react'
import Faculties from "../containers/Faculties";
import {Button, Carousel, Col, Grid, Jumbotron, Navbar, PageHeader, Row, Thumbnail} from "react-bootstrap";
import Image from "react-bootstrap/es/Image";
import happy from './xan-griffin-420173-unsplash.jpg'
import selectCourse from './3dc93586-b828-457a-b4ee-6f418417b888.png'
import Login from "./Login";
import {FacebookLoginButton} from "react-social-login-buttons";

export default function HomePage(props) {
    return (
        <div>
            <Carousel style={{
                width: 'auto',
                height:'auto'}}>

                <Carousel.Item>
                    <Image src={selectCourse} />
                    <Carousel.Caption>
                        <h3>Wybierz kierunek</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                        {props.isLoggedIn
                            ? <Button bsSize="large" bsStyle="success">Dołącz</Button>
                            : <Login render={renderProps => (
                                <FacebookLoginButton
                                    size="200xpx"
                                    callback={props.login}
                                    onClick={renderProps.onClick}>Ale najpierw zaloguj się z facebook</FacebookLoginButton>)}/>}

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image src={selectCourse} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Faculties/>
        </div>
    )
}
