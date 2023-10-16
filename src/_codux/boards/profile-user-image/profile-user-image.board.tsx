import { createBoard } from '@wixc3/react-board';
import { Profile_UserImage } from '../../../components/profile-user-image/profile-user-image';

export default createBoard({
    name: 'Profile_UserImage',
    Board: () => <Profile_UserImage />,
    isSnippet: true,
});
