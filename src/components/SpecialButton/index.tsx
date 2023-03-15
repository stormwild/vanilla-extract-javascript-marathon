import React, { HTMLProps, MouseEventHandler } from 'react';

import { buttonStyle } from '../Button/style.css';

export interface SpecialButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: keyof typeof buttonStyle;
}

export const SpecialButton = ({
  children,
  onClick,
  color,
}: SpecialButtonProps) => {
  return (
    <button className={buttonStyle[color]} onClick={onClick}>
      {children}
    </button>
  );
};
