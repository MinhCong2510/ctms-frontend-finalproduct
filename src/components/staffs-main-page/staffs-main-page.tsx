import classNames from 'classnames';
import styles from './staffs-main-page.module.scss';
import { Staffs_MainPage_StaffsInfo } from '../staffs-main-page-staffs-info/staffs-main-page-staffs-info';
import { Staffs_MainPage_Header } from '../staffs-main-page-header/staffs-main-page-header';
import { Filter } from '../filter/filter';

export interface Staffs_MainPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */







export const Staffs_MainPage = ({ className }: Staffs_MainPageProps) => {
    return <div ><Staffs_MainPage_Header />
        <Filter />
        <div className={classNames(styles.root, className, 'StaffsMainPage')}>
            <Staffs_MainPage_StaffsInfo />
            <Staffs_MainPage_StaffsInfo />
            <Staffs_MainPage_StaffsInfo />
            <Staffs_MainPage_StaffsInfo /></div>

    </div>;
};
