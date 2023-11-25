import { useState } from "react";
import { Container, Form, Spinner } from "react-bootstrap";
import { createANote } from "../config/api";
import {toast} from 'react-toastify'

export default function CreateNote() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [visitedDate, setVisitedDate] = useState("");
  const [tags, setTags] = useState([]);
  const [travel, setTravel] = useState("");
  const [weather, setWeather] = useState("");
  const [transport, setTransport] = useState("");
  const [loading, setLoading] = useState(false);

  

  return (
    <Container className="mt-5 py-5">
      <div style={{ maxWidth: "450px", margin: "0 auto" }}>
        <h1>Create Note</h1>
        <Form
          onSubmit={""}
          noValidate
          validated={validated}
          className="shadow p-3"
        >
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label className="text-secondary fw-medium small">
              TITLE
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Title is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDesc">
            <Form.Label className="text-secondary fw-medium small">
              DESCRIPTION
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Description is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImg">
            <Form.Label className="text-secondary fw-medium small">
              IMAGE LINK
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="image url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Image Link is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label className="text-secondary fw-medium small">
              Enter Date
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter visited date"
              value={visitedDate}
              onChange={(e) => setVisitedDate(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Date is required
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex flex-wrap gap-4 gap-lg-5 mb-4">
            <div className="mb-4">
              <h6 className="text-secondary small">TRAVEL TYPE</h6>
              {["Adventure", "Beach", "City"].map((type) => (
                <div key={`default-${type}`} className="mb-2">
                  <Form.Check
                    type="radio"
                    id={`${type}`}
                    label={`${type}`}
                    name="travelType"
                    aria-label={type}
                    required
                    value={type}
                    checked={travel == type}
                    onChange={(e) => setTravel(e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div>
              <h6 className="text-secondary small">WEATHER</h6>
              {["Warm", "Cloudy", "Clear"].map((type) => (
                <div key={`default-${type}`} className="mb-2">
                  <Form.Check
                    type="radio"
                    id={`${type}`}
                    label={`${type}`}
                    name="travelWeather"
                    required
                    aria-label={type}
                    value={type}
                    checked={weather == type}
                    onChange={(e) => setWeather(e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div>
              <h6 className="text-secondary small">TRANSPORT</h6>
              {["Private", "Road", "Flight", "Sea"].map((type) => (
                <div key={`default-${type}`} className="mb-2">
                  <Form.Check
                    type="radio"
                    id={`${type}`}
                    label={`${type}`}
                    name="travelTransport"
                    required
                    aria-label={type}
                    value={type}
                    checked={transport == type}
                    onChange={(e) => setTransport(e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="fw-medium bgColor text-white shadow border-0 w-auto"
              disabled={loading}
            >
              {loading ? "Loading…" : "Add Place"}
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
