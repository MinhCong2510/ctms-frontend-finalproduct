import classNames from 'classnames';
import styles from './trial-1-phase-4-observ.module.scss';

export interface Trial1_Phase4_ObservProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Phase4_Observ = ({ className }: Trial1_Phase4_ObservProps) => {
    return <div>
        <button className="Trial1_information">
              Phase 4
          <p>Observation from week 10 to 12</p>
        </button>
    </div>;
};
