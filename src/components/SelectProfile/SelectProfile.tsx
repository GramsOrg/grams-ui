import React from 'react';

import { Profile } from 'grams-common';

import { Label, List } from 'semantic-ui-react';
import Avatar from 'react-avatar';

import './SelectProfile.css';

export interface IProfileItemsProps {
  profiles?: Profile[];
  onSelect?: (profile: Profile) => void;
}

export interface ISelectProfileProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * List of profiles that will be displayed
   */
  profiles?: Profile[];

  /**
   * Triggers on user clicking the create button
   */
  onCreate?: () => void;

  /**
   * Triggers on user clicking on a profile
   */
  onSelect?: (profile: Profile) => void;

  /**
   * Toggles between displaying the profiles horizontally or vertically
   */
  horizontal?: boolean;
}

const defaultProps = {
  dir: 'ltr',
  horizontal: false
};

const SelectProfile = (props: ISelectProfileProps) => {

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

SelectProfile.defaultProps = defaultProps;

export default SelectProfile;
