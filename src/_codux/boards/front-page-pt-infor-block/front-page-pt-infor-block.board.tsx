import { createBoard } from '@wixc3/react-board';
import { FrontPage_PT_InforBlock } from '../../../components/front-page-pt-infor-block/front-page-pt-infor-block';

export default createBoard({
    name: 'FrontPage_PT_InforBlock',
    Board: () => <FrontPage_PT_InforBlock />,
    isSnippet: true,
});
