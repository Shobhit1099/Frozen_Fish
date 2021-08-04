import { Box, Container, Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mission from "../images/mission.jpg";
import partners from "../images/partners.jpg";
import React from "react";
import Frozen from "../images/Frozen.jpg";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Carousel from "../Carousel";
import services from "../services.js";
import MaximizeIcon from "@material-ui/icons/Maximize";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import itemData from "../itemData";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon from "@material-ui/icons/Create";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ImageIcon from "@material-ui/icons/Image";
import PhoneIcon from "@material-ui/icons/Phone";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paddingStyles: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingStyles2: {
    paddingLeft: "120px",
    paddingRight: "120px",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  marginStyles: {
    marginRight: "160px",
    marginLeft: "160px",
  },
  marginStyles2: {
    marginRight: "20px",
    marginLeft: "20px",
  },
  field: {
    paddingRight: theme.spacing(5),
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navStyle: {
    flexGrow: 1,
  },
  imageRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  a: {
    backgroundColor: "transparent",
    color: "black",
    textDecoration: "none",
  },
  mediaClassNone: {
    display: "none",
  },
  mediaClassBlock: {
    display: "block",
  },
}));

export default function About() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:900px)");
  const matches2 = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function FormRow(service) {
    return (
      <React.Fragment>
        <Grid item sm={4} xs={12}>
          <Typography variant="h6" gutterBottom style={{ color: "#FF9B43" }}>
            {service.heading}
          </Typography>
          <Typography variant="body2" style={{ color: "#565656" }}>
            {service.content}
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={Frozen}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
            className="img-fluid"
          />
          <Typography variant="h4" noWrap className={classes.navStyle}>
            Frozen Fish
          </Typography>
          <Button
            color="default"
            className={!matches && classes.mediaClassNone}
          >
            <a href="/" className={classes.a}>
              Home
            </a>
          </Button>
          <Button
            color="default"
            className={!matches && classes.mediaClassNone}
          >
            <a href="#About" className={classes.a}>
              About
            </a>
          </Button>
          <Button
            color="default"
            className={!matches && classes.mediaClassNone}
          >
            <a href="#Services" className={classes.a}>
              Services
            </a>
          </Button>
          <Button
            color="default"
            className={!matches && classes.mediaClassNone}
          >
            <a href="#Gallery" className={classes.a}>
              Gallery
            </a>
          </Button>
          <Button
            color="default"
            className={!matches && classes.mediaClassNone}
          >
            <a href="#Contact" className={classes.a}>
              Contact us
            </a>
          </Button>
          <Button
            color="default"
            className={!matches && classes.mediaClassNone}
          >
            <a href="#" className={classes.a}>
              Login
            </a>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            &nbsp;&nbsp;More
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div
            className={
              matches == true ? classes.mediaClassNone : classes.mediaClassBlock
            }
          >
            <a href="/" className={classes.a}>
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </a>
            <a href="#About" className={classes.a}>
              <ListItem button key="About">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText>About</ListItemText>
              </ListItem>
            </a>
            <a href="#Services" className={classes.a}>
              <ListItem button key="Services">
                <ListItemIcon>
                  <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText>Services</ListItemText>
              </ListItem>
            </a>
            <a href="#Gallery" className={classes.a}>
              <ListItem button key="Gallery">
                <ListItemIcon>
                  <ImageIcon />
                </ListItemIcon>
                <ListItemText>Gallery</ListItemText>
              </ListItem>
            </a>
            <a href="#Contact" className={classes.a}>
              <ListItem button key="Contact">
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItem>
            </a>
            <a href="#" className={classes.a}>
              <ListItem button key="Login">
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText>Login</ListItemText>
              </ListItem>
            </a>
            <Divider />
          </div>
          <ListItem button key="Employee">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Employee Login</ListItemText>
          </ListItem>
          <ListItem button key="Account">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText>Create Account</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button key="Add">
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText>Add Items</ListItemText>
          </ListItem>
          <ListItem button key="Storage">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>My Storage</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Carousel />
        <div id="About"></div>
        <Container style={{ marginTop: 70, marginBottom: 70 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="text-center"
          >
            <Typography
              variant="h3"
              color="primary"
              gutterBottom
              className={matches && classes.marginStyles}
            >
              Welcome to Frozen Fish Cold Storage
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={matches && classes.marginStyles}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </Typography>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MaximizeIcon fontSize="large" color="action" />
            </div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
              className="text-center"
            >
              <Grid item xs={6}>
                <img
                  src={mission}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                  }}
                  className="img-fluid"
                />
                <Typography variant="h6" style={{ color: "#FF9B43" }}>
                  Mission and Vision
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={partners}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                  }}
                  className="img-fluid"
                />
                <Typography variant="h6" style={{ color: "#FF9B43" }}>
                  Our Partners
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div id="Services"></div>
        <Box style={{ backgroundColor: "#ECEFF9" }} pt={10} pb={10}>
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            className="text-center"
          >
            Services
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MaximizeIcon fontSize="large" color="action" />
          </div>
          <Grid
            style={{ paddingTop: 30 }}
            direction="row"
            container
            spacing={6}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              item
              xs={12}
              spacing={6}
              className={matches && classes.marginStyles}
            >
              {services.map(FormRow)}
            </Grid>
          </Grid>
        </Box>
        <div id="Gallery"></div>
        <Box pt={10} pb={10}>
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            className="text-center"
          >
            Gallery
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MaximizeIcon fontSize="large" color="action" />
          </div>
          <div className={(classes.imageRoot, matches && classes.marginStyles)}>
            <ImageList
              className={classes.imageList}
              cols={matches2 == true ? 5 : 2}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.id}>
                  <img src={item.img} className="img-fluid" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Box>
        <div id="Contact"></div>
        <Box style={{ backgroundColor: "#ECEFF9" }} pt={10} pb={10}>
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            className="text-center"
          >
            Contact Us
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MaximizeIcon fontSize="large" color="action" />
          </div>
          <div
            className={
              matches == true ? classes.marginStyles : classes.marginStyles2
            }
            style={{ border: "1px solid #C5C5C5" }}
          >
            <Typography
              variant="h5"
              style={{
                marginTop: "-17px",
                marginLeft: "25px",
                backgroundColor: "#ECEFF9",
                width: "fit-content",
              }}
            >
              Write To Us
            </Typography>
            <form noValidate autoComplete="off">
              <Grid
                container
                style={{ padding: "30px", marginBottom: "100px" }}
              >
                <Grid item sm={6} xs={12}>
                  <TextField
                    className={classes.field}
                    label="First Name"
                    placeholder="First Name"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    className={classes.field}
                    label="Last Name"
                    placeholder="Last Name"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    className={classes.field}
                    label="Email"
                    placeholder="Email"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    className={classes.field}
                    label="Subject"
                    placeholder="Subject"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.field}
                    label="Details"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "#FFA04C",
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    Submit&nbsp;&nbsp;
                    <SendIcon fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Box>
        <Box
          style={{ backgroundColor: "#92BAB4" }}
          className={matches && classes.paddingStyles2}
        >
          <Grid container style={{ padding: "30px" }}>
            <Grid item sm={4} xs={12}>
              <List>
                <ListItem>
                  <Typography variant="h5">
                    Links
                    <div style={{ marginTop: "15px", marginBottom: "-15px" }}>
                      <MaximizeIcon fontSize="large" color="action" />
                    </div>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>Media</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Career</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={4} xs={12}>
              <List>
                <ListItem>
                  <Typography variant="h5">
                    Follow
                    <div style={{ marginTop: "15px", marginBottom: "-15px" }}>
                      <MaximizeIcon fontSize="large" color="action" />
                    </div>
                  </Typography>
                </ListItem>
                <Grid container style={{ paddingLeft: 15 }}>
                  <Grid item xs={2}>
                    <FacebookIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <TwitterIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <LinkedInIcon />
                  </Grid>
                </Grid>
              </List>
            </Grid>
            <Grid item sm={4} xs={12}>
              <List>
                <ListItem>
                  <Typography variant="h5">
                    Contact Us
                    <div style={{ marginTop: "15px", marginBottom: "-15px" }}>
                      <MaximizeIcon fontSize="large" color="action" />
                    </div>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Opposite Rajendra Nagar, Police Station, A B Road, Indore –
                    452012, MP, India Ph. : +(91)-(731)-4058247, 4083225
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <div style={{ margin: "0 auto" }}>
              <hr></hr>
              <Typography>
                Copyright &#169; 2021 Frozen Fish Cold Storage.
              </Typography>
            </div>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
