import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();
    let { data } = props;
    const columns = [
        {
            Header: props => <span style={{ color: 'black' }}>Order ID</span>,
            accessor: 'id',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Name</span>,
            accessor: 'name',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Price</span>,
            accessor: 'price',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Product ID</span>,
            accessor: 'product_id',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Quantity</span>,
            accessor: 'quantity',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>SKU</span>,
            accessor: 'sku',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Sub Total</span>,
            accessor: 'subtotal',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Sub Total Tax</span>,
            accessor: 'subtotal_tax',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Tax Class</span>,
            accessor: 'tax_class',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Total</span>,
            accessor: 'total',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Total Tax</span>,
            accessor: 'total_tax',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        {
            Header: props => <span style={{ color: 'black' }}>Variation ID</span>,
            accessor: 'variation_id',
            minWidth: 170,
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        color: 'black',
                    },
                };
            },
        },
        // {
        //     Header: props => <span style={{ color: 'black' }}>Order ID</span>,
        //     accessor: 'id',
        //     minWidth: 170,
        //     getProps: (state, rowInfo, column) => {
        //         return {
        //             style: {
        //                 color: 'black',
        //             },
        //         };
        //     },
        // }

    ]
    function createData(id, name, price, product_id, quantity, sku, subtotal, subtotal_tax, tax_class, total, total_tax, variation_id) {
        return {
            id, name, price, product_id, quantity, sku, subtotal, subtotal_tax, tax_class, total, total_tax, variation_id
        };
    }
    let rows = data && data.length ?
        data.map(element => (
            createData(
                element.id,
                element.name,
                element.price,
                element.product_id,
                element.quantity,
                element.sku,
                element.subtotal,
                element.tax_class,

                element.total,
                element.total_tax,
                element.variation_id,

            )
        ))
        : []
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
                <ReactTable
                    // ref={(refReactTable) => { this.refReactTable = refReactTable; }}
                    data={rows}
                    pages={data.length ? Math.ceil(data.length / 10) : 1}
                    showPageSizeOptions={false}
                    loading={false}
                    sortable={false}
                    filterable={false}
                    overflow={"unset"}
                    columns={columns}
                    defaultPageSize={10}
                    showPagination={true}
                    showPaginationBottom
                    showPaginationTop={false}
                    className="-striped -highlight"
                />
            </Dialog>
        </div>
    );
}
