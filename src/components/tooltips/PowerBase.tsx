import React from "react";
import { PowerModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";

interface Props extends Pick<PowerModel, "name" | "description" | "image"> {
    showImage?: boolean;
    showGradient?: boolean;
    subtitle: string;
}

const PowerTooltipBase = ({
    name,
    description,
    image,
    subtitle,
    showImage = false,
    showGradient = false,
}: Props): JSX.Element => (
    <Tooltip className="power-tooltip">
        {showImage && (
            <div className="tooltip-image">
                <img src={image} alt={name} />
            </div>
        )}
        <div className="tooltip-banner">
            <div className="tooltip-title-left">
                <h2 className="tooltip-title">{name}</h2>
                <p className="tooltip-subtitle">{subtitle}</p>
            </div>
        </div>
        <div className="tooltip-body">
            <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: description }} />
            {showGradient && <div className="tooltip-gradient" />}
        </div>
    </Tooltip>
);

export default PowerTooltipBase;
export { Props as PowerTooltipBaseProps };
