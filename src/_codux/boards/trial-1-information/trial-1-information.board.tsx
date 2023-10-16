import { createBoard } from '@wixc3/react-board';
import { Trial1_Information } from '../../../components/trial-1-information/trial-1-information';

export default createBoard({
    name: 'Trial1_Information',
    Board: () => <Trial1_Information />,
    isSnippet: true,
});
