import classNames from 'classnames';
import styles from './side-bar.module.scss';

export interface SideBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SideBar = ({ className }: SideBarProps) => {
    return <div className="TrialManager">
        <h2 className="OT1_Description" >Lastest Announcement </h2>
        <p>Announcement 1: Trial 1 Announcement</p>
        <p>Announcement 2: Trial 2 Announcement</p>
        <p >Announcement 3: Trial 3 Announcement</p>
        <p >Announcement 4: Trial 4 Announcement</p>
        <h2 className="OT1_Description" > Evaluation </h2>
        <p >Evaluation 1: Trial 1 Evaluation Finalizing Stage</p>
        <p >Evaluation 2: Trial 2 Evaluation Finalizing Stage</p>
        <p >Evaluation 3: Evaluation 3 Due Date Release</p>
        <p >Evaluation 4: Evaluation 4 Due Date Release</p>
        <h2 className="OT1_Description" > Current Trial</h2>
        <p>Trial 5: Trial Name - Code - Manager</p>
        <p>Trial 6: Trial Name - Code - Manager</p>
        <p>Trial 7: Trial Name - Code - Manager</p>
    </div>;
};
