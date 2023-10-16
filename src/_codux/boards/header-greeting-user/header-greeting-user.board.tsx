import { createBoard } from '@wixc3/react-board';
import { Header_GreetingUser } from '../../../components/header-greeting-user/header-greeting-user';

export default createBoard({
    name: 'Header_GreetingUser',
    Board: () => <Header_GreetingUser />,
    isSnippet: true,
});
