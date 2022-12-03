import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const MENUOPTIONS = [
  {
    isMenu: true,
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    isMenu: false,
    title: "Data",
  },
  {
    isMenu: true,
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  {
    isMenu: false,
    title: "Pages",
  },
  {
    isMenu: true,
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
  {
    isMenu: false,
    title: "Charts",
  },
  {
    isMenu: true,
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    isMenu: true,
    title: "Geography Chart",
    to: "/geography",
    icon: <MapOutlinedIcon />,
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const MenuHeader = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Typography
      variant="h6"
      color={colors.grey[300]}
      sx={{ m: "15px 0 5px 20px" }}
    >
      {title}
    </Typography>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Rutul Kulkarni
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin Dashboard
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {MENUOPTIONS.map((val) =>
              val.isMenu ? (
                <Item
                  title={val.title}
                  to={val.to}
                  icon={val.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : (
                <MenuHeader title={val.title} />
              )
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
