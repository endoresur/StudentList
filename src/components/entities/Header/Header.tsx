import RootStore from "../../../stores/RootStore"

import * as SC from "./styles.d"
import WrapperContainer from "../../ui/WrapperContainer"

const Header = () => {
    const isMobile = RootStore.options.isMobile

    return (
        <SC.HeaderRoot>
            <WrapperContainer>
                <SC.HeaderContainer>
                    <SC.LogoIcon isMobile />
                    <SC.Title>
                        STUDENTS
                        {!isMobile &&
                            <> by <a href='https://github.com/endoresur'>endoresur</a></>
                        }
                    </SC.Title>
                </SC.HeaderContainer>
            </WrapperContainer>
        </SC.HeaderRoot>
    );
};

export default Header
