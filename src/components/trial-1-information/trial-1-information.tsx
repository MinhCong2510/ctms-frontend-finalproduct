import classNames from 'classnames';
import styles from './trial-1-information.module.scss';

export interface Trial1_InformationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Information = ({ className }: Trial1_InformationProps) => {
    return <div>
        <button className="Trial1_information">Information</button>
    </div>;
};
