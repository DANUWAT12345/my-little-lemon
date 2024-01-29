import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Welcome_Image from "../appdata/restauranfood.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Aboutpage from './Aboutpage';

import spaghetti_image from '../appdata/Spaghetti Bolognese.jpg'
import tiramisu_image from '../appdata/Tiramisu.jpg'
import crostini_image from '../appdata/Crostini.webp'
import danuwat_image from '../appdata/danuwat.JPG'
import nine_image from '../appdata/Nine.JPG'

const first_welcome = "Welcome to"
const branding_word = "Little Lemon (リトル・レモン)"
const branding_location = "Chicago"
const welcome_word = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam, justo nec vulputate convallis, velit quam vulputate turpis, sit amet malesuada orci lacus nec odio. Suspendisse potenti. Integer interdum ligula vitae sapien euismod, ut suscipit urna aliquet. Vivamus eget tellus ut justo efficitur feugiat id ac nisl. Curabitur vitae lacinia quam. Suspendisse potenti. Sed facilisis risus eu nisi tincidunt, eget eleifend odio interdum. Sed vitae fermentum libero. Nullam id mauris nec dui fermentum tincidunt. Sed gravida justo non nulla congue, ac egestas purus interdum."
const caption = "We do food with love."
const botton_1 = "Reserver A Table"
const botton_2 = "Order Online"
const deal_wording = "Special Deal"
const menu_bt_wording = "Menu"
const end_of_sale_wording = "This special deal end in Jan-12-2024"

const cardData = [
    {
        id: 1,
        title: "Tiramisu (1.99$)",
        text: "a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar and mascarpone, flavoured with cocoa.",
        imageSrc: tiramisu_image
    },
    {
        id: 2,
        title: "Spaghetti (2.99$)",
        text: "Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce.",
        imageSrc: spaghetti_image
    },
    {
        id: 3,
        title: "Crostini (1.59$)",
        text: "Who doesn't love golden, crisp crostini? Crostini is crusty bread brushed with olive oil, toasted in the oven or in the grill to perfection.",
        imageSrc: crostini_image
    },
];

const cardComponents = cardData.map(card => (
    <Col xs={12} sm={12} md={6} lg={4} xl={4} className="d-flex justify-content-center">
        <Card key={card.id} className="m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.imageSrc} style={{}} />
            <Card.Body className='text-start'>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
));

const testimoniesData = [
    {
        imageSrc: danuwat_image,
        title: "Danuwat Maoleethong",
        description: "it was an absolute delight! From the moment I walked in, I was greeted warmly by the staff. The ambiance was cozy and inviting. And let's talk about the food – it was simply exquisite! Every dish was bursting with flavor and expertly prepared. I can't wait to come back again!",
        endingword: "Thank you."
    },
    {
        imageSrc: nine_image,
        title: "Nattinee Krengkrut",
        description: "There's a reason for that it's simply the best! Whether I'm stopping by for a quick lunch or enjoying a leisurely dinner with friends, I always know I'm in for a treat. The menu offers a fantastic selection of dishes, and everything I've tried has been delicious. The atmosphere is lively and welcoming, and the staff is friendly and attentive. If you haven't been yet, you're missing out!",
        endingword: "Love."
    },
];

function Testimony_Gen(testimonies) {
    return testimonies.map((testimony, index) => (
        <Row key={index} className='m-3'>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text-start mb-4'>
                <Image src={testimony.imageSrc} fluid style={{ width: '25vw' }} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col align-self-center">
                <div>
                    <h5 className='text-start'>{testimony.title}</h5>
                    <p className='text-justify'>{testimony.description}</p>
                    <p className='text-start'>{testimony.endingword}</p>
                </div>
            </Col>
        </Row>
    ));
}


//Page layout start here.
function Homepage() {
    return (
        <div>
            <Container>
                <Row className='m-5'>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} className='text-start'>
                        <h4>{first_welcome}</h4>
                        <h1>{branding_word}</h1>
                        <h5>{branding_location} </h5>
                        <p className='text-justify'>{welcome_word}</p>
                        <div className='mt-5'>
                            <div className='mt-5'>
                                <button type="button" className="btn btn-primary btn-lg">{botton_1}</button>
                            </div>
                            <div className='mt-2'>
                                <button type="button" className="btn btn-secondary btn-lg">{botton_2}</button>
                            </div>
                        </div>
                    </Col>
                    <Col className='text-start mt-4'>
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
            </Container>
            <div className='main_theme' >
                <div className='container text-center'>
                    <Row>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} className='text-start m-3'>
                            <h2>{deal_wording}</h2>
                        </Col>
                        <Col className='text-end m-3'>
                            <Button type="submit" className='btn btn-dark btn-sm'>{menu_bt_wording}</Button>{' '}
                        </Col>
                    </Row>
                    <Row className='row justify-content-start'>
                        {cardComponents}
                    </Row>
                    <Row className='row justify-content-center m-4'>
                        <div className='light-moving'>
                            <p style={{ color: 'red' }} className='text-end'>{end_of_sale_wording}</p>
                        </div>
                    </Row>
                </div>
            </div>
            <div className='container text-center'>
                <h2 className='text-start m-3'>Testimony</h2>
                <Container>
                    <Row className="row align-items-center">
                        {Testimony_Gen(testimoniesData)}
                    </Row>
                </Container>
            </div>
            <Aboutpage />
        </div>
    );
}

export default Homepage;