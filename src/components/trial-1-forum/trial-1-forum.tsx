import classNames from 'classnames';
import styles from './trial-1-forum.module.scss';

export interface Trial1_ForumProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Forum = ({ className }: Trial1_ForumProps) => {
    return <div>
        <button className="Trial1_information">Forum/Announcement</button>
    </div>;
};
