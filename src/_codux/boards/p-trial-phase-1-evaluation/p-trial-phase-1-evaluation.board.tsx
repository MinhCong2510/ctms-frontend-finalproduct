import { createBoard } from '@wixc3/react-board';
import { PTrial_Phase1_Evaluation } from '../../../components/p-trial-phase-1-evaluation/p-trial-phase-1-evaluation';

export default createBoard({
    name: 'PTrial_Phase1_Evaluation',
    Board: () => <PTrial_Phase1_Evaluation />,
    isSnippet: true,
});
