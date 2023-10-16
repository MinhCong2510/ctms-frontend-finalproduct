import classNames from 'classnames';
import styles from './p-trial-phase-2-evaluation.module.scss';

export interface PTrial_Phase2_EvaluationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PTrial_Phase2_Evaluation = ({ className }: PTrial_Phase2_EvaluationProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 2 Evaluation Report Submission <p>Status: Completed</p>
        </button>
    </div>;
};
