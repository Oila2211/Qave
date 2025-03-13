import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useForgotPasswordMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const ResetOldUserScreen = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    const navigate = useNavigate();
    const { state } = useLocation();
    const email = state?.email;

    // useEffect(() => {
    //     if (!userInfo?.email) { // Check if email is set
    //         navigate("/login"); // Redirect if user info is incomplete
    //     }
    // }, [userInfo, navigate]);

    if (!email) {
        navigate("/login"); // Redirect if email is not provided
    }

    const handleResetPassword = async () => {
        try {
            await forgotPassword({ email }).unwrap();
            toast.success(`A reset email has been sent to ${email}.`);
        } catch (err) {
            toast.error(err?.data?.message || "Failed to send reset email.");
        }
    }

    return (
        <Container className="text-center">
            <h2>Welcome back to Afriqana now called " The Qave"!</h2>
            <p>We've updated our system. To continue, please reset your password.</p>
            <Button onClick={handleResetPassword} disabled={isLoading}>
                {isLoading ? "Sending..." : "Reset Password"}
            </Button>
        </Container>
    );
};

export default ResetOldUserScreen;
