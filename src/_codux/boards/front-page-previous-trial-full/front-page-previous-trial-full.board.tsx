import { createBoard } from '@wixc3/react-board';
import { FrontPage_PreviousTrialFull } from '../../../components/front-page-previous-trial-full/front-page-previous-trial-full';

export default createBoard({
    name: 'FrontPage_PreviousTrialFull',
    Board: () => <FrontPage_PreviousTrialFull />,
    isSnippet: true,
});
