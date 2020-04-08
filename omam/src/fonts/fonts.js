import { createGlobalStyle } from 'styled-components';

import TitlingGothicFBCompRegularWoff from './TitlingGothicFBCompRegular.woff';
import TitlingGothicFBCompRegularWoff2 from './TitlingGothicFBCompRegular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${TitlingGothicFBCompRegularWoff2}) format('woff2'),
        url(${TitlingGothicFBCompRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;