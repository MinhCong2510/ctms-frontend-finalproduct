import { createBoard } from '@wixc3/react-board';
import { Trial1_Participants } from '../../../components/trial-1-participants/trial-1-participants';

export default createBoard({
    name: 'Trial1_Participants',
    Board: () => <Trial1_Participants />,
    isSnippet: true,
});
