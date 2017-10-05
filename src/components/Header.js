import React from 'react';

// if you dont need other methods other than render, it doesnt make sense to use
// entire react component - use stateless functional component
// will need to get props passed into to use
const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  );
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}

export default Header;
