import classNames from 'classnames';
import styles from './ot-fields-main-fields.module.scss';
import { FrontPage_OngoingTrials } from '../front-page-ongoing-trials/front-page-ongoing-trials';
import { OTFields_MainPage } from '../ot-fields-main-page/ot-fields-main-page';
import { Filter } from '../filter/filter';

export interface OTFields_MainFieldsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const OTFields_MainFields = ({ className }: OTFields_MainFieldsProps) => {
    return <div className="OTFields_MainFields">
        <FrontPage_OngoingTrials />
        <Filter />
        <OTFields_MainPage />
        <OTFields_MainPage />
        <OTFields_MainPage />
        <OTFields_MainPage />
    </div>;
};
