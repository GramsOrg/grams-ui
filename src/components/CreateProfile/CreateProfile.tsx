import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useDirection } from 'grams-common';

import { Accordion, Button, Form, Header, Icon, Input, Label, Message, Progress } from 'semantic-ui-react';

import './CreateProfile.css';

export interface ICreateProfileProps {

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * Enables/disables form validation
   */
  validate?: boolean;

  /**
   * The callback function to be called when the user creates a profile.
   * @param {string} name - The user's name.
   * @param {string} password - The user's password.
   * @param {boolean} isDeveloper - If the user opted for developer mode
   */
  onCreate?: (name: string, password: string, isDeveloper: boolean) => void;
}

const defaultProps = {
  inverted: false,
  validate: true
};

const CreateProfile = (props: ICreateProfileProps) => {

  const { t } = useTranslation();
  const direction = useDirection();

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [developerMode, setDeveloperMode] = useState<boolean>(false);

  const position: 'left' | undefined = direction === 'ltr' ? 'left' : undefined;

  const isValid = (): boolean => {
    return !props.validate || false;
  }

  return (
    <Form>
      <Header className='centered' as="h2">{t('CreateProfile.title')}</Header>
      <Form.Input
        fluid
        icon='user'
        iconPosition={position}
        placeholder={t('CreateProfile.name')}
        value={name}
        onChange={ (e) => setName(e.target.value) }
      />
      <Form.Input
        fluid
        icon='key'
        iconPosition={position}
        placeholder={t('CreateProfile.password')}
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Form.Input
        fluid
        icon='key'
        iconPosition={position}
        placeholder={t('CreateProfile.confirmPassword')}
        value={confirmPassword}
        onChange={ (e) => setConfirmPassword(e.target.value) }
      />
      <Button
          fluid
          type="submit"
          primary
          disabled={!isValid()}
          onClick={() => props?.onCreate?.(name, password, developerMode)}
        >
          {t('CreateProfile.create')}
        </Button>
    </Form>
  );
};

CreateProfile.defaultProps = defaultProps;

export default CreateProfile;
