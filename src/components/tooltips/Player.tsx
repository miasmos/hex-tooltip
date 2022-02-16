import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Translation from "../../util/translation";
import ClassName from "../../util/className";
import PlayerTooltipBase, { PlayerTooltipBaseProps } from "./PlayerBase";

type Props = Omit<PlayerTooltipBaseProps, "subtitle">;

const PlayerTooltip = ({ difficulty, ...props }: Props): JSX.Element => {
    const { t } = useTranslation();
    const difficultyText = t(Translation.difficulty(difficulty));
    const difficultyClass = ClassName.difficulty(difficulty);

    return (
        <PlayerTooltipBase
            subtitle={
                <Trans
                    i18nKey="difficulty"
                    values={{ difficulty: difficultyText }}
                    components={{
                        span: <span className={`difficulty difficulty-${difficultyClass}`} />,
                    }}
                />
            }
            difficulty={difficulty}
            {...props}
        />
    );
};

export default PlayerTooltip;
