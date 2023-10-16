import classNames from 'classnames';
import styles from './header-button.module.scss';

export interface Header__ButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header__Button = ({ className }: Header__ButtonProps) => {
    return <img
                        src="https://w7.pngwing.com/pngs/467/838/png-transparent-logo-message-text-messaging-sms-web-design-angle-web-design-text-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />;
};
