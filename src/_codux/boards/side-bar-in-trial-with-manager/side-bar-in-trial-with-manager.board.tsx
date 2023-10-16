import { createBoard } from '@wixc3/react-board';
import { SideBar_inTrial_withManager } from '../../../components/side-bar-in-trial-with-manager/side-bar-in-trial-with-manager';

export default createBoard({
    name: 'SideBar_inTrial_withManager',
    Board: () => <SideBar_inTrial_withManager />,
    isSnippet: true,
});
