import { createBoard } from '@wixc3/react-board';
import { Header__Button } from '../../../components/header-button/header-button';

export default createBoard({
    name: 'Header_CommentButton',
    Board: () => <Header__Button />,
    isSnippet: true,
});
