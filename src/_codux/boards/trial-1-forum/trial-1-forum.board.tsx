import { createBoard } from '@wixc3/react-board';
import { Trial1_Forum } from '../../../components/trial-1-forum/trial-1-forum';

export default createBoard({
    name: 'Trial1_Forum',
    Board: () => <Trial1_Forum />,
    isSnippet: true,
});
