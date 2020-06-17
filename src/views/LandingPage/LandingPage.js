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
import { connect } from "react-redux";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const menu = [
  {
    "_id": "5ee820cd5df14100175c547c",
    "menu": {
      "_id": "5ee820cd5df14100175c547c",
      "rating": {
        "stars": 0,
        "people": 0
      },
      "active": true,
      "foodName": "Mac n Cheese",
      "image": "https://www.seasonsandsuppers.ca/wp-content/uploads/2013/01/mac-cheese-3.jpg",
      "price": 100,
      "serves": 2,
      "discount": 10,
      "createdAt": "2020-06-16T01:30:53.309Z",
      "updatedAt": "2020-06-16T01:30:53.309Z",
      "__v": 0
    }
  },
  {
    "_id": "5ee821175df14100175c547d",
    "menu": {
      "_id": "5ee821175df14100175c547d",
      "rating": {
        "stars": 0,
        "people": 0
      },
      "active": true,
      "foodName": "Pasta",
      "image": "https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 100,
      "serves": 1,
      "discount": 0,
      "createdAt": "2020-06-16T01:32:07.707Z",
      "updatedAt": "2020-06-16T01:32:07.707Z",
      "__v": 0
    }
  },
  {
    "_id": "5ee821835df14100175c547e",
    "menu": {
      "_id": "5ee821835df14100175c547e",
      "rating": {
        "stars": 0,
        "people": 0
      },
      "active": true,
      "foodName": "Beef steek",
      "image": "https://images8.alphacoders.com/842/thumb-350-842163.jpg",
      "price": 100,
      "serves": 1,
      "discount": 15,
      "createdAt": "2020-06-16T01:33:55.677Z",
      "updatedAt": "2020-06-16T01:33:55.677Z",
      "__v": 0
    }
  },
  {
    "_id": "5ee821b05df14100175c547f",
    "menu": {
      "_id": "5ee821b05df14100175c547f",
      "rating": {
        "stars": 0,
        "people": 0
      },
      "active": true,
      "foodName": "Beef steek simple",
      "image": "data:image/jpeg;base64,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",
      "price": 100,
      "serves": 1,
      "discount": 0,
      "createdAt": "2020-06-16T01:34:40.567Z",
      "updatedAt": "2020-06-16T01:34:40.567Z",
      "__v": 0
    }
  },
  {
    "_id": "5ee821e65df14100175c5480",
    "menu": {
      "_id": "5ee821e65df14100175c5480",
      "rating": {
        "stars": 0,
        "people": 0
      },
      "active": true,
      "foodName": "chicken steek simple",
      "image": "https://i.pinimg.com/originals/77/8e/c2/778ec27826b64de234c55f2a3b4598a3.jpg",
      "price": 100,
      "serves": 1,
      "discount": 0,
      "createdAt": "2020-06-16T01:35:34.236Z",
      "updatedAt": "2020-06-16T01:35:34.236Z",
      "__v": 0
    }
  },
  {
    "_id": "5ee84f2d0f736949cc32bad7",
    "menu": {
      "_id": "5ee84f2d0f736949cc32bad7",
      "rating": {
        "stars": 0,
        "people": 0
      },
      "active": true,
      "foodName": "Mac n Cheese",
      "image": "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg",
      "price": 220,
      "serves": 2,
      "discount": 0,
      "createdAt": "2020-06-16T04:48:45.780Z",
      "updatedAt": "2020-06-16T04:48:45.780Z",
      "__v": 0
    }
  }
]

function LandingPage(props) {
  const [filter, setFilter] = React.useState(drop_down[0])
  const [cards, setCards] = React.useState([])
  const [show, setShow] = React.useState(false)
  const [menutitle, setMenutitle] = React.useState("Today's Menu")
  const classes = useStyles();
  const { ...rest } = props;
  const [orderedFood, setOrderedFood] = useState([]);

  const fetchToday = () => {
    setMenutitle("Today's Menu")
    setCards(props.orderedMenu);
  }
  const fetchAll = () => {
    setMenutitle("All Menu Sheet")
    setCards(props.menu);
    // console.log(console.orderedMenu)
  }
  const openCart = () => {
    setShow(true)
  }

  React.useEffect(() => {
    if (props.fetchAll) {
      fetchAll()
    } else {
      fetchToday()
    }

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
            {console.log(cards)}
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
const mapStateToProps = state => {
  return {
    orders: state.orders,
    menu: state.menu,
    orderedMenu: state.orderedMenu
  }
}

export default connect(mapStateToProps)(LandingPage)
