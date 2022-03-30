import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const WrapperContainerRoot = styled.div`
    height: 100%;
    max-width: 1180px;
    padding: 0 25px;
    margin: auto;

    @media ${device.laptop} {
        max-width: 850px;
    }

    @media ${device.tablet} {
        max-width: 550px;
    }

    @media ${device.mobileL} {
        max-width: 450px;
    }
`