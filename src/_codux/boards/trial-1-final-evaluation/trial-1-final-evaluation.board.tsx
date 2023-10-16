import { createBoard } from '@wixc3/react-board';
import { Trial1_FinalEvaluation } from '../../../components/trial-1-final-evaluation/trial-1-final-evaluation';

export default createBoard({
    name: 'Trial1_FinalEvaluation',
    Board: () => <Trial1_FinalEvaluation />,
    isSnippet: true,
});
