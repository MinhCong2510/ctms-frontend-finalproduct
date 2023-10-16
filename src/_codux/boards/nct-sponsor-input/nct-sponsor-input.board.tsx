import { createBoard } from '@wixc3/react-board';
import { NCT_SponsorInput } from '../../../components/nct-sponsor-input/nct-sponsor-input';

export default createBoard({
    name: 'NCT_SponsorInput',
    Board: () => <NCT_SponsorInput />,
    isSnippet: true,
});
