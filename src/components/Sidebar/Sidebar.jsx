import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [openEmployees, setOpenEmployees] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickEmployees = () => {
    setOpenEmployees(!openEmployees);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className="d-flex align-items-center"
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <span>Dashboard</span>
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} className="mt-4">
        <ListItemIcon>
          <BookIcon></BookIcon>
        </ListItemIcon>
        <ListItemText primary="Evaluaciones" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleNavigation("/evaluacion")}
          >
            <ListItemIcon>
              <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
            </ListItemIcon>
            <ListItemText primary="Listado" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleNavigation("/evaluacion/crear")}
          >
            <ListItemIcon>
              <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
            </ListItemIcon>
            <ListItemText primary="Crear" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickEmployees} className="mt-4">
        <ListItemIcon>
          <PeopleIcon></PeopleIcon>
        </ListItemIcon>
        <ListItemText primary="Empleados" />
        {openEmployees ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openEmployees} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleNavigation("/empleados")}
          >
            <ListItemIcon>
              <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
            </ListItemIcon>
            <ListItemText primary="Listado" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleNavigation("/empleados/crear")}
          >
            <ListItemIcon>
              <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
            </ListItemIcon>
            <ListItemText primary="Crear" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default Sidebar;
