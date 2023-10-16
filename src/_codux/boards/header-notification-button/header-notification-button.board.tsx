import { createBoard } from '@wixc3/react-board';
import { Header_NotificationButton } from '../../../components/header-notification-button/header-notification-button';

export default createBoard({
    name: 'Header_NotificationButton',
    Board: () => <Header_NotificationButton />,
    isSnippet: true,
});
