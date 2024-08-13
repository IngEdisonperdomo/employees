import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  Button,
  Container,
  Row,
  Col,
  Form as BootstrapForm,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateEmployee.css"; // Importar el archivo CSS
import { initialValues, validationSchema } from "./hooks";

const CreateEmployee = () => {
  const handleSubmit = (values) => {
    console.log("Employee Data:", values);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
  };

  return (
    <Container>
      <h1 className="mt-4 mb-5 text-center">Registrar Empleado</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="createEmployee-container">
            <Row>
              <Col md={12}>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label htmlFor="name">Name</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="name"
                    as={BootstrapForm.Control}
                    isInvalid={!!ErrorMessage.name}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
              <Col md={12}>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label htmlFor="position">
                    Position
                  </BootstrapForm.Label>
                  <Field
                    type="text"
                    name="position"
                    as={BootstrapForm.Control}
                    isInvalid={!!ErrorMessage.position}
                  />
                  <ErrorMessage
                    name="position"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label htmlFor="department">
                    Department
                  </BootstrapForm.Label>
                  <Field
                    type="text"
                    name="department"
                    as={BootstrapForm.Control}
                    isInvalid={!!ErrorMessage.department}
                  />
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
              <Col md={12}>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label htmlFor="evaluation">
                    Salario
                  </BootstrapForm.Label>
                  <Field
                    type="text"
                    name="evaluation"
                    className="form-control"
                    isInvalid={!!ErrorMessage.evaluation}
                  />
                  <ErrorMessage
                    name="evaluation"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex justify-content-end">
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

export default CreateEmployee;
