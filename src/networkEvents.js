// Globals: people

const displayPeopleInfoDiv = document.querySelector(".people-details")

network.on("selectNode", function (params) {
    nodeId = params.nodes[0]
    displayPeopleInfo({
        nodeId: params.nodes[0],
        displayPeopleInfoDiv,
        people
    })
});

const displayPeopleInfo = ({displayPeopleInfoDiv, people, nodeId})=>{
    displayPeopleInfoDiv.innerHTML = '';
    const individualDetail = document.createElement('div')
    individualDetail.classList.add("individual-detail")
    individualDetail.innerHTML = people[nodeId].html
    displayPeopleInfoDiv.appendChild(individualDetail)
}
