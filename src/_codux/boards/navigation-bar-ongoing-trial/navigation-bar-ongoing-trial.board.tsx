import { createBoard } from '@wixc3/react-board';
import { NavigationBar_OngoingTrial } from '../../../components/navigation-bar-ongoing-trial/navigation-bar-ongoing-trial';

export default createBoard({
    name: 'NavigationBar_OngoingTrial',
    Board: () => <NavigationBar_OngoingTrial />,
    isSnippet: true,
});
