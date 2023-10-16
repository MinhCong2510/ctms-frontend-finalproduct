import { createBoard } from '@wixc3/react-board';
import { NCT_NameInput } from '../../../components/nct-name-input/nct-name-input';

export default createBoard({
    name: 'NCT_NameInput',
    Board: () => <NCT_NameInput />,
    isSnippet: true,
});
