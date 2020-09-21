const displayPeopleInfoDiv = document.querySelector(".people-details")

network.on("click", function(params){
    console.log("clicked")
})

network.on("selectNode", function (params) {
    nodeId = params.nodes[0]
    displayPeopleInfo({
        nodeId: params.nodes[0],
        displayPeopleInfoDiv,
        people
    })
});

const displayPeopleInfo = ({displayPeopleInfoDiv, people, nodeId})=>{
    console.log(nodeId)
    console.log(displayPeopleInfoDiv)
    displayPeopleInfoDiv.innerHTML = `
        <div class="individual-detail">   
            ${people[nodeId].html}
        <div>    
    `
}
