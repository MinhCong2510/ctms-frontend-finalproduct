import classNames from 'classnames';
import styles from './header-notification-button.module.scss';

export interface Header_NotificationButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header_NotificationButton = ({ className }: Header_NotificationButtonProps) => {
    return <img
                        src="https://w7.pngwing.com/pngs/832/828/png-transparent-alarm-alert-attention-bell-notification-notifications-ring-random-icon-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />;
};
