import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase2_Evaluation } from '../../../components/trial-1-phase-2-evaluation/trial-1-phase-2-evaluation';

export default createBoard({
    name: 'Trial1_Phase2_Evaluation',
    Board: () => <Trial1_Phase2_Evaluation />,
    isSnippet: true,
});
