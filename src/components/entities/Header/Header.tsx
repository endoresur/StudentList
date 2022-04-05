
import * as SC from "./styles.d"
import WrapperContainer from "../../ui/WrapperContainer"
import { useStore } from "../../../hooks/useStore";

const Header = () => {

    const store = useStore()
    const isMobile = store.optionsStore.isMobile

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
