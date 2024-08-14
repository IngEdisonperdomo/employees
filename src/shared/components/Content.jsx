import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import routes from "@shared/routes/routes";
const Loading = React.lazy(() => import("@shared/components/Loading"));

const AppContent = () => {
  return (
    <Suspense fallback={Loading}>
      <Container fluid className="flex-grow-1">
        <Routes>
          {routes.map((route, idx) => {
            return (
              <Route key={idx} path={route.path} element={<route.element />} />
            );
          })}
        </Routes>
      </Container>
    </Suspense>
  );
};

export default AppContent;
