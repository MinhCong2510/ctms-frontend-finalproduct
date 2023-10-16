import classNames from 'classnames';
import styles from './nct-name-input.module.scss';

export interface NCT_NameInputProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NCT_NameInput = ({ className }: NCT_NameInputProps) => {
    return <div>Trial Name: <input className="NewTrial_input" />
    </div>;
};
