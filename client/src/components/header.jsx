// view to display header in splash page...not used in current iteration of app

import React from 'react';

var Header = (props) => {
  const searchStyle={
    margin: "10px",
  };
  const btnStyle={
    margin: "10px"
  };
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Logo Goes Here</a>
        </div>
        <form className="form-inline">
          <input style={searchStyle} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button style={btnStyle} className="btn btn-outline-success btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Header;