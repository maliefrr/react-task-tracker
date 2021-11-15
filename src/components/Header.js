import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
	const onClick = () => {
		alert("click");
	};
	return (
		<header className="header">
			<h1>{props.title}</h1>
			<Button text="Add" color="black" onClick={onClick} />
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
