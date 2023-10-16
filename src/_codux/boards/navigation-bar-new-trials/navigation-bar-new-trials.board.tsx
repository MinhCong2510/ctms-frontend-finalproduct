import { createBoard } from '@wixc3/react-board';
import { NavigationBar_NewTrials } from '../../../components/navigation-bar-new-trials/navigation-bar-new-trials';

export default createBoard({
    name: 'NavigationBar_NewTrials',
    Board: () => <NavigationBar_NewTrials />,
    isSnippet: true,
});
