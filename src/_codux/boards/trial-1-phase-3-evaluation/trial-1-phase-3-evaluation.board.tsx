import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase3_Evaluation } from '../../../components/trial-1-phase-3-evaluation/trial-1-phase-3-evaluation';

export default createBoard({
    name: 'Trial1_Phase3_Evaluation',
    Board: () => <Trial1_Phase3_Evaluation />,
    isSnippet: true,
});
