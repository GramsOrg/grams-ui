import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useDirection } from '../../';

import ReactMarkdown from 'react-markdown';

import { Button, Checkbox, Segment } from 'semantic-ui-react';

import './Terms.css';

export interface ITermsProps {

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * The markdown content to be rendered as the terms of use.
   */
  content: string;

  /**
   * The size of the terms container.
   */
  size?: 'small' | 'medium' | 'large';

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
  inverted: false,
  size: 'medium',
  defaultChecked: false
};

const Terms = (props: ITermsProps) => {

  const { t } = useTranslation();
  const direction = useDirection();

  const [accepted, setAccepted] = useState<boolean>(props.defaultChecked || false);

  const markdown: string = props.content || '';

  return (
    <div dir={direction}>
      <ReactMarkdown className={`scrollable ${props.size}`}>
        {markdown}
      </ReactMarkdown>
      <Segment basic>
        <Checkbox
          label={t('Terms.checkbox')}
          checked={accepted}
          onChange={(e, { checked }) => setAccepted(!!checked)}
        />
      </Segment>
      <Button
        primary
        fluid
        dir={direction}
        disabled={!accepted}
        onClick={() => props?.onAccept?.()}
      >
        {t('Terms.confirm')}
      </Button>
    </div>
  );
};

Terms.defaultProps = defaultProps;

export default Terms;
