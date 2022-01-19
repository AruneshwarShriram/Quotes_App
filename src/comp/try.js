import React from "react";

import Quotes from "./quotes";
const Try=()=>{
    return(
        <div class="grid grid-cols-3">
            {
                Quotes.map(quote=>
                    <div>
                        {quote.Quote}
                        {quote.Author}
                        {quote.Category}

                    </div>
                    )
            }
        </div>)
}
export default Try;