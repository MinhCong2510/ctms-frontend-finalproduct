import { createBoard } from '@wixc3/react-board';
import { Header_SearchButton } from '../../../components/header-search-button/header-search-button';

export default createBoard({
    name: 'Header_SearchButton',
    Board: () => <Header_SearchButton />,
    isSnippet: true,
});
