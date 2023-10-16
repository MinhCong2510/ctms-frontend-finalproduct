import { createBoard } from '@wixc3/react-board';
import { NavigationBar_HomeButton } from '../../../components/navigation-bar-home-button/navigation-bar-home-button';

export default createBoard({
    name: 'NavigationBar_HomeButton',
    Board: () => <NavigationBar_HomeButton />,
    isSnippet: true,
});
