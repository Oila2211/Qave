import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useVerifyEmailMutation } from '../slices/usersApiSlice';
import { Container, Button, Alert, Spinner } from 'react-bootstrap';

console.log('VerifyEmailScreen rendered');

const VerifyEmailScreen = () => {
    console.log('VerifyEmailScreen rendered');
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    const [verifyEmail] = useVerifyEmailMutation();
    const [status, setStatus] = useState("loading"); // "loading", "success", "error"
    const [hasVerified, setHasVerified] = useState(false); // Prevents multiple API calls

    useEffect(() => {
        const verify = async () => {

            if (hasVerified) return; //  Prevents multiple verification attempts

                try {
                    await verifyEmail(token).unwrap();

                    setStatus("success");
                    setHasVerified(true); // Prevents another API call
                    toast.success('Email verified successfully, you can now log in');
                    
                } catch (err) {
                    setStatus("error");
                    setHasVerified(true); // Prevent multiple failures
                    toast.error(err?.data?.message || "Email verification failed.");
                }
            }

        verify(); // Run only once
    }, [token, verifyEmail, hasVerified]); 

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
            {status === "loading" && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Verifying...</span>
                </Spinner>
            )}

            {status === "success" && (
                <Alert variant="success" className="text-center">
                    <h2>Email Verified Successfully 🎉</h2>
                    <p>You can now log in to your account.</p>
                    <Button variant="primary" onClick={() => navigate('/login')}>
                        Go to Login
                    </Button>
                </Alert>
            )}

            {status === "error" && (
                <Alert variant="danger" className="text-center">
                    <h2>Email Verification Failed ❌</h2>
                    <p>Invalid or expired verification link.</p>
                    <Button variant="danger" onClick={() => navigate('/register')}>
                        Try Again
                    </Button>
                </Alert>
            )}
        </Container>
    );
};

export default VerifyEmailScreen;



