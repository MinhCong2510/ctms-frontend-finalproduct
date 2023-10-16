import classNames from 'classnames';
import styles from './nct-des-input.module.scss';

export interface NCT_DesInputProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NCT_DesInput = ({ className }: NCT_DesInputProps) => {
    return <div> Description: <input className="NewTrial_inputDes" />
    </div>;
};
