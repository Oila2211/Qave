import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const VerificationModal = ({ show, onHide, onResendEmail, onGoToLogin }) => {
    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Verification Email Sent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please check your email and click the verification link to activate your account.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onGoToLogin}>
                    Go to Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VerificationModal;