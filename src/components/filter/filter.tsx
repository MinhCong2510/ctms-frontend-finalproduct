import classNames from 'classnames';
import styles from './filter.module.scss';

export interface FilterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Filter = ({ className }: FilterProps) => {
    return <div className="filter">
        <select placeholder="Filter" className="Filter_Staffs"><option>Filter</option>
            <option>Filter by Name</option>
            <option>Filter by Position</option><option>Filter by Occupation</option>
            <option>Filter by Involved Projects</option>
            <option>Filter from A to Z</option>
            <option>Filter from Z to A</option>
        </select></div>;
};
