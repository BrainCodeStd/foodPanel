import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import { getTodayOrders, getAllMenu } from "../../api/api"
import { drop_down } from "../../assets/constants/Drop"
import HomeCards from "./Sections/HomeCard"
import Modal from "../../components/Modals/FullScreenModal"
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [filter, setFilter] = React.useState(drop_down[0])
  const [cards, setCards] = React.useState([])
  const [show, setShow] = React.useState(false)
  const [menutitle, setMenutitle] = React.useState("Today's Menu")
  const classes = useStyles();
  const { ...rest } = props;
  const [orderedFood, setOrderedFood] = useState([]);
  const fetchToday = () => {
    setMenutitle("Today's Menu")
    getTodayOrders().then(res => {
      console.log(res.data)
      setCards(res.data);
    })
  }
  const fetchAll = () => {
    setMenutitle("All Menu Sheet")
    getAllMenu().then(res => {
      setCards(res.data);
    })
  }
  const openCart = () => {
    setShow(true)
  }

  React.useEffect(() => {
    fetchToday()
  }, [])
  return (
    <div>
      <Modal open={show} handleClose={() => setShow(false)} />
      <Header
        fetchToday={fetchToday}
        color="transparent"
        routes={dashboardRoutes}
        brand="Food x Wood"
        rightLinks={<HeaderLinks openCart={openCart} fetchAll={fetchAll} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/backgd.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>DIET always starts tommarrow.</h1>
              <h4>
                Bring your food At your Doorstep with Love.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="#"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <GridContainer style={{ marginTop: "15px" }}>
            <GridItem xs={12} sm={12} md={3} style={{ height: "50px", background: "black" }}>
              <h4 style={{ padding: "11px 0px" }}>{menutitle}</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={9}>

            </GridItem>
          </GridContainer>
          <GridContainer style={{ marginTop: "20px" }}>
            {cards.map((element, index) => (
              <GridItem xs={12} sm={12} md={3} key={index}>
                <HomeCards data={element} />
              </GridItem>

            ))}
          </GridContainer>

        </div>
      </div>
    </div>
  );
}
