import classNames from 'classnames';
import styles from './staffs-main-page-staffs-info.module.scss';

export interface Staffs_MainPage_StaffsInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Staffs_MainPage_StaffsInfo = ({ className }: Staffs_MainPage_StaffsInfoProps) => {
    return <div className="StaffsBlock">
        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" alt="staff-profile-picture"
            style={{
                width: 150,
                height: 150,
                objectFit: 'cover',
                margin: '10px'
            }}
            className="Staffs_Image"
        />
        <div className="StaffsInfo">
            <label>ID: [insert staff ID]</label>
            <label>Name: [insert staff name]</label>
            <label>Position:[insert staff position]</label>
            <label>Involved Projects: [insert project's name/code] </label>
            <label>Occupation: [insert staff's occupation]</label>
        </div>
    </div>;
};
