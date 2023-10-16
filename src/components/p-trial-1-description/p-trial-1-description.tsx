import classNames from 'classnames';
import styles from './p-trial-1-description.module.scss';

export interface PTrial_1_DescriptionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PTrial_1_Description = ({ className }: PTrial_1_DescriptionProps) => {
    return <div><h2 className="OT1_Description">Previous Trail</h2>
        <h4 className="OT1_Description">Trial 1: Trial Name- Trial Code- Trial Manager | Status: Completed
            <p>[This blank space will briefly describe the name, the process and the main purposes of conducting this medical trial. Additionally, the desired outcome and how the trail is going to impact the medical industry and benefit the patients will also be demonstrated.]</p></h4>
    </div>;
};
