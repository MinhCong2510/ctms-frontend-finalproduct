import classNames from 'classnames';
import styles from './trial-1-participants.module.scss';

export interface Trial1_ParticipantsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_Participants = ({ className }: Trial1_ParticipantsProps) => {
    return <div>
        <button className="Trial1_information">Participants</button>
    </div>;;
};
