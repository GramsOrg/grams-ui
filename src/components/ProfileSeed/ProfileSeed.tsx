import React, { useState } from 'react';

import { Button, Checkbox, Grid, Segment } from 'semantic-ui-react';

import './ProfileSeed.css';

export interface IProfileSeedProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * The 24-word seed string to display to the user.
   */
  seed: string;

  /**
   * A callback function to be called when the user confirms that they have
   * saved the seed.
   */
  onConfirm?: () => void;
}

const defaultProps = {
  dir: 'ltr',
  inverted: false
};

const ProfileSeed = (props: IProfileSeedProps) => {

  const seedWords = props.seed.split(' ');
  const [confirm, setConfirm] = useState(false);

  return (
    <Segment basic>
      <Grid columns={3} centered>
        {seedWords.map((word, index) => (
          <Grid.Column key={index}>
            <div>{word}</div>
          </Grid.Column>
        ))}
      </Grid>
      <Checkbox
        label='I understand that Grams will not be able to show me this seed again and that I have saved it in a secure place'
        checked={confirm}
        onChange={(e, { checked }) => setConfirm(!!checked)} 
      />
      <Button
        primary
        fluid
        onClick={props.onConfirm}
        disabled={!confirm}
      >
        Continue
      </Button>
    </Segment>
  );
};

ProfileSeed.defaultProps = defaultProps;

export default ProfileSeed;
