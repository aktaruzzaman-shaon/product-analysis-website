import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import review from './Review.css'

const Review = (props) => {
    const { name, rating, comment } = props;
    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col>
                        <Card className='mb-3 card-modify mx-auto'>
                            <Card.Body>
                                <Card.Title>
                                    <div>
                                        Name: {name}
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                    <div>
                                        Comment: {comment}
                                    </div>
                                    <div>
                                        Rating: {rating}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;