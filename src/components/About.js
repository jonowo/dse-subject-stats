import TextTooltip from './TextTooltip';

function About() {
    return (
        <>
            <h3>About</h3>
            <p>
                <TextTooltip text="Hong Kong Diploma of Secondary Education">HKDSE</TextTooltip> is
                the university entrance exam in Hong Kong.
                This website aggregates candidates' results in HKDSE Category A subjects as released
                by <TextTooltip text="Hong Kong Examinations and Assessment Authority">HKEAA</TextTooltip>.
            </p>
            <p>
                I may or may not remember to update this website after HKDSE results are released each year.
                Remind me <a href="https://t.me/jowonowo" target="_blank" rel="noreferrer">here</a> if
                you think I forgor.
            </p>
            <p>
                Made by a 2022 HKDSE candidate.
            </p>
            <p>
                Source code: <a href="https://github.com/jonowo/dse-subject-stats" target="_blank" rel="noreferrer">
                    jonowo/dse-subject-stats
                </a>
                <br />
                Data: <a href="https://github.com/jonowo/dse-subject-stats-json" target="_blank" rel="noreferrer">
                    jonowo/dse-subject-stats-json
                </a>
            </p>
        </>
    );
}

export default About;
