import { createBoard } from '@wixc3/react-board';
import { PTrial_Phase3_Evaluation } from '../../../components/p-trial-phase-3-evaluation/p-trial-phase-3-evaluation';

export default createBoard({
    name: 'PTrial_Phase3_Evaluation',
    Board: () => <PTrial_Phase3_Evaluation />,
    isSnippet: true,
});
