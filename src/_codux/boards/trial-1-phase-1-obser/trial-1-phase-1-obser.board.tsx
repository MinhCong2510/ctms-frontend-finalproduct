import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase1_Obser } from '../../../components/trial-1-phase-1-obser/trial-1-phase-1-obser';

export default createBoard({
    name: 'Trial1_Phase1_Obser',
    Board: () => <Trial1_Phase1_Obser />,
    isSnippet: true,
});
