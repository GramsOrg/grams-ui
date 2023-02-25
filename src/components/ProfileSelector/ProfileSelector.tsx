import React from 'react';

import { Profile } from 'grams-common';

import { Label, List } from 'semantic-ui-react';
import Avatar from 'react-avatar';

import './ProfileSelector.css';
import { DefaultTheme, Theme, Mode } from '../../types/Theme';

export interface IProfileItemsProps {
  profiles?: Profile[];
  onSelect?: (profile: Profile) => void;
}

export interface IProfileSelectorProps {
  profiles?: Profile[];
  onCreate?: () => void;
  onSelect?: (profile: Profile) => void;
  horizontal?: boolean;
  theme?: Theme;
}

const ProfileSelector = (props: IProfileSelectorProps) => {
  props = {
    theme: DefaultTheme,
    horizontal: false,
    ...props
  }

  return (
    <List
      horizontal={ props?.horizontal || false }
      relaxed
      size="big"
      className="centered top"
      dir={ props?.theme?.dir }
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
          color={props?.theme?.mode === Mode.Light ? 'teal' : 'gray'}
          title="New"
          className="avatar"
        />
      </List.Item>
    </List>
  );
};

const ProfileItems = (props: IProfileItemsProps) => {
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
              {'</>'}
            </Label>
          )}
          </List.Content>
        </List.Item>
      ))}
    </>
  )
}

export default ProfileSelector;
