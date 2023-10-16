import { createBoard } from '@wixc3/react-board';
import { NCT_CreateDate } from '../../../components/nct-create-date/nct-create-date';

export default createBoard({
    name: 'NCT_CreateDate',
    Board: () => <NCT_CreateDate />,
    isSnippet: true,
});
