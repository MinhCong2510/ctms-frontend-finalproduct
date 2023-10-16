import { createBoard } from '@wixc3/react-board';
import { OTFields_MainPage } from '../../../components/ot-fields-main-page/ot-fields-main-page';

export default createBoard({
    name: 'OTFields_MainPage',
    Board: () => <OTFields_MainPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 470,
        canvasHeight: 200
    }
});
