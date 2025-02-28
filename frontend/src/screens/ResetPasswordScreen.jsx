import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useResetPasswordMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { Form, Button, Container } from "react-bootstrap";

const ResetPasswordScreen = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [password, setPassword] = useState("");
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await resetPassword({ token, password }).unwrap();
            toast.success("Password reset successful. You can now log in.");
        } catch (err) {
            toast.error(err?.data?.message || "Password reset failed.");
        }
    };

    return (
        <Container>
            <h2>Reset Password</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="password">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button type="submit" disabled={isLoading}>Reset Password</Button>
            </Form>
        </Container>
    );
};

export default ResetPasswordScreen;
