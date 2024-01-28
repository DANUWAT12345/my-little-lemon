import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';


import A_image from '../appdata/Mario and Adrian A.jpg';
import B_image from '../appdata/Mario and Adrian b.jpg';
import C_image from '../appdata/restaurant chef B.jpg';
import D_image from '../appdata/restaurant.jpg';
import Welcome_Image from "../appdata/restauranfood.jpg"

const caption = "We do food with love."

function Aboutpage() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='text-start m-5'>
                        <h5>Who we are ?</h5>
                        <div class="display-3">Little Lemon</div>
                        <p class="lead">Chicago</p>
                        <div class="lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>
                    </div>
                </Col>
                <Col className='text-center mt-4'>
                    <figure class="figure">
                        <img
                            src={Welcome_Image}
                            className="figure-img img-fluid rounded"
                            alt="image"
                            style={{ width: '25vw', minWidth: '200px' }}
                        />
                        <figcaption className="figure-caption">{caption}</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row className='row justify-content-center'>
                <Col className='m-1' xs={12} sm={12} md={12} lg={5} xl={5}><Image src={A_image} fluid /></Col>
                <Col className='m-1' xs={12} sm={12} md={12} lg={5} xl={5}><Image src={B_image} fluid /></Col>
            </Row>
            <Row className='row justify-content-center'>
                <Col className='m-1' xs={12} sm={12} md={12} lg={5} xl={5}><Image src={C_image} fluid /></Col>
                <Col className='m-1' xs={12} sm={12} md={12} lg={5} xl={5}><Image src={D_image} fluid /></Col>
            </Row>
            <div>
                <h3 className='text-start m-5'>Where to find Little Lemon.</h3>
                <div>
                    <Table responsive striped bordered hover className='mb-5'>
                        <thead>
                            <tr>
                                <th>
                                    <h6>Name</h6>
                                </th>
                                <th>
                                    <h6>Address</h6>
                                </th>
                                <th>
                                    <h6>Open Hour</h6>
                                </th>
                                <th>
                                    <h6>Contact</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Little Lemon (Thon Buri)</td>
                                <td>
                                    <pre>
                                        10600: Thon Buri, Bangkok<br />
                                        Latitude: 13.7167 · Longitude: 100.4833<br />
                                        Place Name: Thon Buri
                                    </pre>
                                </td>
                                <td>8 a.m. - 11 p.m.</td>
                                <td>+66 84 698 5633</td>
                            </tr>
                            <tr>
                                <td>Little Lemon (Chiang Mai)</td>
                                <td>
                                    <pre>
                                        1001, Tambon Nong Han,<br />
                                        Amphoe San Sai,<br />
                                        Chang Wat Chiang Mai 50290<br />
                                    </pre>
                                </td>
                                <td>8 a.m. - 11 p.m.</td>
                                <td>+66 84 777 5633</td>
                            </tr>
                            <tr>
                                <td>Little Lemon (Hat Yai)</td>
                                <td>
                                    <pre>
                                        Ban Phru,<br />
                                        Hat Yai District,<br />
                                        Songkhla 90250<br />
                                    </pre>
                                </td>
                                <td>8 a.m. - 11 p.m.</td>
                                <td>+66 84 698 5555</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    );
}

export default Aboutpage;