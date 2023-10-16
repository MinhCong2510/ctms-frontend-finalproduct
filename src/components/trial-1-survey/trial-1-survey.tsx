import classNames from 'classnames';
import styles from './trial-1-survey.module.scss';

export interface Trial1_SurveyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Survey = ({ className }: Trial1_SurveyProps) => {
    return <div>
        <button className="Trial1_information">Survey</button>
    </div>;
};
