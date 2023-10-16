import classNames from 'classnames';
import styles from './front-page-ot-info-block.module.scss';

export interface FrontPage_OT_InfoBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FrontPage_OT_InfoBlock = ({ className }: FrontPage_OT_InfoBlockProps) => {
    return <div className={classNames(styles.projectCard, 'FP_OT_InfoBlock')}>Trial [number] : Trial Name- Code- Manager
    <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
        alt=""
        style={{
            paddingRight: '10px',
            paddingLeft: '10px',
            height: 150,
            width: 150,
            objectFit: 'cover',
        }}
    />
    </div>;
};
