import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react/headless";

interface Props {
    title: string;
    tooltip: (show: boolean) => ReactNode;
}

const StyledTarget = styled.span`
    cursor: pointer;
    color: #e29900;
`;

const Target = ({ title, tooltip }: Props): JSX.Element => {
    const [visible, setVisible] = useState(false);
    const show = (): void => setVisible(true);
    const hide = (): void => setVisible(false);

    return (
        <Tippy visible={visible} render={() => tooltip(visible)}>
            <StyledTarget className="hex-tooltip-target" onMouseOver={show} onMouseOut={hide}>
                {title}
            </StyledTarget>
        </Tippy>
    );
};

export default Target;
