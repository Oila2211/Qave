// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import FormContainer from "../components/FormContainer";
// import Loader from "../components/Loader";
// import { useRegisterMutation } from "../slices/usersApiSlice";
// import { setCredentials } from "../slices/authSlice";
// import VerificationModal from "../components/VerificationModal";
// import { toast } from 'react-toastify';


// const RegisterScreen = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [showModal, setShowModal] = useState(false);

//     // const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [register, { isLoading }] = useRegisterMutation();

//     const { userInfo } = useSelector((state) => state.auth);

//     const { search } = useLocation();
//     const sp = new URLSearchParams(search);
//     const redirect = sp.get('redirect') || '/';

//     // useEffect(() => {
//     //     if (userInfo) {
//     //         navigate(redirect);
//     //     }
//     // }, [navigate, redirect, userInfo]);

//     const submitHandler = async(e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             toast.error('Password do not match');
//             return;
//         } else {
//             try {
//                 // Call the register mutation
//                 await register({ name, email, password }).unwrap
//                 setShowModal(true)
//                 // const res = await register({ name, email, password }).unwrap();
//                 // dispatch(setCredentials({...res  })); // { token, user }
//             } catch (err) {
//                 console.log(err);
//                 toast.error(err?.data?.message || err.error)
//             }
//         }

//     }

//     const handleGoToLogin = () => {
//         setShowModal(false); // Close the modal
//         navigate('/login'); // Navigate to the login page
//     };    

//   return (
//     <FormContainer>
//         <h1>Sign Up</h1>

//         <Form onSubmit={submitHandler}>
//             <Form.Group controlId="name" className="my-3">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                     type="text"
//                     placeholder="Enter name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="email" className="my-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="password" className="my-3">
//                 <Form.Label>password</Form.Label>
//                 <Form.Control
//                     type="password"
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="confirmPassword" className="my-3">
//                 <Form.Label>Confirm password</Form.Label>
//                 <Form.Control
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                 ></Form.Control>
//             </Form.Group>

//             <Button type="submit" variant="primary" className="mt-2"
//             disabled={isLoading}>
//                 Register
//             </Button>

//             { isLoading && <Loader /> }
//         </Form>

//         <Row>
//             <Col>
//                 Already have an account? <Link to={ redirect ? `/login?redirect=${redirect}` : '/login' }>Login</Link>
//             </Col>
//         </Row>
//         <VerificationModal
//             show={showModal}
//             onHide={() => setShowModal(false)}
//             onGoToLogin={handleGoToLogin}
//         />        
//     </FormContainer>
//   )
// }

// export default RegisterScreen




import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import VerificationModal from "../components/VerificationModal";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import "../assets/styles/Register.css"; // Import CSS

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await register({ name, email, password }).unwrap();
      setShowModal(true);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleGoToLogin = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <Container fluid className="register-container">
      <Row className="register-row">
        {/* Left Side (Welcome Section) */}
        <Col md={6} className="welcome-section">
          <div className="welcome-text">
            <h1>Join Us!</h1>
            <p>Sign up and explore the best of African flavors.</p>
          </div>
        </Col>

        {/* Right Side (Register Form) */}
        <Col md={6} className="register-form-container">
          <Card className="register-card">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <p className="text-center text-muted">Create an account to get started.</p>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" className="register-btn mt-3" disabled={isLoading}>
                  Register
                </Button>

                {/* Google Sign-Up Button */}
                <Button className="google-btn mt-2">
                  <FcGoogle size={20} className="me-2" /> Sign up with Google
                </Button>

                {isLoading && <Loader />}
              </Form>

              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link to={redirect ? `/login?redirect=${redirect}` : "/login"} className="login-link">
                    Login
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Verification Modal */}
      <VerificationModal show={showModal} onHide={() => setShowModal(false)} onGoToLogin={handleGoToLogin} />
    </Container>
  );
};

export default RegisterScreen;
