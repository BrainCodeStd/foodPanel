import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { getAllWords } from "../../api/api"


const initialState = {
    rows: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ROWS': return {
            rows: [...state.rows, action.payload]
        }
        default: throw new Error('Unexpected action');
    }
};


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable(props) {

    const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [page, setPage] = React.useState(0);
    const [state, dispatch] = React.useReducer(reducer, initialState);


    const columns = [
        { id: 'id', label: 'Order ID', minWidth: 170 },
        { id: 'date', label: 'Order Date', minWidth: 170 },
        {
            id: 'status',
            label: 'Order Status',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'fname',
            label: 'First Name',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'lname',
            label: 'Last Name',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'address',
            label: 'Shipping Address',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'postCode',
            label: 'Shipping Post Code',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'city',
            label: 'Shipping City',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'tel',
            label: 'Telephone Number',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'orders',
            label: 'Product Ordered',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'qty',
            label: 'Quantity',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'price',
            label: 'Total Order Price',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'details',
            label: 'Delivery Details',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'note',
            label: 'Customer Note',
            minWidth: 170,
            align: 'right',
        },
    ];
    function createData(id, date, status, fname, lname, address, postCode, city, tel, orders, qty, price, details, note, ) {
        return {
            id,
            date,
            status,
            fname,
            lname,
            address,
            postCode,
            city,
            tel,
            orders,
            qty,
            price,
            details,
            note,
        };
    }
    const setPageHandler = () => {
        setPage((pre) => pre + 1)
    }
    const fetch = () => {
        let params = {
            page: page ? +page + 1 : 1,
            status: props.filter ? props.filter : "",
            search: props.search ? props.search : ""
        }
        getAllWords(params).then((res) => {
            let data = (res.data.data);
            
            let rows = data && data.length ?
                data.map(element => (
                    createData(
                        element.orderId,
                        element.orderDate,
                        element.orderStatus,
                        element.firstname,
                        element.lastname,
                        element.shipping.address1,
                        element.shipping.postCode,
                        element.shipping.city,
                        element.telephone,
                        element.orderId,
                        element.quantity,
                        element.totalOrderPrice,
                        element.orderId,
                        element.customerNote,
                    )
                ))
                : []
            dispatch({ type: 'SET_ROWS', payload: rows })
        })
    }

    React.useEffect(() => {
        fetch()
    }, [])

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        console.log(state.rows)
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                // rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={state.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={setPageHandler}
                nextIconButtonProps={{ disabled: false }}
                backIconButtonProps={{ disabled: false }}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}








