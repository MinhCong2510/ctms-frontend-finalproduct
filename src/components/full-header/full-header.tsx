import classNames from 'classnames';
import styles from './full-header.module.scss';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';

export interface Full_HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Full_Header = ({ className }: Full_HeaderProps) => {
    return <div className={classNames(styles.root, className, 'Header')}>
        <Logo />
        <Header />
    </div>;
};
