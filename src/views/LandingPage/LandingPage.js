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

// Sections for this page
import Content from "./Sections/Content.js";

import { drop_down } from "../../assets/constants/Drop"
import HomeCards from "./Sections/HomeCard"
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [filter, setFilter] = React.useState(drop_down[0])
  const classes = useStyles();
  const { ...rest } = props;
  const [orderedFood, setOrderedFood] = useState([]);

  const AddCart = (serve) => {
    let a = orderedFood;
    a.push(serve)
    setOrderedFood(a)
    console.log("length", orderedFood)
  }
  React.useEffect(()=>{},[orderedFood])
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Food x Wood"
        rightLinks={<HeaderLinks cartCounter={orderedFood.length}/>}
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>

            </GridItem><GridItem xs={12} sm={12} md={3}>
              <Button>
                Move
              </Button>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3} style={{ height: "50px", background: "black" }}>
              <h4 style={{ padding: "11px 0px" }}>Today's Menu</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={9}>

            </GridItem>
          </GridContainer>
          <GridContainer style={{ marginTop: "20px" }}>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards AddCart={AddCart} />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
          </GridContainer>
          <GridContainer style={{ marginTop: "20px" }}>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <HomeCards />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
