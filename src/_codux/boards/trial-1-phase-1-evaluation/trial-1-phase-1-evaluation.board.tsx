import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase1_Evaluation } from '../../../components/trial-1-phase-1-evaluation/trial-1-phase-1-evaluation';

export default createBoard({
    name: 'Trial1_Phase1_Evaluation',
    Board: () => <Trial1_Phase1_Evaluation />,
    isSnippet: true,
});
