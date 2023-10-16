import classNames from 'classnames';
import styles from './trial-1-phase-3-evaluation.module.scss';

export interface Trial1_Phase3_EvaluationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Phase3_Evaluation = ({ className }: Trial1_Phase3_EvaluationProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 3
          <p>Evaluation Report Submission</p>
        </button>
    </div>;;
};
