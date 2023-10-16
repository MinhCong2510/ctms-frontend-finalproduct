import { createBoard } from '@wixc3/react-board';
import { FrontPage_PreviousTrial } from '../../../components/front-page-previous-trial/front-page-previous-trial';

export default createBoard({
    name: 'FrontPage_PreviousTrial',
    Board: () => <FrontPage_PreviousTrial />,
    isSnippet: true,
});
