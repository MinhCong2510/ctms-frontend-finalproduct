import classNames from 'classnames';
import styles from './p-trial-phase-3-evaluation.module.scss';

export interface PTrial_Phase3_EvaluationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PTrial_Phase3_Evaluation = ({ className }: PTrial_Phase3_EvaluationProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 3 Evaluation Report Submission <p>Status: Completed</p>
        </button>
    </div>;
};
