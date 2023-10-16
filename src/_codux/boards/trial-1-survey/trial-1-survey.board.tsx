import { createBoard } from '@wixc3/react-board';
import { Trial1_Survey } from '../../../components/trial-1-survey/trial-1-survey';

export default createBoard({
    name: 'Trial1_Survey',
    Board: () => <Trial1_Survey />,
    isSnippet: true,
});
