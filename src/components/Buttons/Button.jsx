import React from "react";
import "./Button.scss";

export default function Button({ mode = "filled", children, Icon, ...props }) {
  let buttonClass = `button ${mode}-button`;

  if (props.className) {
    buttonClass += " " + props.className;
  }

  if (Icon) {
    buttonClass += " icon-button";
  }

  return (
    <>
      <button className={buttonClass} {...props}>
        {Icon && (
          <span className="button-icon">
            <Icon />
          </span>
        )}

        <span>{children}</span>
      </button>
    </>
  );
}
