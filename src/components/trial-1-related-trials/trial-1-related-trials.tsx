import classNames from 'classnames';
import styles from './trial-1-related-trials.module.scss';

export interface Trial1_RelatedTrialsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_RelatedTrials = ({ className }: Trial1_RelatedTrialsProps) => {
    return <div>
        <button className="Trial1_information">
              Related Trials
        </button>
    </div>;;
};
