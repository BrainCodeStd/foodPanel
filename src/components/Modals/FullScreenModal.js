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
    const classes = useStyles();
    let { data } = props;
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

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
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2"> Sub Total</TableCell>
                                <TableCell align="right" colSpan="2">RESULT</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2">Discount</TableCell>
                                <TableCell align="right" colSpan="2">RESULT</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2">GST</TableCell>
                                <TableCell align="right" colSpan="2">RESULT</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2">Total</TableCell>
                                <TableCell align="right" colSpan="2">RESULT</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan="1">

                                </TableCell>

                                <TableCell align="right" colSpan="2"><Button variant="filled">Place Order</Button></TableCell>

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
        orders: state.orderedFoods
    }
}
export default connect(mapStateToProps)(FullScreenDialog);