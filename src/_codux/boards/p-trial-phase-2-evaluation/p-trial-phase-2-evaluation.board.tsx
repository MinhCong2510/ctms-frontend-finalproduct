import { createBoard } from '@wixc3/react-board';
import { PTrial_Phase2_Evaluation } from '../../../components/p-trial-phase-2-evaluation/p-trial-phase-2-evaluation';

export default createBoard({
    name: 'PTrial_Phase2_Evaluation',
    Board: () => <PTrial_Phase2_Evaluation />,
    isSnippet: true,
});
