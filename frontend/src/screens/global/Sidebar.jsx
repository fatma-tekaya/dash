import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import axios from 'axios';
import logo from '../../assets/logo.jpeg'
import { useSelector, useDispatch } from "react-redux";
import { PiBagSimple, PiLinkLight, PiSignOutThin, PiUserListLight, PiUsersThreeThin, PiChartLineLight, PiDiamondsFourLight } from "react-icons/pi";
import { logout } from "../../slices/authSlice";
const Item = ({ title, to, icon,selected, setSelected,onLogout }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleItemClick = () => {
    setSelected(title);
    if (title === "Déconnecter") {
      onLogout();
    }
  };
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      
      onClick={handleItemClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
  
    try {
      const response = await axios.post('/api/users/logout');
      dispatch(logout());
      if (response.status === 200) {
        navigate("/login"); // Redirect to the login page
      } else {
        console.log("erreur de logout")
        // Handle errors or display a message to the user if needed
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const { userInfo } = useSelector((state) => state.auth)

  // const isNonMobile = useMediaQuery("(min-width:600px)");


  return (
    <Box
      className="sidebar"

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
          color: "teal !important",
        },
        "& .pro-menu-item.active": {
          color: "#00695C !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">

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
                <img
                  className="rounded rounded-circle w-50"
                  alt="logo"
                  src={logo}
                  style={{ cursor: "pointer", }}
                />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">

              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {userInfo.name}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<PiDiamondsFourLight size={20} />}
              selected={selected}
              setSelected={setSelected}
            />

            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Dash
            </Typography> } 
            <Item
              title="Offers"
              to="/offers"
              icon={<PiBagSimple size={20} />}
              selected={selected}
              setSelected={setSelected} Offers
            />
            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Offers
            </Typography>}
            <Item
              title="Condidats"
              to="/condidats"
              icon={<PiUsersThreeThin size={20} />}
              selected={selected}
              setSelected={setSelected} Condidats
            />
            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Condidats
            </Typography>}
            <Item
              title="Projets"
              to="/projets"
              icon={<PiChartLineLight size={20} />}
              selected={selected}
              setSelected={setSelected}
            />
            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Projets
            </Typography>}
            <Item
              title="Informations de site"
              to="/InfoGenrale"
              icon={<PiLinkLight size={20} />}
              selected={selected}
              setSelected={setSelected}
            />
            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Info
            </Typography>}
            <Item
              title="Profile"
              to="/Profile"
              icon={<PiUserListLight size={20} />}
              selected={selected}
              setSelected={setSelected}
            />
            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Profile
            </Typography>}
            <Item
              title="Déconnecter"
              to="/login"
              icon={<PiSignOutThin size={20} />}
              selected={selected}
              setSelected={setSelected}
              onLogout={logoutHandler}
            />
            {isCollapsed && <Typography
              variant="body1"
              align="center"
              color={colors.grey[300]}
              sx={{ margin: "auto" }}
            >
              Déconnecter
            </Typography>}
          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  );
};

export default Sidebar;