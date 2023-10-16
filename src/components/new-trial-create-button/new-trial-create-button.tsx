import classNames from 'classnames';
import styles from './new-trial-create-button.module.scss';

export interface NewTrial_CreateButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewTrial_CreateButton = ({ className }: NewTrial_CreateButtonProps) => {
    return <div>
        <button className="NewTrial_CreateButton">Create New Trial</button>
    </div>;
};
