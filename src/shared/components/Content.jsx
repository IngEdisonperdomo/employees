import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import routes from "../routes";

const AppContent = () => {
  return (
    <Container fluid className="flex-grow-1">
      <Routes>
        {routes.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.element />} />
          );
        })}
      </Routes>
    </Container>
  );
};

export default AppContent;
