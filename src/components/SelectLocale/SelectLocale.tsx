import React, { useState } from 'react';

import { 
  Button,
  Dropdown,
  DropdownItemProps,
  DropdownProps,
  List,
  Segment
} from 'semantic-ui-react';

import './SelectLocale.css';

const defaultLocales: DropdownItemProps[] = [
  { key: 'en', value: 'en', text: 'English' },
  { key: 'ar', value: 'ar', text: 'عربي' },
  { key: 'de', value: 'de', text: 'Deutsch' },
  { key: 'fr', value: 'fr', text: 'Français' },
  { key: 'es', value: 'es', text: 'Español' },
  { key: 'zh', value: 'zh', text: '中文' },
];

export interface ISelectLocaleProps {

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * Toggles the element to be centered relative to the parent
   */
  centered?: boolean;

  /**
   * Toggles to take the maximum width of the parent element
   */
  fluid?: boolean;

  /**
   * Default label for the locale select
   */
  selectLabel?: string;

  /**
   * Label for the confirm button
   */
  confirmLabel?: string;

  /**
   * Locale options appearing to the user
   */
  locales?: DropdownItemProps[];

  /**
   * Triggers every time the user changes the locale from the dropdown
   */
  onChange?: (value: string) => void;

  /**
   * Triggers on user confirms their selection
   */
  onSelect?: (value: string) => void;
}

const defaultProps = {
  inverted: false,
  centered: false,
  fluid: true,
  selectLabel: 'Select language',
  confirmLabel: 'Select',
  locales: defaultLocales
};

const SelectLocale = (props: ISelectLocaleProps) => {

  const [selected, setSelected] = useState<string>("");

  const className = props.centered ? 'centered' : '';

  const onValueChange = (
    event: React.SyntheticEvent<HTMLElement, Event>, 
    data: DropdownProps
  ) => {
    const val: string = data.value?.toString() || '';
    setSelected(val);
    props?.onChange?.(val);
  };

  return (
    <Segment basic className={className}>
      <List>
        <List.Item className="mb-small">
          <Dropdown
            selection
            fluid={props.fluid}
            options={props.locales}
            onChange={onValueChange}
            placeholder={props.selectLabel}
          />
        </List.Item>
        <List.Item>
          <Button
            disabled={!selected}
            inverted={props.inverted}
            primary={!props.inverted}
            fluid={props.fluid}
            onClick={() => props?.onSelect?.(selected) }
          >
            {props.confirmLabel}
          </Button>
        </List.Item>
      </List>
    </Segment>
  );
};

SelectLocale.defaultProps = defaultProps;

export default SelectLocale;
