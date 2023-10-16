import { createBoard } from '@wixc3/react-board';
import { Trial1_Phase4_Observ } from '../../../components/trial-1-phase-4-observ/trial-1-phase-4-observ';

export default createBoard({
    name: 'Trial1_Phase4_Observ',
    Board: () => <Trial1_Phase4_Observ />,
    isSnippet: true,
});
