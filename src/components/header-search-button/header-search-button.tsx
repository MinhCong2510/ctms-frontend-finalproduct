import classNames from 'classnames';
import styles from './header-search-button.module.scss';

export interface Header_SearchButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header_SearchButton = ({ className }: Header_SearchButtonProps) => {
    return <img
                        src="https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />;
};
