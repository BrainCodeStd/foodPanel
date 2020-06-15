import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import "./Section.css"
const useStyles = makeStyles(styles);

export default function SectionLogin() {
    const classes = useStyles();
    return (
        <div>
            <div >
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <div className="content">
                            <div id="container">
                                <img width="250px" height="200px" src="https://i.pinimg.com/originals/29/73/7b/29737b8c90b655105668c79f5e23c743.jpg" alt="food Image" />
                            </div>
                            <h4 >Pasta</h4>
                            <p>Very delicious food</p>
                            <Button variant="filled" style={{backgroundColor:"#F44336"}}>Add to Cart</Button>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
