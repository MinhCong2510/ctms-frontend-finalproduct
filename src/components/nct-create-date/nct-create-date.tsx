import classNames from 'classnames';
import styles from './nct-create-date.module.scss';

export interface NCT_CreateDateProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NCT_CreateDate = ({ className }: NCT_CreateDateProps) => {
    return <div>Create on: <input className="NewTrial_input" type="date"/>
    </div>;
};
