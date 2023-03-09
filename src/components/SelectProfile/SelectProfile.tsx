import React from 'react';

import { useTranslation } from 'react-i18next';

import { useDirection } from '../../';

import { UserProfile } from '../../types/UserProfile';

import { Label, List } from 'semantic-ui-react';
import Avatar from 'react-avatar';

import './SelectProfile.css';

export interface IProfileItemsProps {
  profiles?: UserProfile[];
  onSelect?: (profile: UserProfile) => void;
}

export interface ISelectProfileProps {

  /**
   * List of profiles that will be displayed
   */
  profiles?: UserProfile[];

  /**
   * Triggers on user clicking the create button
   */
  onCreate?: () => void;

  /**
   * Triggers on user clicking on a profile
   */
  onSelect?: (profile: UserProfile) => void;

  /**
   * Toggles between displaying the profiles horizontally or vertically
   */
  horizontal?: boolean;
}

const defaultProps = {
  horizontal: false
};

const SelectProfile = (props: ISelectProfileProps) => {

  const { t } = useTranslation();
  const direction = useDirection();

  return (
    <List
      horizontal={ props?.horizontal || false }
      relaxed
      size="big"
      className={`centered top`}
      dir={direction}
    >
      <ProfileItems
        profiles={props?.profiles}
        onSelect={props?.onSelect}
      />
      <List.Item onClick={() => props?.onCreate?.()}>
        <Avatar
          name="+"
          size="64"
          round
          color='teal'
          title={t('SelectProfile.new')}
          className="avatar"
        />
        <List.Header>{t('SelectProfile.new')}</List.Header>
      </List.Item>
    </List>
  );
};

const ProfileItems = (props: IProfileItemsProps) => {

  const { t } = useTranslation();

  return (
    <>
      {props?.profiles?.map(profile => (
        <List.Item
          className='top'
          key={profile.id}
          onClick={() => props?.onSelect?.(profile)}
        >
          <Avatar
            name={profile.name}
            size="64"
            round
            src={profile.avatarUrl}
            className="avatar"
          />
          <List.Header>{profile.name}</List.Header>
          <List.Content>
          {profile.isDeveloper && (
            <Label color="blue" size="mini">
              {t('SelectProfile.dev')}
            </Label>
          )}
          </List.Content>
        </List.Item>
      ))}
    </>
  )
}

SelectProfile.defaultProps = defaultProps;

export default SelectProfile;
