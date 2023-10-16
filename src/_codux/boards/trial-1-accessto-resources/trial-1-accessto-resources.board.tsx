import { createBoard } from '@wixc3/react-board';
import { Trial1_AccesstoResources } from '../../../components/trial-1-accessto-resources/trial-1-accessto-resources';

export default createBoard({
    name: 'Trial1_AccesstoResources',
    Board: () => <Trial1_AccesstoResources />,
    isSnippet: true,
});
