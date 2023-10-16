import { createBoard } from '@wixc3/react-board';
import { Staffs_MainPage } from '../../../components/staffs-main-page/staffs-main-page';

export default createBoard({
    name: 'Staffs_MainPage',
    Board: () => <Staffs_MainPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 900
    }
});
