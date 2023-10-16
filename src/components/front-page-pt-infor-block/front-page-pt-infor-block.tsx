import classNames from 'classnames';
import styles from './front-page-pt-infor-block.module.scss';

export interface FrontPage_PT_InforBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FrontPage_PT_InforBlock = ({ className }: FrontPage_PT_InforBlockProps) => {
    return <div className={classNames(styles.projectCard, 'FP_OT_InfoBlock')}> Previous Trial [number]: Trial Name- Code- Manager<img
        src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
        alt=""
        style={{
            paddingRight: '10px',
            paddingLeft: '10px',
            height: 150,
            width: 150,
            objectFit: 'cover',
}
