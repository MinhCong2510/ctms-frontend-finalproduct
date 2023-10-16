import { createBoard } from '@wixc3/react-board';
import { OTFields_MainFields } from '../../../components/ot-fields-main-fields/ot-fields-main-fields';

export default createBoard({
    name: 'OTFields_MainFields',
    Board: () => <OTFields_MainFields />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 559,
        canvasHeight: 828
    }
});
