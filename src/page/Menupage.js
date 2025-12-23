import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Main Course Images
import spaghetti_image from '../appdata/menus/Spaghetti Bolognese.jpg';
import lemon_chicken_image from '../appdata/menus/Lemon Herb Chicken.webp';
import salmon_image from '../appdata/menus/Seared Salmon.jpg';

// Dessert Images
import tiramisu_image from '../appdata/menus/Tiramisu.avif';
import crostini_dolce_image from '../appdata/menus/Crostini Dolce.jpg';
import lemon_cake_image from '../appdata/menus/Lemon Olive Oil Cake.jpg';

// Drink Images
import lemon_spritz_image from '../appdata/menus/Little Lemon Spritz.webp';
import iced_tea_image from '../appdata/menus/Citrus Iced Tea.jpg';
import espresso_image from '../appdata/menus/Espresso Romano.jpg';

const mainCourses = [
  {
    title: 'Spaghetti Bolognese',
    price: '450฿',
    description: 'Slow-simmered ragù with ground beef and pork, fresh basil, and shaved parmesan over al dente pasta. A classic Italian comfort dish.',
    image: spaghetti_image,
  },
  {
    title: 'Lemon Herb Chicken',
    price: '470฿',
    description: 'Grilled chicken breast marinated in fresh lemon juice, garlic, and Mediterranean herbs. Served with roasted vegetables and lemon wedges.',
    image: lemon_chicken_image,
  },
  {
    title: 'Seared Salmon',
    price: '560฿',
    description: 'Pan-seared Atlantic salmon fillet with a crispy skin, finished with olive oil and fresh dill. Served with seasonal greens and lemon butter sauce.',
    image: salmon_image,
  },
];

const desserts = [
  {
    title: 'Tiramisu',
    price: '230฿',
    description: 'Classic Italian dessert with layers of espresso-soaked ladyfingers, rich mascarpone cream, and dusted with cocoa powder. A coffee lover\'s dream.',
    image: tiramisu_image,
  },
  {
    title: 'Crostini Dolce',
    price: '180฿',
    description: 'Crispy toasted bread topped with sweet ricotta, honey drizzle, and fresh berries. A delightful sweet twist on traditional crostini.',
    image: crostini_dolce_image,
  },
  {
    title: 'Lemon Olive Oil Cake',
    price: '210฿',
    description: 'Moist Mediterranean cake made with extra virgin olive oil and fresh lemon zest. Light, fragrant, and perfectly sweet with a citrus glaze.',
    image: lemon_cake_image,
  },
];

const drinks = [
  {
    title: 'Little Lemon Spritz',
    price: '160฿',
    description: 'Our signature sparkling cocktail with fresh lemon juice, prosecco, and a splash of elderflower liqueur. Garnished with lemon twist and mint.',
    image: lemon_spritz_image,
  },
  {
    title: 'Citrus Iced Tea',
    price: '130฿',
    description: 'Refreshing house-brewed black tea infused with fresh lemon, orange slices, and a hint of honey. Served ice cold with mint leaves.',
    image: iced_tea_image,
  },
  {
    title: 'Espresso Romano',
    price: '110฿',
    description: 'Traditional Italian espresso served with a twist of lemon peel to enhance the coffee\'s natural brightness. Strong, bold, and citrus-kissed.',
    image: espresso_image,
  },
];

const figureStyle = {
  position: 'relative',
  width: '100%',
  paddingTop: '66%',
  overflow: 'hidden',
  borderBottom: '1px solid #f0f0f0',
  backgroundColor: '#f6f6f6',
  borderRadius: '0.25rem 0.25rem 0 0',
};

const placeholderStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6c757d',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #fdf1ba 0%, #f8e37e 100%)',
};

function Section({ title, items, id }) {
  return (
    <section className="mb-5" id={id}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">{title}</h3>
        <a className="text-decoration-none" href={`#${id}`}>#{title.replace(/\s+/g, '').toLowerCase()}</a>
      </div>
      <Row className="gy-4">
        {items.map((item, index) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={4} key={`${id}-${index}`}>
            <Card className="h-100 shadow-sm">
              <div style={figureStyle}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={placeholderStyle}>example</div>
                )}
              </div>
              <Card.Body className="text-start">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Card.Title className="mb-0">{item.title}</Card.Title>
                  <span className="text-muted">{item.price}</span>
                </div>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

function Menupage() {
  return (
    <div className="bg-light">
      <Container className="py-5">
        <div className="text-start mb-4">
          <h1 className="display-5">Menu</h1>
          <p className="lead">Main Course, Dessert, and Drink.</p>
        </div>
        <Section id="main-course" title="Main Course" items={mainCourses} />
        <Section id="dessert" title="Dessert" items={desserts} />
        <Section id="drink" title="Drink" items={drinks} />
      </Container>
    </div>
  );
}

export default Menupage;
