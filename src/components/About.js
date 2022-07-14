import { Trans, useTranslation } from 'react-i18next';
import TextTooltip from './TextTooltip';

function About() {
    const { t } = useTranslation();

    return (
        <>
            <h3>{t("about.title")}</h3>
            <p>
                <Trans i18nKey="about.part1">
                    <TextTooltip text="Hong Kong Diploma of Secondary Education"></TextTooltip>
                    <TextTooltip text="Hong Kong Examinations and Assessment Authority"></TextTooltip>
                </Trans>
            </p>
            <p>
                {t("about.part2")}
            </p>
            <p>
                <Trans i18nKey="about.part3">
                    <a href="https://t.me/jowonowo" target="_blank" rel="noreferrer"></a>
                </Trans>
            </p>
            <p>
                {t("about.part4")}
            </p>
            <p>
                {t("about.part5")}
                <a href="https://github.com/jonowo/dse-subject-stats" target="_blank" rel="noreferrer">
                    jonowo/dse-subject-stats
                </a>
                <br />
                {t("about.part6")}
                <a href="https://github.com/jonowo/dse-subject-stats-json" target="_blank" rel="noreferrer">
                    jonowo/dse-subject-stats-json
                </a>
            </p>
        </>
    );
}

export default About;
