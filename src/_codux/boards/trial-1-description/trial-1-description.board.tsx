import { createBoard } from '@wixc3/react-board';
import { Trial1_Description } from '../../../components/trial-1-description/trial-1-description';

export default createBoard({
    name: 'Trial1_Description',
    Board: () => <Trial1_Description />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 600
    }
});
