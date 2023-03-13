import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useDirection } from '../../';

import { Grid } from 'semantic-ui-react';

import SelectLocale from '../SelectLocale';
import Terms from '../Terms';
import ProfileOptions from '../ProfileOptions';

import '../../main.css';
import CreateProfile from '../CreateProfile';

export interface IOnboardingProps {

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;

  /**
   * Optional locale for onboarding. Will prompt the user to select their locale if undefined
   */
  locale?: string;

  /**
   * Adjusts the styles to fit smaller screen sizes.
   */
  mobile?: boolean;

  /**
   * A callback function called when a profile is created.
   */
  onCreate?: (name: string, password: string, isDeveloper: boolean) => void;

  /**
   * A callback function called when the user opts to load a .grams file.
   */
  onImportBackup?: () => void;

  /**
   * A callback function called when the user opts to load their 24-word seed.
   */
  onImportSeed?: () => void;

  /**
   * A callback function called when the user opts to sync their ledger device.
   */
  onLedger?: () => void;
}

const defaultProps = {
  inverted: false
};

const Onboarding = (props: IOnboardingProps) => {

  const { t, i18n } = useTranslation();
  const direction = useDirection();

  const selectLocale = (
    <SelectLocale onSelect={() => setStep(1)} />
  );

  const terms = (
    <Terms
      size={props.mobile ? 'small' : 'medium'}
      content='TBD'
      onAccept={() => setStep(2)}
    />
  );

  const profileOptions = (
    <ProfileOptions
      onSelect={(option) => {
        switch(option) {
          case 'new':
            setStep(3);
            break;
          case 'backup':
            props.onImportBackup?.();
            break;
          case 'seed':
            props.onImportSeed?.();
            break;
          case 'ledger':
            props.onLedger?.();
            break;
          default:
            setStep(3);
            break;
        }
      }}
    />
  );

  const createProfile = (
    <CreateProfile
      onCreate={props.onCreate}
    />
  );

  const [step, setStep] = useState(0);
  const [journey, setJourney] = useState([
    selectLocale,
    terms,
    profileOptions,
    createProfile
  ]);

  useEffect(() => {
    if (props.locale) {
      i18n.changeLanguage(props.locale);
      setStep(1);
    }
  }, [props.locale]);

  return (
    <Grid centered className='max-height'>
      <Grid.Column verticalAlign='middle' className={`layout ${direction}`}>
        {journey[step]}
      </Grid.Column>
    </Grid>
  );
};

Onboarding.defaultProps = defaultProps;

export default Onboarding;
