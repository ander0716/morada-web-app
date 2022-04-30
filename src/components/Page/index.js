import { Fragment } from "react";
import { Menu } from "../Menu";
import { PageWrapper } from "./styles";

export const Page = (props) => (
    <Fragment>
        <PageWrapper>
            {props.children}
        </PageWrapper>
        {
            !props.hideMenu && <Menu />
        }
        
    </Fragment>
)