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
import * as actionTypes from "../../../store/actionConstants/index";
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
        let forServingAmount = serve / props.data.menu.serves;
        let amount = forServingAmount * (+props.data.menu.price)
        let payload = {
            food_id: props.data.menu._id,
            name: props.data.menu.foodName,
            serves: serve,
            amount: amount,
            discount: props.data.menu.discount
        }
        props.addOrder(payload);

    }
    console.log(props.orders)
    return (
        <div>
            <div >
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <div className="content">
                            <div id="container">
                                <img width="250px" height="200px" src={`${props.data && props.data.menu.image}`} alt="food Image" />
                            </div>
                            {

                                props.data && props.data.menu.discount ?
                                    <div className="ribbon2">upto {props.data && props.data.menu.discount}% off</div>
                                    : null
                            }
                            <h4 >{props.data && props.data.menu.foodName}</h4>
                            <p>It serves {props.data && props.data.menu.serves} persons</p>
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
const mapStateToProps = state => {
    return {
        orders: state.orderedFoods
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addOrder: (payload) => dispatch({ type: actionTypes.ADD_TO_CART, payload: payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionLogin)
