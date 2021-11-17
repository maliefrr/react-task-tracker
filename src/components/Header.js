import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
	const location = useLocation();

	return (
		<header className="header">
			<h1>{props.title}</h1>
			{location.pathname === "/" && <Button text={props.showAdd ? "Close" : "Add"} color={props.showAdd ? "#cf1406" : "black"} onClick={props.onAdd} />}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
