import classNames from 'classnames';
import styles from './trial-1-phase-2-obser.module.scss';

export interface Trial1_Phase2_ObserProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Phase2_Obser = ({ className }: Trial1_Phase2_ObserProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 2
          <p>Observation from week 4 to 6</p>
        </button>
    </div>;
};
