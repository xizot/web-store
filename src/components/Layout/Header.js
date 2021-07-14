import {
	Typography,
	AppBar,
	makeStyles,
	IconButton,
	Badge,
	Toolbar,
} from "@material-ui/core";
import { LocalMall, Person, Menu } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../reducers/ui";
import SearchInput from "../UI/SearchInput";
const useStyles = makeStyles((theme) => ({
	root: {},
	toolBar: {
		width: "100%",
	},
	logo: {
		flex: 1,
		display: "flex",
		alignItems: "center",
	},
	menuButton: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},

	home: {
		color: "inherit",
		textDecoration: "none",
		display: "flex",
		alignItems: "center",
		"& img": {
			width: 24,
			marginRight: 10,
			height: "auto",
			maxHeight: "100%",
			[theme.breakpoints.down("sm")]: {
				display: "none",
			},
		},
		"&>h2": {
			[theme.breakpoints.down("sm")]: {
				fontSize: "1rem",
			},
		},
	},
	sectionDesktop: {
		flex: 1,
		display: "flex",
		justifyContent: "flex-end",
	},
	search: {
		flex: 3,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	navLink: {
		color: "inherit",
	},
	iconButton: {
		[theme.breakpoints.down("sm")]: {
			padding: "5px",
		},
	},
}));
const Header = ({ showMenu, showCart }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.data);

	const numberOfCartItems = cartItems.reduce((cartNumber, item) => {
		return cartNumber + item.quantity;
	}, 0);

	const toggleCartModalHandler = () => {
		dispatch(uiActions.toggleCartModal());
	};

	const toggleSideBarHandler = () => {
		dispatch(uiActions.toggleSideBar());
	};

	return (
		<AppBar position="fixed" className={classes.root}>
			<Toolbar className={classes.toolBar}>
				<div className={classes.logo}>
					{showMenu && (
						<IconButton
							aria-label="menu"
							color="inherit"
							className={`${classes.iconButton} ${classes.menuButton}`}
							onClick={toggleSideBarHandler}
						>
							<Menu />
						</IconButton>
					)}

					<Link to="/" className={classes.home}>
						<img
							src={`${process.env.PUBLIC_URL}/img/store-icon.png`}
							alt="store icon"
						/>
						<Typography variant="h6" component="h2" noWrap>
							FAMILY STORE
						</Typography>
					</Link>
				</div>
				<div className={classes.search}>
					<SearchInput />
				</div>

				<div className={classes.sectionDesktop}>
					<Link to="/account" className={classes.navLink}>
						<IconButton
							aria-label="my account"
							color="inherit"
							className={classes.iconButton}
						>
							<Person />
						</IconButton>
					</Link>
					{showCart && (
						<IconButton
							aria-label="show number products"
							color="inherit"
							className={classes.iconButton}
							onClick={toggleCartModalHandler}
						>
							<Badge
								badgeContent={numberOfCartItems}
								color="secondary"
							>
								<LocalMall />
							</Badge>
						</IconButton>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};
export default Header;
