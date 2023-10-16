import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase3_Obser } from '../../../components/trial-1-phase-3-obser/trial-1-phase-3-obser';

export default createBoard({
    name: 'Trial1_Phase3_Obser',
    Board: () => <Trial1_Phase3_Obser />,
    isSnippet: true,
});
