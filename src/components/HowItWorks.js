import React from 'react'
import {Button, Carousel} from "react-bootstrap";
import Image from "react-bootstrap/es/Image";
import selectCourse from '../images/3dc93586-b828-457a-b4ee-6f418417b888.png'
import chooseFaculties from '../images/choose-faculties.png'
import joinedToFaculty from '../images/image3.png'

export default function HowItWorks(props) {
    return (
        <div>
            <Carousel style={{
                width: 'auto',
                height:'auto'}}>

                <Carousel.Item>
                    <Image src={chooseFaculties} />
                    <Carousel.Caption>
                        <h3>Wybierz swoje kierunki</h3>
                        <p>Prawdowpodobnie jesteś tylko na jednym,
                            ale jeśli jest inaczej,
                            Twój plan będzie zawierać zajęcia ze wszystkich wybranych</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={selectCourse} />
                    <Carousel.Caption>
                        <h3>Wybierz przemioty</h3>
                        <p>na które chcesz chodzić, a my przeniesiemy Cię w miarę możliwości</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={joinedToFaculty} />
                    <Carousel.Caption>
                        <h3>Idź cieszyć się życiem!</h3>
                        <p>i czekaj aż dokonamy przeniesienia</p>
                        <Button bsStyle="primary" onClick={() => props.history.push('/')}>Już wszystko wiem</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
