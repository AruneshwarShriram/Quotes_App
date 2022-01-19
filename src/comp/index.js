import React from "react";
import DataTopics from "./dataTopics";
import EveryTopicCard from "./everytopiccard";
import ShowMore from "./showmore";

const Index=()=>{
    let firstfewtopics=[];
    let i=0;
    for (let x in DataTopics) {
        console.log(DataTopics[x].topic);
        firstfewtopics.push(DataTopics[x].topic);
        console.log(i);
        if(i===5){
            break
        }
        i=i+1;
    }
    
    
    return(
        <div class="py-10 bg-yellow-200">
            <div>
            <div class="font-bold text-2xl">
                Topics
            </div>
                
        <div class="grid grid-cols-4">
            
            {
                firstfewtopics.map(each=>
                    
                        <EveryTopicCard topic={each}/>  
                    ) 
            }
            <ShowMore/>
            </div>

        </div>
        </div>)
}
export default Index;