import dishes from '../data/menu.json'
import { Container, Col, Row, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => (
    <Container>
        {
            dishes.map(pasta => (
                <Row className="justify-content-center my-3" key={pasta.id}>
                    <Col xs={12} md={6} className="text-center">
                        <Link to={'/details/' + pasta.id}>
                            <img src={pasta.image} alt="some pasta pic" />
                        </Link>
                        <h4>{pasta.name}</h4>
                        <Badge variant="warning">{pasta.price}</Badge>
                        <Badge variant="danger">{pasta.label}</Badge>
                    </Col>
                </Row>
            ))
        }
    </Container>
)

export default Menu

// I want when I click on the pasta images to navigate to something like
// '/details/0' <-- will load a details page filled with carbonara details
// '/details/1' <-- will load the same details page but filled with amatriciana details