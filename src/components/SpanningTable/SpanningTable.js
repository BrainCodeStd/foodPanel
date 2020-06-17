import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



export default function SpanningTable(props) {
    const classes = useStyles();
    function createData(name, order_for, discount, amount) {
        return { name, order_for, discount, amount };
    }

    const rows = props.data.hasOwnProperty("_id") && props.data.orderedFoods.length ?
        props.data.orderedFoods.map((element) => {
            return createData(element.name, element.serves, element.discount, element.amount)
        })
        : []
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">People</TableCell>
                        <TableCell align="right">Discount</TableCell>
                        <TableCell align="right">Amount</TableCell>
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

                        <TableCell align="right" colSpan="1">Discount</TableCell>
                        <TableCell align="right" colSpan="2">{props.data.hasOwnProperty("_id") && props.data.discount ? props.data.discount : 0}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell colSpan="1">

                        </TableCell>

                        <TableCell align="right" colSpan="1">Total served For</TableCell>
                        <TableCell align="right" colSpan="2">{props.data.hasOwnProperty("_id") && props.data.NofPersons ? props.data.NofPersons : ""}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell colSpan="1">

                        </TableCell>

                        <TableCell align="right" colSpan="1">Total</TableCell>
                        <TableCell align="right" colSpan="2">{props.data.hasOwnProperty("_id") && props.data.totalPrice ? props.data.totalPrice : ""}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center" colSpan="4">

                            <form noValidate autoComplete="off" style={{ width: "100%" }}>
                                <TextField style={{ width: "100%" }} value={props.data.hasOwnProperty("_id") && props.data.delivery.deliveryAddress ? props.data.delivery.deliveryAddress : ""} disabled id="outlined-basic" label="Enter Delivery Address" variant="outlined" multiline />
                            </form>

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
