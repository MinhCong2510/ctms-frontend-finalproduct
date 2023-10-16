import classNames from 'classnames';
import styles from './p-trial-phase-4-evaluation.module.scss';

export interface PTrial_Phase4_EvaluationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PTrial_Phase4_Evaluation = ({ className }: PTrial_Phase4_EvaluationProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 4 Evaluation Report Submission <p>Status: Completed</p>
        </button>
    </div>;
};
