import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import * as actionTypes from "../../store/actionConstants/index";
import { createOrder } from "../../api/api"
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: "black"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
    const [stotal, setStotal] = React.useState(0)
    const [address, setAddress] = React.useState("")
    const classes = useStyles();
    let { data } = props;
    function createData(name, order_for, discount, amount, action) {
        return { name, order_for, discount, amount, action };
    }

    const rows = props.orders && props.orders.length ?
        props.orders.map((element, i) => {
            return createData(element.name, element.serves, element.discount, element.amount, <Button variant="contained" color="secondary" style={{ padding: "10px" }} onClick={() => props.remove({ index: i, total: element.amount, discount: element.discount, people: element.serves })}>x</Button >)
        })
        : []
    //onClick={() => props.remove(element.food_id)}
    const createOrders = () => {
        let payload = {
            orderedFoods: props.orders,
            totalPrice: props.total - props.discount,
            NofPersons: props.people,
            discount: props.discount,
            delivery: {
                deliveryAddress: address,
                deliveryCharges: 0
            },
            gst: 0,
            amountPayed: true
        }
        createOrder(payload).then(res => {
            props.handleClose();
            props.empty()
        })
    }
    return (
        <div>

            <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Ordered Product
                         </Typography>
                    </Toolbar>
                </AppBar>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">People</TableCell>
                                <TableCell align="right">Discount</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.order_for}</TableCell>
                                    <TableCell align="right">{row.discount}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">{row.action}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2"> Sub Total</TableCell>
                                <TableCell align="right" colSpan="2">{props.total}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2">Discount</TableCell>
                                <TableCell align="right" colSpan="2">{props.discount}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2">Total served For</TableCell>
                                <TableCell align="right" colSpan="2">{props.people}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2">Total</TableCell>
                                <TableCell align="right" colSpan="2">{props.total - props.discount}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="4">
                                    <form noValidate autoComplete="off">
                                        <TextField onChange={(e) => setAddress(e.target.value)} id="outlined-basic" label="Enter Delivery Address" variant="outlined" multiline />
                                    </form>

                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="3">

                                </TableCell>

                                <TableCell align="right" colSpan="2">
                                    <Button variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<Icon>send</Icon>}
                                        onClick={() => {
                                            alert("Your order placed")
                                            createOrders()

                                        }
                                        }>Place Order</Button></TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        orders: state.orderedFoods,
        total: state.total,
        discount: state.discount,
        people: state.people
    }
}
const mapDispatchToProps = dispatch => {
    return {
        remove: (payload) => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: payload }),
        empty: () => dispatch({ type: actionTypes.EMPTY_CART, payload: { order: [], total: 0, discount: 0, people: 0 } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullScreenDialog);