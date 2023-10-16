import classNames from 'classnames';
import styles from './full-nav-bar.module.scss';
import { NavigationBar_HomeButton } from '../navigation-bar-home-button/navigation-bar-home-button';
import { NavigationBar_NewTrials } from '../navigation-bar-new-trials/navigation-bar-new-trials';
import { NavigationBar_OngoingTrial } from '../navigation-bar-ongoing-trial/navigation-bar-ongoing-trial';
import { NavigationBar_PreviousTrial } from '../navigation-bar-previous-trial/navigation-bar-previous-trial';
import { NavigationBar_Staffs } from '../navigation-bar-staffs/navigation-bar-staffs';
import { NavigationBar_Profile } from '../navigation-bar-profile/navigation-bar-profile';

export interface FullNavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FullNavBar = ({ className }: FullNavBarProps) => {
    return <div className={classNames(styles.root, className, 'FullNavBar')}>
        <NavigationBar_HomeButton />
        <NavigationBar_OngoingTrial />
        <NavigationBar_PreviousTrial />
        <NavigationBar_NewTrials />
        <NavigationBar_Staffs />
        <NavigationBar_Profile />
    </div>;
};
