import React from 'react';

import { Profile } from 'grams-common';

import { Label, List } from 'semantic-ui-react';
import Avatar from 'react-avatar';

import './ProfileSelector.css';

export interface IProfileItemsProps {
  profiles?: Profile[];
  onSelect?: (profile: Profile) => void;
}

export interface IProfileSelectorProps {
  dir?: string;
  profiles?: Profile[];
  onCreate?: () => void;
  onSelect?: (profile: Profile) => void;
  horizontal?: boolean;
}

const ProfileSelector = (props: IProfileSelectorProps) => {
  props = {
    dir: 'ltr',
    horizontal: false,
    ...props
  }

  return (
    <List
      horizontal={ props?.horizontal || false }
      relaxed
      size="big"
      className="centered top"
      dir={ props?.dir }
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
