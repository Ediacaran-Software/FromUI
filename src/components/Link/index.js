import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Link = ({ text }) => (
  <a className="link" href="//:0">
    这是一个Link按钮{text}
  </a>
);

Link.propTypes = {
  text: PropTypes.any,
};

export default Link;
