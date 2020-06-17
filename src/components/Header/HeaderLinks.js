/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import Menu from '@material-ui/core/Menu';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Badge from '@material-ui/core/Badge';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { withRouter } from "react-router-dom";
const useStyles = makeStyles(styles);
import { connect } from "react-redux";
import { drop_down } from "../../assets/constants/Drop"

function HeaderLinks(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, val) => {
    setAnchorEl(null);
    props.filterBy(val)
  };
  React.memo(() => props.cartCounter, [props.cartCounter])

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Menu Sheet"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            onClick={() => {
              props.history.push("/menu")             
            }}
            color="transparent"
            className={classes.navLink}
          >
            <FastfoodIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Track your order"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            onClick={() => props.history.push("/trackOrder")}
            color="transparent"
            className={classes.navLink}
          >
            <AssessmentIcon />
          </Button>
        </Tooltip>
      </ListItem>


      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Cart"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            onClick={props.openCart}
            color="transparent"
            className={classes.navLink}
          >
            <Badge badgeContent={props.orders ? props.orders.length : 0} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
const mapStateToProps = state => {
  return {
    orders: state.orderedFoods
  }
}
export default connect(mapStateToProps)(withRouter(HeaderLinks)) 
