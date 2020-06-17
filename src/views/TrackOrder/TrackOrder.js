import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
// import image from "https://wallpaperaccess.com/full/767277.jpg";
import { login } from "../../api/api";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import { toast } from 'react-toastify';
import HeaderLinks from "components/Header/HeaderLinks.js";
import SearchIcon from '@material-ui/icons/Search';
import SpanningTable from "../../components/SpanningTable/SpanningTable"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { trackOrder } from "../../api/api"

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};
const useStyles = makeStyles(styles);
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//     },
//     button: {
//         marginRight: theme.spacing(1),
//     },
//     instructions: {
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//     },
// }));

function getSteps() {
    return ['Your Order is created', 'Your Order is preparing', 'Your order was delivered'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Your Order is created';
        case 1:
            return 'Your Order is preparing';
        case 2:
            return 'Your order was delivered';
        default:
            return 'Unknown step';
    }
}

export default function LandingPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [activeStep, setActiveStep] = React.useState(-1);
    const [id, setId] = React.useState("")
    const [result, setResult] = React.useState({})
    const [expansion, setExpansion] = React.useState(true)

    const classes = useStyles();
    const { ...rest } = props;
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const dashboardRoutes = [];

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const findOrder = () => {
        if (!id.length) return true
        let params = {
            orderID: id
        }
        trackOrder(params).then(res => {
            setResult(res.data && res.data)
            setActiveStep(res.data && res.data.duration > 0 ? 1 : 2)
            setExpansion(res.data.hasOwnProperty("_id") ? false : true)
            console.log(res.data);
        })
    }
    console.log(activeStep);
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Food x Wood"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(https://wallpaperaccess.com/full/767277.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Find Your Order's Status</h4>
                                    </CardHeader>
                                    <p className={classes.divider}><hr /></p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Enter Order Number"
                                            id="orderNo"
                                            value={id}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={(e) => setId(e.target.value)}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <SearchIcon className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />

                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button color="primary" size="lg" onClick={findOrder}>
                                            Find Order
                    </Button>
                                    </CardFooter>
                                </form>
                            </Card>

                        </GridItem>
                    </GridContainer>
                    <ExpansionPanel >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <center>
                                <Stepper style={{ "width": "1073px" }} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                    {steps.map((label, i) => (
                                        <Step key={label}>
                                            {i === 1 ?
                                                <StepLabel StepIconComponent={ColorlibStepIcon}>{result.hasOwnProperty("_id") && result.duration > 0 ? `Your Order is preparing & will be delivered within ${result.duration} hrs` : label}</StepLabel>
                                                :
                                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>

                                            }
                                        </Step>
                                    ))}
                                </Stepper>
                            </center>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <SpanningTable data={result} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>


                </div>
                {/* <Footer whiteFont /> */}
            </div>
        </div>
    );
}
