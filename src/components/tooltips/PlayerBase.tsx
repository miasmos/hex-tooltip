import React, { ReactElement } from "react";
import styled from "styled-components";
import { PlayerModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";

interface Props extends Pick<PlayerModel, "name" | "description" | "difficulty" | "image"> {
    showImage?: boolean;
    showGradient?: boolean;
    subtitle: string | ReactElement;
}

const StyledTooltip = styled(Tooltip)`
    & .tooltip-banner {
        padding: 19px;
    }

    & .tooltip-image img {
        filter: brightness(1.7);
    }
`;

const PlayerTooltipBase = ({
    name,
    description,
    image,
    showImage = false,
    showGradient = false,
    subtitle,
}: Props): JSX.Element => (
    <StyledTooltip className="player-tooltip">
        {showImage && (
            <div className="tooltip-image tooltip-image--player">
                <img src={image} alt={name} />
            </div>
        )}
        <div className="tooltip-banner">
            <div className="tooltip-title-left">
                <h2 className="tooltip-title">{name}</h2>
            </div>
            <div className="tooltip-title-right">&nbsp;</div>
        </div>
        <div className="tooltip-body">
            <div className="tooltip-text">
                {subtitle}
                <br />
                <br />
                <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            {showGradient && <div className="tooltip-gradient" />}
        </div>
    </StyledTooltip>
);

export default PlayerTooltipBase;
export { Props as PlayerTooltipBaseProps };
