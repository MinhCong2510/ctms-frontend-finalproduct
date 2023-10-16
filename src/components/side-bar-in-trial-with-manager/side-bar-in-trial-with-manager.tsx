import classNames from 'classnames';
import styles from './side-bar-in-trial-with-manager.module.scss';
import { SideBar } from '../side-bar/side-bar';
import { TrialManager } from '../trial-manager/trial-manager';

export interface SideBar_inTrial_withManagerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const SideBar_inTrial_withManager = ({ className }: SideBar_inTrial_withManagerProps) => {
    return <div>
        <TrialManager />
        <SideBar />
    </div>;
};
