import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

import { Button, Checkbox, Segment } from 'semantic-ui-react';

import './Terms.css';

export interface ITermsProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * The markdown content to be rendered as the terms of use.
   */
  content?: string;

  /**
   * The size of the terms container.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The label for the checkbox to accept the terms.
   */
  checkboxLabel?: string;

  /**
   * The label for the confirmation button.
   */
  confirmLabel?: string;

  /**
   * Whether the checkbox should be checked by default.
   */
  defaultChecked?: boolean;

  /**
   * The callback function to be called when the user accepts the acceptance of the terms.
   */
  onAccept?: () => void;
}

const defaultProps = {
  dir: 'ltr',
  inverted: false,
  size: 'medium',
  checkboxLabel: 'I accept the terms and conditions',
  confirmLabel: 'Accept',
  defaultChecked: false
};

const Terms = (props: ITermsProps) => {

  const [accepted, setAccepted] = useState<boolean>(props.defaultChecked || false);

  const markdown: string = props.content || '';

  return (
    <div dir={props.dir}>
      <ReactMarkdown className={`scrollable ${props.size}`}>
        {markdown}
      </ReactMarkdown>
      <Segment basic>
        <Checkbox
          label={props.checkboxLabel}
          checked={accepted}
          onChange={(e, { checked }) => setAccepted(!!checked)}
        />
      </Segment>
      <Button
        primary
        fluid
        dir={props.dir}
        disabled={!accepted}
        onClick={() => props?.onAccept?.()}
      >
        {props.confirmLabel}
      </Button>
    </div>
  );
};

Terms.defaultProps = defaultProps;

export default Terms;
