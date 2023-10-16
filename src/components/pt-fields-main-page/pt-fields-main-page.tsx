import classNames from 'classnames';
import styles from './pt-fields-main-page.module.scss';

export interface PTFields_MainPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PTFields_MainPage = ({ className }: PTFields_MainPageProps) => {
    return <div className="OTFields_MainBlock">
               <div className="OTFields_MainIcon"><text>Trial [number] : Trial Name- Code- Manager</text>
            <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg" alt="" style={{
                height: 120,
                width: 120,
                objectFit: 'cover',}} />
            </div>
            
            <div className="OTF_MainTrialDescription">
                        <text>Trial Name: [Insert Trial Name]</text>
                        <text>Trail Code: [Insert Trial Code]</text>
                        <text>Status: Completed on [enter date]</text>
                        <text>Description: [Enter a brief description of the trial and its function/purpose] </text>
                        <text>Participants: [minimum- maximum number] people </text>
            </div>
                    
        </div>;
};
