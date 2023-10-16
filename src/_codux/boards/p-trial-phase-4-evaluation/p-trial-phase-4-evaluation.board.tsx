import { createBoard } from '@wixc3/react-board';
import { PTrial_Phase4_Evaluation } from '../../../components/p-trial-phase-4-evaluation/p-trial-phase-4-evaluation';

export default createBoard({
    name: 'PTrial_Phase4_Evaluation',
    Board: () => <PTrial_Phase4_Evaluation />,
    isSnippet: true,
});
