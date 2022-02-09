import React from 'react';
import Indicator from "../indicators/Indicator"
import Grid from "@material-ui/core/Grid"
import {Card} from "@material-ui/core"

const Cards = ({ indicator }) => (

    <Grid>

            {
                indicator.map(( indicator ) => {
                    
                    return(
                        <Indicator
                        
                            bitcoin={indicator.bitcoin}
                            uf={ indicator.uf }
                        />
                    )
                })
            }

    </Grid>
)

export default Cards;
