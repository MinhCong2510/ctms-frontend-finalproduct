import { createBoard } from '@wixc3/react-board';
import { FrontPage_OT_InfoBlock } from '../../../components/front-page-ot-info-block/front-page-ot-info-block';

export default createBoard({
    name: 'FrontPage_OT_InfoBlock',
    Board: () => <FrontPage_OT_InfoBlock />,
    isSnippet: true,
});
