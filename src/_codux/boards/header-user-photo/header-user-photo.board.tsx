import { createBoard } from '@wixc3/react-board';
import { Header_UserPhoto } from '../../../components/header-user-photo/header-user-photo';

export default createBoard({
    name: 'Header_UserPhoto',
    Board: () => <Header_UserPhoto />,
    isSnippet: true,
});
