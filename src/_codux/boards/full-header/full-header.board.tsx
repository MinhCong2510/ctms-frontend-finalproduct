import { createBoard } from '@wixc3/react-board';
import { Full_Header } from '../../../components/full-header/full-header';

export default createBoard({
    name: 'Full_Header',
    Board: () => <Full_Header />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1041
    }
});
