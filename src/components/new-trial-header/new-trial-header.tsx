import classNames from 'classnames';
import styles from './new-trial-header.module.scss';

export interface NewTrial_HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewTrial_Header = ({ className }: NewTrial_HeaderProps) => {
    return <div>
        <h3>New Clinical Trial</h3>
    </div>;
};
