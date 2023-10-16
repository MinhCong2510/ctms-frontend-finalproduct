import { createBoard } from '@wixc3/react-board';
import { FrontPage_OngoingTrialsFull } from '../../../components/front-page-ongoing-trials-full/front-page-ongoing-trials-full';

export default createBoard({
    name: 'FrontPage_OngoingTrialsFull',
    Board: () => <FrontPage_OngoingTrialsFull />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 325,
        windowWidth: 1012,
        canvasWidth: 914
    }
});
