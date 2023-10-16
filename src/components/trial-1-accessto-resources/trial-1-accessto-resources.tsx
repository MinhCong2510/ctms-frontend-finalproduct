import classNames from 'classnames';
import styles from './trial-1-accessto-resources.module.scss';

export interface Trial1_AccesstoResourcesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial1_AccesstoResources = ({ className }: Trial1_AccesstoResourcesProps) => {
    return <div>
        <button className="Trial1_information">
              Access to Resources
        </button>
    </div>;
};
