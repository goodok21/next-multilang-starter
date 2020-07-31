import React from 'react';

const Header: React.FC<{ readonly title: string }> = ({ title }) => (
  <div>
    <h4>{title}</h4>
  </div>
);

export default Header;
