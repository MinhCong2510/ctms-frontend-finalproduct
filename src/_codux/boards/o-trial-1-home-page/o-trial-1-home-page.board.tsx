import { createBoard } from '@wixc3/react-board';
import { OTrial1_HomePage } from '../../../components/o-trial-1-home-page/o-trial-1-home-page';

export default createBoard({
    name: 'OTrial1_HomePage',
    Board: () => <OTrial1_HomePage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 612
    }
});
