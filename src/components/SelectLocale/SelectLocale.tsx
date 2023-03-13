import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { 
  Button,
  Dropdown,
  DropdownItemProps,
  DropdownProps,
  List,
  Segment
} from 'semantic-ui-react';

import '../../main.css';

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
   * Toggles to take the maximum width of the parent element
   */
  fluid?: boolean;

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
  fluid: true,
  locales: defaultLocales
};

const SelectLocale = (props: ISelectLocaleProps) => {

  const { t, i18n } = useTranslation();

  const [selected, setSelected] = useState<string>("");

  const onValueChange = (
    event: React.SyntheticEvent<HTMLElement, Event>, 
    data: DropdownProps
  ) => {
    const val: string = data.value?.toString() || '';
    setSelected(val);
    i18n.changeLanguage(val);
    props?.onChange?.(val);
  };

  return (
    <List>
      <List.Item className="mb-small">
        <Dropdown
          selection
          fluid={props.fluid}
          options={props.locales}
          onChange={onValueChange}
          placeholder={t('SelectLocale.select')}
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
          {t('SelectLocale.confirm')}
        </Button>
      </List.Item>
    </List>
  );
};

SelectLocale.defaultProps = defaultProps;

export default SelectLocale;
