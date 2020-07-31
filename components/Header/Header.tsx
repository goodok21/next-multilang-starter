import React from 'react';

const Header: React.FC<{ readonly title: string }> = ({ title }) => (
  <div>{title}</div>
);

export default Header;
