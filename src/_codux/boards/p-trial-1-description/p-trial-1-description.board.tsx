import { createBoard } from '@wixc3/react-board';
import { PTrial_1_Description } from '../../../components/p-trial-1-description/p-trial-1-description';

export default createBoard({
    name: 'PTrial_1_Description',
    Board: () => <PTrial_1_Description />,
    isSnippet: true,
});
