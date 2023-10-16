import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase2_Obser } from '../../../components/trial-1-phase-2-obser/trial-1-phase-2-obser';

export default createBoard({
    name: 'Trial1_Phase2_Obser',
    Board: () => <Trial1_Phase2_Obser />,
    isSnippet: true,
});
