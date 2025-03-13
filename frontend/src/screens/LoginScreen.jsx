// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import FormContainer from "../components/FormContainer";
// import Loader from "../components/Loader";
// import { useLoginMutation } from "../slices/usersApiSlice";
// import { setCredentials } from "../slices/authSlice";
// import { toast } from 'react-toastify';


// const LoginScreen = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [login, { isLoading }] = useLoginMutation();

//     const { userInfo } = useSelector((state) => state.auth);

//     const { search } = useLocation();
//     const sp = new URLSearchParams(search);
//     const redirect = sp.get('redirect') || '/';

//     useEffect(() => {
//         if (userInfo) {
//             navigate(redirect);
//         }
//     }, [navigate, redirect, userInfo]);

//     const submitHandler = async(e) => {
//         e.preventDefault()
//         try {
//             const res = await login({ email, password }).unwrap();
//             console.log("Login response:", res)
//             dispatch(setCredentials({...res  })); // { token, user }
//             navigate(redirect);
//         } catch (err) {
//             console.log(err);
//             toast.error(err?.data?.message || err.error)
//         }
//     }
//   return (
//     <FormContainer>
//         <h1>Sign In</h1>

//         <Form onSubmit={submitHandler}>
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

//             <Button type="submit" variant="primary" className="mt-2"
//             disabled={isLoading}>
//                 Sign In
//             </Button>

//             { isLoading && <Loader /> }
//         </Form>

//         <Row>
//             <Col>
//                 New Customer? <Link to={ redirect ? `/register?redirect=${redirect}` : '/register' }>Register</Link>
//             </Col>
//         </Row>
//     </FormContainer>
//   )
// }

// export default LoginScreen




import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials, logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import "../assets/styles/Login.css"; 
import { FcGoogle } from "react-icons/fc"; 

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
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
    try {
        const res = await login({ email, password }).unwrap();

        // Check if the user is an old user (requiresReset flag)
        if (res.requiresReset) {
            console.log("Old user detected, redirecting to reset page...");
            navigate("/reset-old-user", { state: { email } }); // Redirect old users to reset password page
        } else {
            // Normal login for non-old users
            dispatch(setCredentials(res));
            navigate("/");
        }
    } catch (err) {
        console.log("Login error response:", err?.data);

        if (err?.status === 428 && err?.data?.requiresReset) {
            console.log("Old user detected, redirecting to reset page...");
            navigate("/reset-old-user", { state: { email } }); // Redirect old users to reset password page
        } else {
            toast.error(err?.data?.message || "Login failed.");
        }
    }
};



  return (
    <Container fluid className="login-container">
      <Row className="login-row">
        {/* Left Side (Welcome Section) */}
        <Col md={6} className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome Back!</h1>
            <p>Experience the best of African flavors. Sign in to continue.</p>
          </div>
        </Col>

        {/* Right Side (Login Form) */}
        <Col md={6} className="login-form-container">
          <Card className="login-card">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <p className="text-center text-muted">Welcome back! Please login to your account.</p>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember Me" />
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <Button type="submit" className="login-btn mt-3" disabled={isLoading}>
                  Login
                </Button>

                <Button className="google-btn mt-2">
                  <FcGoogle size={20} className="me-2" /> Sign in with Google
                </Button>

                {isLoading && <Loader />}
              </Form>

              <div className="text-center mt-3">
                <p>
                  New User?{" "}
                  <Link to={redirect ? `/register?redirect=${redirect}` : "/register"} className="signup-link">
                    Sign Up
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
