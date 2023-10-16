import { createBoard } from '@wixc3/react-board';
import { FullNavBar } from '../../../components/full-nav-bar/full-nav-bar';

export default createBoard({
    name: 'FullNavBar',
    Board: () => <FullNavBar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1026,
        canvasHeight: 72,
        windowHeight: 641
    }
});
