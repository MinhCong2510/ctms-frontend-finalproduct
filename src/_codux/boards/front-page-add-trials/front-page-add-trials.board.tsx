import { createBoard } from '@wixc3/react-board';
import { FrontPage_AddTrials } from '../../../components/front-page-add-trials/front-page-add-trials';

export default createBoard({
    name: 'FrontPage_AddTrials',
    Board: () => <FrontPage_AddTrials />,
    isSnippet: true,
});
