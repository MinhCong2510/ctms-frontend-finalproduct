import classNames from 'classnames';
import styles from './header-greeting-user.module.scss';

export interface Header_GreetingUserProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header_GreetingUser = ({ className }: Header_GreetingUserProps) => {
    return <div className={classNames(styles.root, className)}>Hello, User</div>;
};
