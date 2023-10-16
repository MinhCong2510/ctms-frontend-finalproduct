import classNames from 'classnames';
import styles from './nct-sponsor-input.module.scss';

export interface NCT_SponsorInputProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NCT_SponsorInput = ({ className }: NCT_SponsorInputProps) => {
    return <div>Sponsor: <input className="NewTrial_input" />
    </div>;
};
