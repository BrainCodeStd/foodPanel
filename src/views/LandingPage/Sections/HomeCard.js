import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import "./Section.css"
import { addTodo } from "../../../store/actions"
import { connect } from 'react-redux'
const useStyles = makeStyles(styles);

function SectionLogin(props) {
    const [error, setError] = useState(false)
    const [serve, setServe] = useState(null)
    const classes = useStyles();
    const addToCart = () => {
        if (!serve) {
            setError(true);
            return
        }
        console.log(props)
        // props.dispatch(addTodo(serve))
    }

    return (
        <div>
            <div >
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <div className="content">
                            <div id="container">
                                <img width="250px" height="200px" src="https://i.pinimg.com/originals/29/73/7b/29737b8c90b655105668c79f5e23c743.jpg" alt="food Image" />
                            </div>
                            <div className="ribbon2">upto 50% off</div>
                            <h4 >Pasta</h4>
                            <p>Very delicious food</p>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <form>
                                        <TextField
                                            error={error}
                                            onChange={(e) => setServe(e.target.value)}
                                            id="standard-number"
                                            label="Serving"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Button variant="filled" onClick={addToCart} style={{ backgroundColor: "#F44336", padding: "16px" }}><i className="fa fa-plus" aria-hidden="true"></i></Button>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}

export default connect()(SectionLogin)
