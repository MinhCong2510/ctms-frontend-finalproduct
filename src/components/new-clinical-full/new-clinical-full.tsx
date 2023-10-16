import classNames from 'classnames';
import styles from './new-clinical-full.module.scss';
import { NewTrial_Header } from '../new-trial-header/new-trial-header';
import { NCT_NameInput } from '../nct-name-input/nct-name-input';
import { NCT_DesInput } from '../nct-des-input/nct-des-input';
import { NCT_SponsorInput } from '../nct-sponsor-input/nct-sponsor-input';
import { NCT_CreateDate } from '../nct-create-date/nct-create-date';
import { NewTrial_CreateButton } from '../new-trial-create-button/new-trial-create-button';

export interface NewClinicalFullProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */






export const NewClinicalFull = ({ className }: NewClinicalFullProps) => {
    return <div className="NewTrial_Form">
        <NewTrial_Header />
        <NCT_NameInput />
        <NCT_DesInput />
        <NCT_SponsorInput />
        <NCT_CreateDate />
        <NewTrial_CreateButton />
    </div>;
};
