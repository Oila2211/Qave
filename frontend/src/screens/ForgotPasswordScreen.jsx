import { useState } from "react";
import { useForgotPasswordMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { Form, Button, Container } from "react-bootstrap";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword({ email }).unwrap();
            toast.success("Password reset email sent. Check your inbox.");
        } catch (err) {
            toast.error(err?.data?.message || "Failed to send reset email.");
        }
    };

    return (
        <Container>
            <h2>Forgot Password</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Email"}
                </Button>
            </Form>
        </Container>
    );
};

export default ForgotPasswordScreen;
