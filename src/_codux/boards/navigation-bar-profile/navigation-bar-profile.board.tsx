import { createBoard } from '@wixc3/react-board';
import { NavigationBar_Profile } from '../../../components/navigation-bar-profile/navigation-bar-profile';

export default createBoard({
    name: 'NavigationBar_Profile',
    Board: () => <NavigationBar_Profile />,
    isSnippet: true,
});
