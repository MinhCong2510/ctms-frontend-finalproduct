import classNames from 'classnames';
import styles from './trial-1-phase-1-evaluation.module.scss';

export interface Trial1_Phase1_EvaluationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Phase1_Evaluation = ({ className }: Trial1_Phase1_EvaluationProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 1
          <p>Evaluation Report Submission</p>
        </button>
    </div>;
};
