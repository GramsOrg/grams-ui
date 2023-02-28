import React from 'react';

import { Icon, List, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';

import './SelectionList.css';

/**
 * Interface for the option object used in SelectionList.
 * @interface
 */
export interface SelectionOption {
  id: string;
  title: string;
  description?: string;
  icon?: SemanticICONS;
  color?: SemanticCOLORS;
}

/**
 * Props for SelectionList component.
 * @interface
 */
export interface ISelectionListProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /** 
   * A list of options for the user to choose from.
   */
  options?: SelectionOption[];

  /**
   * A callback function to be called when an option is selected.
   */
  onSelect?: (option: SelectionOption) => void;
}

const defaultProps = {
  dir: 'ltr',
  inverted: false,
  options: [{
    id: 'test',
    title: 'Hello',
    description: 'start now',
    icon: 'world',
    color: 'blue'
  }]
};

const SelectionList = (props: ISelectionListProps) => {

  return (
    <List relaxed='very' selection className={props.dir}>
      {props?.options?.map((option) => (
        <List.Item
          key={option.id}
          onClick={() => props?.onSelect?.(option)}
        >
          <Icon 
            className='middle'
            size='big'
            name={option.icon}
            color={option.color}
          />
          <List.Content className={`${props.dir}-content`}>
            <List.Header as='h2'>{option.title}</List.Header>
            <List.Description>{option.description}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

SelectionList.defaultProps = defaultProps;

export default SelectionList;
