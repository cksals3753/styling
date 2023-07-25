import React from 'react';
import { Container, Wrapper, TodayStyling, Title, WeeklyStyling, Styling } from '../../styles/ranking_style';

const Ranking = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <TodayStyling>
                        <Title>
                            오늘의 옷
                        </Title>
                        <Styling>

                        </Styling>
                    </TodayStyling>
                    <WeeklyStyling>
                        <Title>
                            이주의 옷
                        </Title>
                    </WeeklyStyling>
                </Wrapper>
            </Container>
        </>
    )
}

export default Ranking;