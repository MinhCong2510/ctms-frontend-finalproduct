import { createBoard } from '@wixc3/react-board';
import { Trial1_RelatedTrials } from '../../../components/trial-1-related-trials/trial-1-related-trials';

export default createBoard({
    name: 'Trial1_RelatedTrials',
    Board: () => <Trial1_RelatedTrials />,
    isSnippet: true,
});
