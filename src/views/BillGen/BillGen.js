import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "20px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();
    React.useEffect(() => {
        window.print();
    }, [])

    let { total, orderProduct, deliveryDate, shippingName, shippingAddress, shippingPostcode, shippingCity, telePhone, orderId, invoiceName, invoiceAddress, invoicePostcode, invoiceCity } = props.history.location.state;

    const products = () => {

    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "left" }}>
                                    <b>Delivery Date:</b>{deliveryDate ? deliveryDate : ""}
                                </h6>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "center" }}><b>Order ID:</b>{orderId}
                                </h6>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "left" }}><b>Shipping Name:</b>{shippingName}
                                </h6>
                            </Grid>
                            <Grid item xs={5}>

                                <h6 style={{ textAlign: "center" }}><b>Invoice Name:</b>{invoiceName}
                                </h6>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "left" }}><b>Shipping Address:</b>{shippingAddress}
                                </h6>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "center" }}><b>Invoice Address:</b>{invoiceAddress}
                                </h6>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "left" }}><b>Shipping Postcode:</b>{shippingPostcode}
                                </h6>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "center" }}><b>Invoice Postcode:</b>{invoicePostcode}
                                </h6>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "left" }}><b>Shipping City:</b>{shippingCity}
                                </h6>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "center" }}><b>Invoice City:</b>{invoiceCity}</h6>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5}>
                                <h6 style={{ textAlign: "left" }}><b>Telephone:</b>{telePhone}
                                </h6>
                            </Grid>
                            <Grid item xs={5}>

                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>


                        <Grid container spacing={3} style={{ backgroundColor: "#E3E3E5" }}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={7}>
                                <h4 style={{ fontWeight: "bolder", textAlign: "left" }}>Product</h4>
                            </Grid>
                            <Grid item xs={3}>
                                <h4 style={{ fontWeight: "bolder" }}>Quantity</h4>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                        </Grid>
                        {orderProduct.map((element, i) => (
                            <>
                                <Grid container spacing={3}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <h6 style={{ fontWeight: "normal", textAlign: "left" }}>{element.name}</h6>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <h6>{element.quantity}</h6>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </>

                        ))}
                        <Grid container spacing={3} style={{ backgroundColor: "#E3E3E5" }}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={6}>

                            </Grid>
                            <Grid item xs={3}>
                                <h4 style={{ fontWeight: "bolder" }}>Total</h4>
                            </Grid>
                            <Grid item xs={2}>
                                <h4 style={{ fontWeight: "normal", textAlign: "left" }}>{total}</h4>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
    );
}
