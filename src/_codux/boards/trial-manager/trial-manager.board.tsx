import { createBoard } from '@wixc3/react-board';
import { TrialManager } from '../../../components/trial-manager/trial-manager';

export default createBoard({
    name: 'TrialManager',
    Board: () => <TrialManager />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 424
    }
});
