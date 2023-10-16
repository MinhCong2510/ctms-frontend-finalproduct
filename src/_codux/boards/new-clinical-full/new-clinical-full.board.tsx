import { createBoard } from '@wixc3/react-board';
import { NewClinicalFull } from '../../../components/new-clinical-full/new-clinical-full';

export default createBoard({
    name: 'NewClinicalFull',
    Board: () => <NewClinicalFull />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 327
    }
});
