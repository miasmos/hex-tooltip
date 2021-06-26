import React from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { PlayerModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";
import Translation from "../../util/translation";
import ClassName from "../../util/className";

type Props = Pick<PlayerModel, "name" | "description" | "difficulty">;

const StyledTooltip = styled(Tooltip)`
    & .tooltip-banner {
        padding: 19px;
    }
`;

const PlayerTooltip = ({ name, description, difficulty }: Props): JSX.Element => {
    const { t } = useTranslation();
    const difficultyText = t(Translation.difficulty(difficulty));
    const difficultyClass = ClassName.difficulty(difficulty);

    return (
        <StyledTooltip className="player-tooltip">
            <div className="tooltip-banner">
                <div className="tooltip-title-left">
                    <h2 className="tooltip-title">{name}</h2>
                </div>
                <div className="tooltip-title-right">&nbsp;</div>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text">
                    <Trans
                        i18nKey="difficulty"
                        values={{ difficulty: difficultyText }}
                        components={{
                            span: <span className={`difficulty difficulty-${difficultyClass}`} />,
                        }}
                    />
                    <br />
                    <br />
                    <div
                        className="tooltip-text"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
                <div className="tooltip-gradient" />
            </div>
        </StyledTooltip>
    );
};

export default PlayerTooltip;
