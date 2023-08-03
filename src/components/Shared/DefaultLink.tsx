import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "@/stores";

const DefaultLink = (props: any) => {
  const { isSubMenuIcon, isMenuIcon } = useSelector((state) => state.settings);
  const { itemProps, to, label } = props;

  const onClick = (e: any) => {
    if (itemProps.hasSubMenu) {
      itemProps.toggleSubMenu(e);
    } else {
      itemProps.activateMe({
        newLocation: to,
        selectedMenuLabel: label,
      });
    }
  };
  if (itemProps.id === "Directories" || itemProps.id === "UiElements") {
    return <span className="g_heading">{itemProps.label}</span>;
  } else {
    return (
      <span
        className={window.location.pathname === itemProps.to ? "active" : ""}
      >
        <NavLink
          to={`${itemProps.to}`}
          onClick={onClick}
          className={
            window.location.pathname === itemProps.to
              ? isMenuIcon
              : isSubMenuIcon
          }
        >
          {itemProps.children[0].props.className
            ? itemProps.children
            : itemProps.label}
        </NavLink>
      </span>
    );
  }
};

export default DefaultLink;
