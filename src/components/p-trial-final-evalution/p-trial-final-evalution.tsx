import classNames from 'classnames';
import styles from './p-trial-final-evalution.module.scss';

export interface PTrial_FinalEvalutionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PTrial_FinalEvalution = ({ className }: PTrial_FinalEvalutionProps) => {
    return <div>
        <button className="Trial1_information">
              Final Evaluation Report Submission <p>Status: Completed</p>
        </button>
    </div>;
};
