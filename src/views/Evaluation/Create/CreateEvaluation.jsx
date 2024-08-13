import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  Row,
  Col,
  Form as BootstrapForm,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateEvaluation.css"; // Importar el archivo CSS

const CreateEvaluation = () => {
  const initialValues = {
    title: "",
    questions: [
      {
        question: "",
        options: [
          {
            text: "",
            isCorrect: false,
          },
        ],
      },
    ],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    questions: Yup.array().of(
      Yup.object().shape({
        question: Yup.string().required("Required"),
        options: Yup.array().of(
          Yup.object().shape({
            text: Yup.string().required("Required"),
            isCorrect: Yup.boolean().required("Required"),
          })
        ),
      })
    ),
  });

  const handleSubmit = (values) => {
    console.log("Evaluation Data:", values);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
  };

  return (
    <Container>
      <h1 className="mt-4 mb-5 text-center">Create Evaluation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="createEvaluation-container">
            <Row>
              <Col md={12}>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label htmlFor="title">
                    Evaluation Title
                  </BootstrapForm.Label>
                  <Field
                    type="text"
                    name="title"
                    as={BootstrapForm.Control}
                    isInvalid={!!ErrorMessage.title}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
            </Row>

            {/* Field for add many question */}
            <FieldArray name="questions">
              {({ insert, remove, push }) => (
                <div>
                  {initialValues.questions.map((question, qIndex) => (
                    <div key={qIndex}>
                      <Row>
                        <Col md={12}>
                          <BootstrapForm.Group className="mb-3">
                            <BootstrapForm.Label>Question</BootstrapForm.Label>
                            <Field
                              type="text"
                              name={`questions.${qIndex}.question`}
                              as={BootstrapForm.Control}
                              isInvalid={
                                !!ErrorMessage.questions?.[qIndex]?.question
                              }
                            />
                            <ErrorMessage
                              name={`questions.${qIndex}.question`}
                              component="div"
                              className="text-danger"
                            />
                          </BootstrapForm.Group>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <Row>
              <Col md={12} className="d-flex justify-content-between">
                <Button
                  type="button"
                  onClick={() =>
                    push({
                      question: "",
                      options: [{ text: "", isCorrect: false }],
                    })
                  }
                  className="mt-3"
                >
                  Add Question
                </Button>

                <Button type="submit" disabled={isSubmitting} className="mt-3">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateEvaluation;
