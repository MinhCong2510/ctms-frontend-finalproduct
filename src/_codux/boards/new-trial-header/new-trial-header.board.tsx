import { createBoard } from '@wixc3/react-board';
import { NewTrial_Header } from '../../../components/new-trial-header/new-trial-header';

export default createBoard({
    name: 'NewTrial_Header',
    Board: () => <NewTrial_Header />,
    isSnippet: true,
});
