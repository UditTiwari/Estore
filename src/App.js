import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavDropdown,Nav,Button,Form,FormControl,InputGroup,Carousel,Card,CardGroup, } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      
     <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">E-Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#Electronics">Electronics</Nav.Link>
      <Nav.Link href="#Clothes">Clothes</Nav.Link>
      <Nav.Link href="#Grocery">Grocery</Nav.Link>
     
    </Nav>
    
  { /* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
  </Form>*/}
    <Form inline>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Find Here"
        aria-label="Find Here"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  </Form>

  <Nav>
  <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Button variant="primary" onClick={handleShow}>
       Sign-up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login form</Modal.Title>
        </Modal.Header>
        <Modal.Body>Login Form Body</Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>
        Log-In
          </Button>
        </Modal.Footer>
      </Modal>
  { /*<Nav.Link href="#deets" >Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Cart
</Nav.Link>*/}

    </Nav>
  </Navbar.Collapse>
</Navbar>
  
 
</>

<Carousel  style={{ width:"100%", height:"10%"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <Carousel.Caption>
      <h1>Clothes</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt=""
    />

    <Carousel.Caption>
      <h1>Electronics</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt=""
    />

    <Carousel.Caption>
      <h1>Grocery</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1>Featured Product</h1>
<CardGroup style={{ height:"10%"}}>
  <Card>
    <Card.Img  variant="top" src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Body>
      <Card.Title>Grocery</Card.Title>
      <Card.Text>
    Eat fresh, stay healthy
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Just Arrived</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1594322267233-53535f9879c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Body>
      <Card.Title>Electronics</Card.Title>
      <Card.Text>
    Intelligence EverywhereLorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Just Arrived</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    <Card.Body>
      <Card.Title>Clothes</Card.Title>
      <Card.Text>
      Style is a reflection of your attitude and your personality
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Just Arrived</small>
    </Card.Footer>
  </Card>
</CardGroup>

    </div>
    
  );
}

export default App;
