import { createBoard } from '@wixc3/react-board';
import { PTFields_MainFields } from '../../../components/pt-fields-main-fields/pt-fields-main-fields';

export default createBoard({
    name: 'PTFields_MainFields',
    Board: () => <PTFields_MainFields />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 565
    }
});
