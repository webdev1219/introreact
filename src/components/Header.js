import React from "react";

function Header(props) {
  const { title } = props;
  console.log(props);
  return <header>Header {title}</header>;
}

export default Header;
