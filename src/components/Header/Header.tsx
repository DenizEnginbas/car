import type { FC } from 'react';
import React from 'react';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return <div className="nc-Header sticky inset-x-0 top-0 z-40 w-full" />;
};

export default Header;
