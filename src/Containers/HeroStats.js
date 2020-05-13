import React from "react"
import styled from "styled-components"

import HeroCard from "../Components/HeroCard"

const Grid = styled.div`
grid-column: 2/-2;
display: grid;
max-width: 1200px;
grid-gap: 20px;
margin-bottom: 20px;

`

function HeroStats({cardData}){
    console.log(cardData)
    return (
        <Grid>
            {cardData.map((cardObj) => <HeroCard social={cardObj.social} username={cardObj.username} value={cardObj.value} delta={cardObj.delta} text={cardObj.text}/> )}
        </Grid>
    )
}

export default HeroStats