import { createBoard } from '@wixc3/react-board';
import { Staffs_MainPage_StaffsInfo } from '../../../components/staffs-main-page-staffs-info/staffs-main-page-staffs-info';

export default createBoard({
    name: 'Staffs_MainPage_StaffsInfo',
    Board: () => <Staffs_MainPage_StaffsInfo />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 420
    }
});
