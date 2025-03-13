import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card, FormControl } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import Message from '../components/Message'
import { addToCart, removeFromCart, setOrderType } from "../slices/cartSlice";
import { resetOrderValues } from "../slices/orderSlice";

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const cart = useSelector((state) => state.cart);
    const { cartItems, orderType } = cart;

    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({...product, qty}))
    };

    const removeFromCartHandler = async (id) => {
        dispatch(removeFromCart(id))
    };

    // const checkoutHandler = () => {
    //     dispatch(resetOrderValues())
    //     navigate('/login?redirect=/delivery');
    // }

    const checkoutHandler = () => {
        if (!orderType) {
            toast.error("Please select Pickup or Delivery before proceeding.");
            return;
        }
        dispatch(resetOrderValues());
        navigate(orderType === "delivery" ? "/delivery" : "/placeorder"); // Direct to correct page
    };

    const maxOrderQuantity = 10; // Adjust qty number as pleased...
  return (
    <Row>
        <Col md={8}>
            <h1 style={{marginBottom: '20px'}}>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Message>
                    Your Cart is empty <Link to='/'>Go Back</Link>
                </Message>
            ) : (
                <ListGroup variant="flush">
                    {cartItems.map((item) => (
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.Image} alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                                </Col>
                                <Col>{item.price}</Col>
                                <Col md={2}>
                                <FormControl
                                    as='select'
                                    value={item.qty}
                                    onChange={(e) => addToCartHandler(item, Number(e.target.value))}>
                                    {[...Array(maxOrderQuantity).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </FormControl>
                                </Col>
                                <Col md={2}>
                                    <Button type="button" variant="light" onClick={ () =>
                                    removeFromCartHandler(item._id)}>
                                        <FaTrash/>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) }
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>
                            Subtotal ({ cartItems.reduce((acc, item) => acc + item.qty, 0)})
                            items
                        </h2>
                        SEK{ cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2) }
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                        <Button type="button" className="btn-block"
                         disabled={cartItems.length === 0}
                         onClick={checkoutHandler}>
                            Proceed To CheckOut
                        </Button>
                    </ListGroup.Item> */}
                        {/* 🚀 ADD ORDER TYPE SELECTION */}
                        <ListGroup.Item>
                            <Form.Group controlId="orderType">
                                <Form.Label>Choose Pickup or Delivery</Form.Label>
                                <Form.Control 
                                    as="select" 
                                    value={orderType} 
                                    onChange={(e) => dispatch(setOrderType(e.target.value))}
                                >
                                    <option value="">Select...</option> {/* Neutral option */}
                                    <option value="delivery">Home Delivery</option>
                                    <option value="pickup">Pickup (Restaurant Location)</option>
                                </Form.Control>
                            </Form.Group>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button 
                                type="button" 
                                className="btn-block"
                                disabled={!orderType} // Disable button if orderType is not selected
                                onClick={checkoutHandler}
                            >
                                Proceed To {orderType === "pickup" ? "Pickup" : "Delivery"}
                            </Button>
                        </ListGroup.Item>

                </ListGroup>
            </Card>
        </Col>
    </Row>
  )
}

export default CartScreen;