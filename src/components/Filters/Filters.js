/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import InputAdornment from '@material-ui/core/InputAdornment';
import Menu from '@material-ui/core/Menu';
import Button from "components/CustomButtons/Button.js";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(styles);
import { drop_down } from "../../assets/constants/Drop"
export default function HeaderLinks(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = (event, val) => {
        setAnchorEl(null);
        if (val) props.filterBy(val)

    };


    return (
        <List className={classes.list} >
            <ListItem style={{ background: "black" }} className={classes.listItem}>
                <Button
                    onClick={handleClick}
                    color="transparent"
                    className={classes.navLink}
                >
                    Filter <ArrowDropDownIcon className={classes.icons} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={(e) => handleClose(e, "")}
                >
                    <MenuList>
                        {drop_down.map(val => (
                            <MenuItem onClick={(event) => handleClose(event, val)}>{val}</MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </ListItem>
            <ListItem className={classes.listItem}>
                <div className={classes.listItem} style={{ backgroundColor: "white", marginLeft: "10px" }}>
                    <TextField
                        className={classes.margin}
                        id="input-with-icon-textfield"
                        onChange={props.onChangeSearch}
                        label="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon className={classes.icons} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </ListItem>
        </List>
    );
}
