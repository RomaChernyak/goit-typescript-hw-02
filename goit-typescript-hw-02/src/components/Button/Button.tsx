import React, { FC } from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

interface ButtonProps {
    onLoadMore?: () => void;
    text: string;
};

export const Button: FC<ButtonProps> = ({ onLoadMore, text }) => {
    return (
        <button
            className={css.button_loadmore}
            onClick={onLoadMore}>
            {text}
        </button>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func,
    text: PropTypes.string.isRequired,
};