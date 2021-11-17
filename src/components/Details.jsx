import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dishes from '../data/menu.json'
import DishComments from './DishComments'
import { Col, Row, Container } from 'react-bootstrap'

const Details = () => {

    const [pasta, setPasta] = useState(undefined)

    const params = useParams()
    console.log(params)

    // we successfully retrieved the pastaId from the URL!
    // now it's time to use the value of pastaId for finding the right pasta in the menu
    // and show its details in the page! description, labels, reviews etc.

    useEffect(() => {
        // this is going to fetch the right pasta every time the page loads
        // behaving just like componentDidMount in a class component!
        let pastaId = params.pastaId
        // console.log(typeof pastaId)
        // console.log(typeof dishes[0].id)
        let pastaToShow = dishes.find(pasta => pasta.id.toString() === pastaId)
        // console.log(pastaToShow)
        setPasta(pastaToShow)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    {
                        pasta ? (
                            <>
                                <h1>DETAILS PAGE!</h1>
                                <h3>now I will load the details for the pasta called {pasta.name}</h3>
                                <img src={pasta.image} alt="detail pic" />
                                <p>{pasta.description}</p>
                                <DishComments selectedDish={pasta} />
                            </>

                        ) : (
                            <h2>404 - Pasta not found</h2>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Details