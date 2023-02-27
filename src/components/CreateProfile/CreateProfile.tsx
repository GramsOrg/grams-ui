import React, { useState } from 'react';


import { Accordion, Button, Form, Icon, Input, Label, Message, Progress } from 'semantic-ui-react';

import './CreateProfile.css';

export interface ICreateProfileProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * The label for the name input field.
   */
  nameLabel?: string;

  /**
   * The label for the password input field.
   */
  passwordLabel?: string;

  /**
   * The label for the confirm password input field.
   */
  confirmPasswordLabel?: string;

  /**
   * The label for the advanced options accordion.
   */
  advancedOptionsLabel?: string;

  /**
   * The label for the developer options checkbox.
   */
  developerLabel?: string;

  /**
   * The label for the create profile button.
   */
  createProfileLabel?: string;

  /**
   * The callback function to be called when the user creates a profile.
   * @param {string} name - The user's name.
   * @param {string} password - The user's password.
   * @param {boolean} isDeveloper - If the user opted for developer mode
   */
  onCreateProfile?: (name: string, password: string, isDeveloper: boolean) => void;
}

const defaultProps = {
  dir: 'ltr',
  inverted: false,
  nameLabel: 'Name',
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm password',
  createProfileLabel: 'Create Profile',
  advancedOptionsLabel: 'Advanced options',
  developerLabel: 'Enable developer mode'
};

const CreateProfile = (props: ICreateProfileProps) => {

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [developerMode, setDeveloperMode] = useState<boolean>(false);

  const position: 'left' | undefined = props.dir === 'ltr' ? 'left' : undefined;

  const isValid = (): boolean => {
    return false;
  }

  return (
    <Form>
      <Form.Input
        fluid
        icon='user'
        iconPosition={position}
        placeholder={props.nameLabel}
        value={name}
        onChange={ (e) => setName(e.target.value) }
      />
      <Form.Input
        fluid
        icon='key'
        iconPosition={position}
        placeholder={props.passwordLabel}
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Form.Input
        fluid
        icon='key'
        iconPosition={position}
        placeholder={props.confirmPasswordLabel}
        value={confirmPassword}
        onChange={ (e) => setConfirmPassword(e.target.value) }
      />
      <Button
          fluid
          type="submit"
          primary
          disabled={!isValid()}
        >
          {props.createProfileLabel}
        </Button>
    </Form>
  );
};

CreateProfile.defaultProps = defaultProps;

export default CreateProfile;
