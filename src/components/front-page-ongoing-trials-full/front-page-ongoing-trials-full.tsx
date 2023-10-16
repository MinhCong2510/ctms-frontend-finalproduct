import classNames from 'classnames';
import styles from './front-page-ongoing-trials-full.module.scss';
import { FrontPage_OngoingTrials } from '../front-page-ongoing-trials/front-page-ongoing-trials';
import { FrontPage_OT_InfoBlock } from '../front-page-ot-info-block/front-page-ot-info-block';
import { FrontPage_AddTrials } from '../front-page-add-trials/front-page-add-trials';

export interface FrontPage_OngoingTrialsFullProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const FrontPage_OngoingTrialsFull = ({ className }: FrontPage_OngoingTrialsFullProps) => {
    return <div className="FrontPage_OT_Header"><FrontPage_OngoingTrials />
        <FrontPage_AddTrials />
        <div className="FrontPage_OT_Block">

            <FrontPage_OT_InfoBlock />
            <FrontPage_OT_InfoBlock />
            <FrontPage_OT_InfoBlock />
            <FrontPage_OT_InfoBlock />
        </div>
    </div>;

};
