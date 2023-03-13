import React from 'react';

import { useDirection } from '../../';

import { Icon, List, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';

import '../../main.css';

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
   * A list of options for the user to choose from.
   */
  options: SelectionOption[];

  /**
   * A callback function to be called when an option is selected.
   */
  onSelect?: (option: string) => void;
}

const defaultProps = {
};

const SelectionList = (props: ISelectionListProps) => {

  const direction = useDirection();

  return (
    <List relaxed='very' selection className={direction}>
      {props?.options?.map((option) => (
        <List.Item
          key={option.id}
          onClick={() => props?.onSelect?.(option.id)}
        >
          <Icon 
            className='middle'
            size='big'
            name={option.icon}
            color={option.color}
          />
          <List.Content className={`${direction}-content`}>
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
