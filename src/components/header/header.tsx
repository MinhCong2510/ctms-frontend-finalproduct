import classNames from 'classnames';
import styles from './header.module.scss';
import { Header_SearchButton } from '../header-search-button/header-search-button';
import { Header_NotificationButton } from '../header-notification-button/header-notification-button';
import { Header__Button } from '../header-button/header-button';
import { Header_UserPhoto } from '../header-user-photo/header-user-photo';
import { Header_GreetingUser } from '../header-greeting-user/header-greeting-user';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */






export const Header = ({ className }: HeaderProps) => {
    return <div className={classNames(styles.root, className, 'Header_UserInteraction')}>
        <Header_SearchButton />
        <Header__Button />
        <Header_NotificationButton />
        <Header_UserPhoto />
        <Header_GreetingUser /></div>;
};
