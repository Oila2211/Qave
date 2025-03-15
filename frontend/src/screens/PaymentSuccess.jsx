// import React, { useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { updateUserInfoAfterPayment } from '../slices/authSlice';
// import { useGetOrderDetailsQuery, usePayOrderMutation } from '../slices/ordersApiSlice';
// import { resetOrderValues } from '../slices/orderSlice';
// import { toast } from 'react-toastify';
// import { useStripePromise } from '../contexts/StripeContext';

// const PaymentSuccess = () => {

//     const orderId = useSelector((state) => state.order.orderId);  // Use Redux state for orderId
//     const dispatch = useDispatch();
    
//     const { refetch, isError, isLoading } = useGetOrderDetailsQuery(orderId);
//     const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
//     const stripe = useStripePromise()

//     useEffect(() => {
        
//         if (!stripe) return;

//         const url = new URL(window.location);
//         const clientSecret = url.searchParams.get('payment_intent_client_secret');
//         const fetchPaymentIntent = async () => {
//           const { paymentIntent, error: retrieveError } = await stripe.retrievePaymentIntent(clientSecret);
            
//           if (retrieveError) {
//               toast.error(`Error retrieving payment details: ${retrieveError.message}`);
//               return;
//             };   
          
//               const details = {
//                   id: paymentIntent.id,
//                   status: paymentIntent.status,
//                   update_time: new Date().toISOString(),
//                   email_address: paymentIntent.receipt_email,
//               };
              
//               await payOrder({ orderId, details});
//               // markAsPaid(orderId)
//               toast.success('Order is Paid')

//               // Reset orderId after successful payment
//               dispatch(resetOrderValues());
//               // dispatch(resetOrderId())
//           } 
//           refetch()
    
//         fetchPaymentIntent();
        
//     }, [stripe, payOrder, refetch, orderId, dispatch]);

      

//   return (
//     <Container>
//       <Row className="justify-content-md-center mt-5">
//         <Col xs={12} md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title className="text-center">
//                 <h2>Payment Successful!</h2>
//               </Card.Title>
//               <Card.Text className="text-center">
//                 Your payment has been successfully processed.
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <Link to="/">
//                   <Button variant="primary">Go to Home</Button>
//                 </Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PaymentSuccess;




import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useGetOrderDetailsQuery, usePayOrderMutation } from '../slices/ordersApiSlice';
import { resetOrderValues } from '../slices/orderSlice';
import { toast } from 'react-toastify';
import { useStripePromise } from '../contexts/StripeContext';

const PaymentSuccess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const stripe = useStripePromise();
    
    // ✅ Extract orderId from the URL (Instead of Redux)
    const urlParams = new URLSearchParams(location.search);
    const orderId = urlParams.get("orderId");
    const clientSecret = urlParams.get("payment_intent");

    // ✅ Get order details using the correct orderId
    const { refetch } = useGetOrderDetailsQuery(orderId);
    const [payOrder] = usePayOrderMutation();

    useEffect(() => {
        if (!stripe || !clientSecret || !orderId) return;

        const fetchPaymentIntent = async () => {
            const { paymentIntent, error: retrieveError } = await stripe.retrievePaymentIntent(clientSecret);

            if (retrieveError) {
                toast.error(`Error retrieving payment details: ${retrieveError.message}`);
                return;
            }

            const details = {
                id: paymentIntent.id,
                status: paymentIntent.status,
                update_time: new Date().toISOString(),
                email_address: paymentIntent.receipt_email || "not provided",
            };

            await payOrder({ orderId, details });
            toast.success('Order is Paid');

            dispatch(resetOrderValues());
            refetch();
        };

        fetchPaymentIntent();
    }, [stripe, clientSecret, orderId, payOrder, dispatch, refetch]);

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center">
                                <h2>Payment Successful!</h2>
                            </Card.Title>
                            <Card.Text className="text-center">
                                Your payment has been successfully processed.
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                                {orderId ? (
                                    <Button variant="primary" onClick={() => navigate(`/order/${orderId}`)}>
                                        View Order Details
                                    </Button>
                                ) : (
                                    <Link to="/">
                                        <Button variant="primary">Go to Home</Button>
                                    </Link>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentSuccess;
