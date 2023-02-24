import React from 'react';

import './ColorButton.css';

export interface IColorButtonProps {
  color: string
  onClick?: (color: string) => void
}

const ColorButton = (props: IColorButtonProps) => {
  const {color, onClick} = props;
  return <button style={{color}} onClick={() => onClick && onClick(color)}>Color Button</button>
};

export default ColorButton;
