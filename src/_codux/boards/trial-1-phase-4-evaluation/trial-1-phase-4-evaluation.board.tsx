import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase4_Evaluation } from '../../../components/trial-1-phase-4-evaluation/trial-1-phase-4-evaluation';

export default createBoard({
    name: 'Trial1_Phase4_Evaluation',
    Board: () => <Trial1_Phase4_Evaluation />,
    isSnippet: true,
});
