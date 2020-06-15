import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import InputAdornment from "@material-ui/core/InputAdornment";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import SearchIcon from '@material-ui/icons/Search';

// Sections for this page

import { drop_down } from "../../assets/constants/Drop"
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const [filter, setFilter] = React.useState(drop_down[0])
    const classes = useStyles();
    const { ...rest } = props;


    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Food x Wood"
                rightLinks={<HeaderLinks />}
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
                        <GridItem xs={12} sm={12} md={3} style={{ height: "50px", background: "black" }}>
                            <h4 style={{ padding: "11px 0px" }}>Track your order</h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9}>

                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Card>
                                <CardBody>
                                    <CustomInput
                                        labelText="First Name..."
                                        id="first"
                                        value={"Search"}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        onChange={(e) => console.log(e.target.value)}
                                        inputProps={{
                                            type: "text",
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <SearchIcon className={classes.inputIconsColor} />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                        </GridItem>
                    </GridContainer>

                </div>
            </div>
        </div>
    );
}
