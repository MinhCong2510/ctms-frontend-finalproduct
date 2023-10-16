import classNames from 'classnames';
import styles from './header-user-photo.module.scss';

export interface Header_UserPhotoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header_UserPhoto = ({ className }: Header_UserPhotoProps) => {
    return <img
                        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />;
};
