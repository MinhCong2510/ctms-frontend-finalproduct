import classNames from 'classnames';
import styles from './trial-1-final-evaluation.module.scss';

export interface Trial1_FinalEvaluationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_FinalEvaluation = ({ className }: Trial1_FinalEvaluationProps) => {
    return <div>
        <button className="Trial1_information">
              Final Evaluation Report Submission
        </button>
    </div>;;
};
