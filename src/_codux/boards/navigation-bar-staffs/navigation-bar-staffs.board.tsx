import { createBoard } from '@wixc3/react-board';
import { NavigationBar_Staffs } from '../../../components/navigation-bar-staffs/navigation-bar-staffs';

export default createBoard({
    name: 'NavigationBar_Staffs',
    Board: () => <NavigationBar_Staffs />,
    isSnippet: true,
});
