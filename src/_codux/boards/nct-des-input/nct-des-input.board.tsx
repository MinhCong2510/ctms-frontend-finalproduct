import { createBoard } from '@wixc3/react-board';
import { NCT_DesInput } from '../../../components/nct-des-input/nct-des-input';

export default createBoard({
    name: 'NCT_DesInput',
    Board: () => <NCT_DesInput />,
    isSnippet: true,
});
