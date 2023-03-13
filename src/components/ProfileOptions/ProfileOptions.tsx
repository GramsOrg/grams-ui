import React from 'react';

import { useTranslation } from 'react-i18next';

import '../../main.css';
import SelectionList from '../SelectionList';
import { SelectionOption } from '../SelectionList/SelectionList';

export interface IProfileOptionsProps {

  /**
   * A callback function called when an option is selected.
   */
  onSelect?: (id: string) => void;
}

const defaultProps = {
};

const ProfileOptions = (props: IProfileOptionsProps) => {

  const { t } = useTranslation();

  const options: SelectionOption[] = [
    {
      id: 'new',
      title: t('ProfileOptions.new.title'),
      description: t('ProfileOptions.new.description'),
      icon: 'user plus',
      color: 'black'
    }, {
      id: 'backup',
      title: t('ProfileOptions.backup.title'),
      description: t('ProfileOptions.backup.description'),
      icon: 'upload',
      color: 'black'
    }, {
      id: 'seed',
      title: t('ProfileOptions.seed.title'),
      description: t('ProfileOptions.seed.description'),
      icon: 'pencil',
      color: 'black'
    }, {
      id: 'ledger',
      title: t('ProfileOptions.ledger.title'),
      description: t('ProfileOptions.ledger.description'),
      icon: 'usb',
      color: 'black'
    }, 
  ]

  return (
    <SelectionList options={options} onSelect={option => props?.onSelect?.(option)} />
  );
};

ProfileOptions.defaultProps = defaultProps;

export default ProfileOptions;
