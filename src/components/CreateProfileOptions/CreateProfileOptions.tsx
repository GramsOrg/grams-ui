import React from 'react';

import './CreateProfileOptions.css';

export interface ICreateProfileOptionsProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;
}

const defaultProps = {
  dir: 'ltr',
  inverted: false
};

const CreateProfileOptions = (props: ICreateProfileOptionsProps) => {

  return (
    <>
    </>
  );
};

CreateProfileOptions.defaultProps = defaultProps;

export default CreateProfileOptions;
