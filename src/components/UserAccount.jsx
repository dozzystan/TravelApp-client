import React from "react";
import { useState } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { signUp } from "../config/api";
import { login } from "../config/api";
import { toast } from "react-toastify";

const UserAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ToggleFormState = () => {
    setIsSignup((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    try {
      setLoading(true);
      if (isSignup) {
        const res = await signUp(username, email, password);
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        toast.success("Sign up successful");
      } else {
        const res = await login(username, password);
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        toast.success("Login successful");
      }
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="fw-bold text-black"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      >
        Get Started
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{isSignup ? "Sign up" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <p className="fs-5">{error}</p>}
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="text-secondary fw-medium small">
                USERNAME
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Username is required
              </Form.Control.Feedback>
            </Form.Group>
            {isSignup && (
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-secondary fw-medium small">
                  EMAIL
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Email is required
                </Form.Control.Feedback>
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formPassw0rd">
              <Form.Label className="text-secondary fw-medium small">
                PASSWORD
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </Form.Group>
            <button
              className="text-white fw-medium bgColor border-0 shadow w-100"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <>{isSignup ? "Register" : "Login"}</>
              )}
            </button>
          </Form>
          <div className="mt-2">
            {isSignup ? (
              <p onClick={ToggleFormState}>
                Have an account? <b style={{ cursor: "pointer" }}>Login</b>
              </p>
            ) : (
              <p onClick={ToggleFormState}>
                Don&apos;t have an account?{" "}
                <b style={{ cursor: "pointer" }}>Register</b>
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserAccount;
