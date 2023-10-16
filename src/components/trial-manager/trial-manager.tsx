import classNames from 'classnames';
import styles from './trial-manager.module.scss';

export interface TrialManagerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TrialManager = ({ className }: TrialManagerProps) => {
    return <div className="TrialManager">
        <h2 className="OT1_Description">Clinical Trial Manager</h2>
        <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" width="270"
        <p>Name:Unknown</p>
        <p>Contact Number: (*61)***-***-***</p>
        <p>Email Address: Unknown@clinic.ehealth.com</p>
    </div>;
};
