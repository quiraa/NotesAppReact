import React from "react";
import HeaderLogo from "../HeaderLogo";
import SearchField from "../textfield/SearchField";

function HeaderContainer({ query, onInput }) {
  return (
    <header>
      <nav>
        <HeaderLogo />
        <SearchField query={query} onInput={onInput} />
      </nav>
    </header>
  );
}

export default HeaderContainer;
