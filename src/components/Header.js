import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h2 className="title text-center text-4xl font-bold py-20 px-30">See The Latest</h2>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  );
}

export default Header;