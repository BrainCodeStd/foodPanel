import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import "./Section.css"

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
        if (+props.data.menu.discount) {
            amount = amount - ((+amount * +props.data.menu.discount) / 100);
        }
        let payload = {
            order: {
                food_id: props.data.menu._id,
                name: props.data.menu.foodName,
                serves: serve,
                amount: amount,
                discount: props.data.menu.discount
            },
            total: amount,
            discount: props.data.menu.discount,
            people: +serve
        }
        setServe("")
        props.addOrder(payload);

    }
    console.log(props);
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
                            <p>{props.data && props.data.menu.price} RS/-</p>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <form>
                                        <TextField
                                            error={error}
                                            value={serve}
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
        orders: state.orderedFoods,
        total: state.total,
        people: state.people
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addOrder: (payload) => dispatch({ type: actionTypes.ADD_TO_CART, payload: payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionLogin)
