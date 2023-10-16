import { createBoard } from '@wixc3/react-board';
import { NavigationBar_PreviousTrial } from '../../../components/navigation-bar-previous-trial/navigation-bar-previous-trial';

export default createBoard({
    name: 'NavigationBar_PreviousTrial',
    Board: () => <NavigationBar_PreviousTrial />,
    isSnippet: true,
});
