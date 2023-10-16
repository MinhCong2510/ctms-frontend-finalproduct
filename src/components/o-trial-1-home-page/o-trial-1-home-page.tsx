import classNames from 'classnames';
import styles from './o-trial-1-home-page.module.scss';
import { Trial1_Description } from '../trial-1-description/trial-1-description';
import { Trial1_Information } from '../trial-1-information/trial-1-information';
import { Trial1_Participants } from '../trial-1-participants/trial-1-participants';
import { Trial1_Forum } from '../trial-1-forum/trial-1-forum';
import { Trial1_Survey } from '../trial-1-survey/trial-1-survey';
import { Trial1_Phase1_Obser } from '../trial-1-phase-1-obser/trial-1-phase-1-obser';
import { Trial1_Phase2_Obser } from '../trial-1-phase-2-obser/trial-1-phase-2-obser';
import { Trial1_Phase3_Obser } from '../trial-1-phase-3-obser/trial-1-phase-3-obser';
import { Trial1_Phase4_Observ } from '../trial-1-phase-4-observ/trial-1-phase-4-observ';
import { Trial1_Phase1_Evaluation } from '../trial-1-phase-1-evaluation/trial-1-phase-1-evaluation';
import { Trial1_Phase2_Evaluation } from '../trial-1-phase-2-evaluation/trial-1-phase-2-evaluation';
import { Trial1_Phase3_Evaluation } from '../trial-1-phase-3-evaluation/trial-1-phase-3-evaluation';
import { Trial1_Phase4_Evaluation } from '../trial-1-phase-4-evaluation/trial-1-phase-4-evaluation';
import { Trial1_FinalEvaluation } from '../trial-1-final-evaluation/trial-1-final-evaluation';
import { Trial1_AccesstoResources } from '../trial-1-accessto-resources/trial-1-accessto-resources';
import { Trial1_RelatedTrials } from '../trial-1-related-trials/trial-1-related-trials';

export interface OTrial1_HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
















export const OTrial1_HomePage = ({ className }: OTrial1_HomePageProps) => {
    return <div className="OTrial1_HomePage">
        <Trial1_Description />

        <div className="Trial1_BriefDes">
            <Trial1_Information />
            <Trial1_Participants />
            <Trial1_Forum />
            <Trial1_Survey />
        </div>
        <div className="TrialPhases" >
            <Trial1_Phase1_Obser />
            <Trial1_Phase2_Obser />
            <Trial1_Phase1_Evaluation />
            <Trial1_Phase2_Evaluation />
            <Trial1_Phase3_Obser />
            <Trial1_Phase4_Observ />
            <Trial1_Phase3_Evaluation />
            <Trial1_Phase4_Evaluation />
            <Trial1_FinalEvaluation />
            <Trial1_AccesstoResources />
            <Trial1_RelatedTrials />
        </div>
    </div>;
};
