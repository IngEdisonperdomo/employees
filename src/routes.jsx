import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));
const Evaluation = React.lazy(() => import("./views/Evaluation/Evaluation"));
const CreateEvaluation = React.lazy(() =>
  import("./views/Evaluation/Create/CreateEvaluation")
);

const Employees = React.lazy(() => import("./views/Employees/Employees"));
const CreateEmployee = React.lazy(() =>
  import("./views/Employees/Create/CreateEmployee")
);

const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/evaluacion", name: "Dashboard", element: Evaluation },
  { path: "/evaluacion/crear", name: "Dashboard", element: CreateEvaluation },
  { path: "/empleados", name: "Dashboard", element: Employees },
  { path: "/empleados/crear", name: "Dashboard", element: CreateEmployee },
  { path: "/", name: "Dashboard", element: Dashboard },
];

export default routes;
