import { createBoard } from '@wixc3/react-board';
import { PTFields_MainPage } from '../../../components/pt-fields-main-page/pt-fields-main-page';

export default createBoard({
    name: 'PTFields_MainPage',
    Board: () => <PTFields_MainPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 566,
        canvasHeight: 200
    }
});
