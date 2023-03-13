import React, { useState, useEffect } from 'react';

import loadable from  '@loadable/component';

import {
  Icon as SemanticIcon,
  List,
  SemanticICONS,
  SemanticCOLORS
} from 'semantic-ui-react';

import SemanticValues from './SemanticValues';
import '../../main.css';
import { IconSizeProp } from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

export interface IGramsIconProps {

  /**
   * Defines the direction of the component
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * Name of the icon to display.
   */
  name: string,

  /**
   * The size of the icon.
   */
  size?: IconSizeProp,

  /**
   * Whether to fallback to React icons if the Semantic UI icon is not found.
   */
  fallback?: boolean,
}

const defaultProps = {
  dir: 'ltr',
  inverted: false,
  size: 'large',
  fallback: true
};

const GramsIcon = (props: IGramsIconProps) => {

  return (
    <SemanticIcon
      name={ props.name as SemanticICONS }
      size={ props.size }
    />
  );

  /*const [tag, setTag] = useState<JSX.Element>(<div />)

	const [library, iconComponent] = props.name.split('/')

  useEffect(() => {
    import(`react-icons/${library}`)
    .then((value) => {
      const component = value[iconComponent];
      console.log(component())
      setTag(component())
    });
  }, []);

  const isSemantic: boolean = !library; //props.name in SemanticValues;

  if (isSemantic) {
    return (
      <SemanticIcon name={ props.name as SemanticICONS } />
    );
  }

  //const ReactIcons = loadable.lib(() => import(`react-icons/${library}`));
  

  //const Tag: JSX.Element = ReactIcons.then(icons => icons[iconComponent]);

  //return tag;

  /*type GetIconProps = {
    icon: keyof typeof ReactIcons;
  }

  const getIcon = ({icon}: GetIconProps) => {
    const TagName = ReactIcons[icon];
    console.log(TagName)
    return <TagName />;
  };

  console.log(ReactIcons)
  //const ReactIcon = ReactIcons[iconComponent];
  //console.log(iconComponent)
  //console.log(ReactIcon)

  return getIcon({icon: iconComponent})*/

  // return (<ReactIcons size={64} />);
};

GramsIcon.defaultProps = defaultProps;

export default GramsIcon;

// return React.lazy(() => import(`react-icons/${lib}`))

  /*const lib = props.name.slice(0, 2).toLowerCase();

  console.log(lib)

  import(`react-icons/${lib}`)
  .then(value => setParsed(value))

  if (parsed) {
    return React.lazy(() => import(`react-icons/${lib}`))
    //const Tag = props.name as keyof JSX.IntrinsicElements
    //return <Tag />;
    //return React.createElement(props.name, {});
  }

  return (
    <>
    <FcAddressBook size={64} />
    </>
  );*/