import classNames from 'classnames';
import styles from './pt-fields-main-fields.module.scss';
import { FrontPage_PreviousTrial } from '../front-page-previous-trial/front-page-previous-trial';
import { Filter } from '../filter/filter';
import { PTFields_MainPage } from '../pt-fields-main-page/pt-fields-main-page';

export interface PTFields_MainFieldsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const PTFields_MainFields = ({ className }: PTFields_MainFieldsProps) => {
    return <div className="OTFields_MainFields">
        <FrontPage_PreviousTrial />
        <Filter />
        <PTFields_MainPage />
        <PTFields_MainPage />
        <PTFields_MainPage />
        <PTFields_MainPage />
    </div>;
};
