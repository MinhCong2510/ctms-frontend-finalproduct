import { createBoard } from '@wixc3/react-board';
import { PTrial_FinalEvalution } from '../../../components/p-trial-final-evalution/p-trial-final-evalution';

export default createBoard({
    name: 'PTrial_FinalEvalution',
    Board: () => <PTrial_FinalEvalution />,
    isSnippet: true,
});
