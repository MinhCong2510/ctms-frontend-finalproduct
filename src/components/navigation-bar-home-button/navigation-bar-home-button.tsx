import classNames from 'classnames';
import styles from './navigation-bar-home-button.module.scss';

export interface NavigationBar_HomeButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavigationBar_HomeButton = ({ className }: NavigationBar_HomeButtonProps) => {
    return <div><h3>Home</h3></div>;
};
