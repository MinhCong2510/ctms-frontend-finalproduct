import classNames from 'classnames';
import styles from './front-page-add-trials.module.scss';

export interface FrontPage_AddTrialsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FrontPage_AddTrials = ({ className }: FrontPage_AddTrialsProps) => {
    return <button className="FrontPage_AddTrials">Add a new trial ( authorised by eHealth clinical trial specialists  - Hidden from staffs)</button>;
};
