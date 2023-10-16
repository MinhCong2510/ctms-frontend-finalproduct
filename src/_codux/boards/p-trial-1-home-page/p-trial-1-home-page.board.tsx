import { createBoard } from '@wixc3/react-board';
import { PTrial1_HomePage } from '../../../components/p-trial-1-home-page/p-trial-1-home-page';

export default createBoard({
    name: 'PTrial1_HomePage',
    Board: () => <PTrial1_HomePage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 612
    }
});
