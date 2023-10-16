import classNames from 'classnames';
import styles from './p-trial-1-home-page.module.scss';
import { PTrial_1_Description } from '../p-trial-1-description/p-trial-1-description';
import { Trial1_Information } from '../trial-1-information/trial-1-information';
import { Trial1_Participants } from '../trial-1-participants/trial-1-participants';
import { Trial1_Forum } from '../trial-1-forum/trial-1-forum';
import { Trial1_Survey } from '../trial-1-survey/trial-1-survey';
import { PTrial_Phase1_Evaluation } from '../p-trial-phase-1-evaluation/p-trial-phase-1-evaluation';
import { PTrial_Phase2_Evaluation } from '../p-trial-phase-2-evaluation/p-trial-phase-2-evaluation';
import { PTrial_Phase3_Evaluation } from '../p-trial-phase-3-evaluation/p-trial-phase-3-evaluation';
import { PTrial_Phase4_Evaluation } from '../p-trial-phase-4-evaluation/p-trial-phase-4-evaluation';
import { PTrial_FinalEvalution } from '../p-trial-final-evalution/p-trial-final-evalution';
import { Trial1_AccesstoResources } from '../trial-1-accessto-resources/trial-1-accessto-resources';
import { Trial1_RelatedTrials } from '../trial-1-related-trials/trial-1-related-trials';

export interface PTrial1_HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */












export const PTrial1_HomePage = ({ className }: PTrial1_HomePageProps) => {
    return <div className="OTrial1_HomePage">
        <PTrial_1_Description />
        <div className="Trial1_BriefDes" >
            <Trial1_Information />
            <Trial1_Participants />
            <Trial1_Forum />
            <Trial1_Survey />
        </div>
        <div className="TrialPhases" >
         <PTrial_Phase1_Evaluation />
         <PTrial_Phase2_Evaluation />
         <PTrial_Phase3_Evaluation />
         <PTrial_Phase4_Evaluation />
         <PTrial_FinalEvalution />
         <Trial1_AccesstoResources />
         <Trial1_RelatedTrials />
        </div>
    </div>;
};
