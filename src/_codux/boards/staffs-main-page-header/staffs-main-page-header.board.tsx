import { createBoard } from '@wixc3/react-board';
import { Staffs_MainPage_Header } from '../../../components/staffs-main-page-header/staffs-main-page-header';

export default createBoard({
    name: 'Staffs_MainPage_Header',
    Board: () => <Staffs_MainPage_Header />,
    isSnippet: true,
});
