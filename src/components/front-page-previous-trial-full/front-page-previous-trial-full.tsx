import classNames from 'classnames';
import styles from './front-page-previous-trial-full.module.scss';
import { FrontPage_PT_InforBlock } from '../front-page-pt-infor-block/front-page-pt-infor-block';
import { FrontPage_PreviousTrial } from '../front-page-previous-trial/front-page-previous-trial';

export interface FrontPage_PreviousTrialFullProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





export const FrontPage_PreviousTrialFull = ({ className }: FrontPage_PreviousTrialFullProps) => {
    return <div className="FrontPage_OT_Header">
        <FrontPage_PreviousTrial />
        <div className='FrontPage_OT_Block'>
            <FrontPage_PT_InforBlock />
            <FrontPage_PT_InforBlock />
            <FrontPage_PT_InforBlock />
            <FrontPage_PT_InforBlock />
        </div>
    </div>
}
