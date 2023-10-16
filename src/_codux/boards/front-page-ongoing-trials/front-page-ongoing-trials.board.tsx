import { createBoard } from '@wixc3/react-board';
import { FrontPage_OngoingTrials } from '../../../components/front-page-ongoing-trials/front-page-ongoing-trials';

export default createBoard({
    name: 'FrontPage_OngoingTrials',
    Board: () => <FrontPage_OngoingTrials />,
    isSnippet: true,
});
