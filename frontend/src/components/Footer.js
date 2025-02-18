import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer style={{ backgroundColor: '#7B5642' }}>
        <Container>
            <Row>
                <Col className='text-center py-3 text-light'>
                    <p>Afriqana &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer