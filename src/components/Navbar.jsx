/* eslint-disable react/prop-types */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ArrowBack, LoginOutlined } from "@mui/icons-material";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import { signOut } from "firebase/auth";
import { ListItemIcon } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

const drawerWidth = 240;
const navItems = ["Y-business", "Y-courses"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function DrawerAppBar(props) {
  const { window1 } = props;

  const navigate = useNavigate();
// const [search, setSearch] = React.useState(false);

  const [menu, setMenu] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);
  console.log("width", width);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMenu = () => {
    setMenu(true);
  };

  const CrossshowMenu = () => {
    setMenu(false);
  };
  const [currentUser, setCurrentUser] = React.useState(null);
  console.log('users',currentUser);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        const userEmail = user.email;
        const firestore = getFirestore();
        const userInformationDocRef = doc(
          firestore,
          "users",
          userEmail,
          "information",
          userId
        );

        try {
          const userInformationDocSnapshot = await getDoc(
            userInformationDocRef
          );
          if (userInformationDocSnapshot.exists()) {
            const userData = userInformationDocSnapshot.data();
            const numberOfMonths = userData.subscriberCountHistory
              ? userData.subscriberCountHistory.length
              : 0;

            setCurrentUser({
              uid: userId,
              email: userEmail,
              profileImage: userData.profileImage,
              fullname: userData.fullname,
              phone: userData.phone,
              subscriberCount: userData.subscriberCount,
              username: userData.username,
              watchTimeHours: userData.watchTimeHours,
              numberOfMonths: numberOfMonths,
            });
          } else {
            console.error("User information document not found in Firestore");
          }
        } catch (error) {
          console.error(
            "Error fetching user information from Firestore:",
            error
          );
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",

          justifyContent: "space-around",
        }}
      >
        <Typography variant="h6" sx={{ my: 2, marginLeft: "5rem" }}>
          <img
            style={{ width: "5rem" }}
            src="https://app.yafreeka.com/splash/img/light-1x.png"
            alt=""
          />{" "}
          <h4>Y-Shule</h4>
        </Typography>
        <ArrowBack
          style={{ fontSize: "2rem", cursor: "pointer", marginLeft: "2rem" }}
        />
      </div>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const handleLogout = (e) => {
    e.preventDefault();
    // if (window.confirm("Are you sure you want to log out?")) {
    signOut(auth)
      .then(() => {
        // Redirect to login page after logout
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
    // }
  };
  const container =
    window1 !== undefined ? () => window1().document.body : undefined;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="navbar" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "3rem", marginTop: "0rem" }}
              src="https://app.yafreeka.com/splash/img/light-1x.png"
              alt=""
            />{" "}
            {menu && width<=700?(
''
            ):            <p className="n-p" style={{ marginBottom: "" }}>Y-shule</p>
          }
          </Typography>
          { menu==true && width<=700? (
            <>
           
            </>
            
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search className="search">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          )}

          <Box style={{ display: "flex" }}>
            {navItems.map((item) => (
              <Button className="nav-items" key={item} sx={{ color: "black",marginRight:'2rem' }}>
                {item}
                {/* <CiHeart style={{marginTop:'1rem'}} size={34}/> */}
              </Button>
            ))}

            {menu===false ?(
<>
<CiHeart style={{ marginRight: "0.6rem" }} size={30} />
            <FaShoppingBag
              style={{ marginRight: "0.6rem", marginTop: "2px" }}
              size={23}
            />
            <IoIosNotificationsOutline
              style={{ marginRight: "0.6rem" }}
              size={30}
            />

            <Box>
              {currentUser ? (
                <Avatar
                  src=""
                  alt={currentUser.fullname}
                  onClick={handleProfileClick}
                  style={{ cursor: "pointer", height: "1.7rem", width: "1.7rem" }}
                />
              ) : (
                <Avatar
                  src={currentUser?.profileImage}
                  alt={currentUser?.fullname}
                  onClick={handleProfileClick}
                />
              )}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser ? (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                      color: "black",
                    }}
                    onClick={handleLogout}
                  >
                    <ListItemIcon>
                      <LoginOutlined style={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Logout"
                      sx={{ opacity: open ? 1 : 0, color: "black" }}
                    />
                  </ListItemButton>
                ) : (
                 <>
                 {width>=700 &&(
                  <>
                   <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                      color: "black",
                    }}
                  >
                    <Link to="/login">
                      <ListItemIcon>
                        <LoginOutlined style={{ color: "black" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Login"
                        sx={{ opacity: open ? 1 : 0, color: "black" }}
                      />
                    </Link>
                  </ListItemButton>
                  </>
                 )}
                 
                 </>
                )}
              </Menu>
            </Box>
</>
            ) :(
              <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search className="search1">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            )}
           
            {width <= 700 && (
              <>
                {menu ? (
                  <RxCross1
                    onClick={CrossshowMenu}
                    size={30}
                    style={{
                      marginLeft: "1rem",
                      marginTop: "0.3rem",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <SearchIcon
                    onClick={showMenu}
                    size={36}
                    style={{
                      marginLeft: "1rem",
                      marginTop: "0.3rem",
                      cursor: "pointer",
                    }}
                  />
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{}}>
        <Toolbar />
      </Box>
    </Box>
  );
}
