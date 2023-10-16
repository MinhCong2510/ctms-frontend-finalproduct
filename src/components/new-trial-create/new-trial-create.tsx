import classNames from 'classnames';
import styles from './new-trial-create.module.scss';

export interface NewTrial_CreateProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewTrial_Create = ({ className }: NewTrial_CreateProps) => {
    return (
        <div >
            <div className="NewClinicalTrial"> <h3>New Clinical Trial</h3></div>
            <form className={className = 'NewTrial_Form'}>
                <label >Trial Name:<input type="text" className="NewTrial_input" /> </label>

                <label >Description:<input type="text" className="NewTrial_inputDes" /></label>

                <label >Sponsor:<input type="text" className="NewTrial_input" /></label>
                <br />
                <div>
                    <input
                        type="submit"
                        value="Create Clinical Trial"
                        style={{ color: '#FFFFFF', backgroundColor: '#ff0000', alignSelf: 'start', textAlign: 'center' }} />
                </div>
            </form>
        </div>
    );
};
