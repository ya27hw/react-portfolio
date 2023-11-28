"use client";
import React, { useState } from "react";
import { scaleDown as Menu, State } from "react-burger-menu";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuStateChange = (state: State) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <p>Placeholder for NavBar</p>
  );
}

export default NavBar;
