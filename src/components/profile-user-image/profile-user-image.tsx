import classNames from 'classnames';
import styles from './profile-user-image.module.scss';

export interface Profile_UserImageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile_UserImage = ({ className }: Profile_UserImageProps) => {
    return <div > <h2>Username: [Insert staff full name here]</h2>
    <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" width="270">
    
    </div>;
};
