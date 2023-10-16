import { createBoard } from '@wixc3/react-board';
import { NewTrial_CreateButton } from '../../../components/new-trial-create-button/new-trial-create-button';

export default createBoard({
    name: 'NewTrial_CreateButton',
    Board: () => <NewTrial_CreateButton />,
    isSnippet: true,
});
