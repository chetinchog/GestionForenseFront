import React from "react";

function TopBar({ rol, name }) {
  return (
    <div>
      {name} ({rol})
    </div>
  );
}

export default TopBar;
