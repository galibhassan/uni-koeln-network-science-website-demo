
function randX(x) {
    return Math.floor(Math.random() * x) + 1;
}

// create an array with nodes
var nodes = new vis.DataSet([
    {
        id: 0,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_D_Witthaut-min.jpg',
        label: 'Dirk',
        size: 50,
        group: "prof"

    },
    {
        id: 1,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_P_Boettcher-min.jpg',
        label: 'Philipp',
        group: "postdoctoral"


    },
    {
        id: 2,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_C_Han-min.jpg',
        label: 'Chuck',
        group: "doctoral"


    },
    {
        id: 3,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_F_Kaiser-min.jpg',
        label: 'Franz',
        group: "doctoral"


    },
    {
        id: 4,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_J_Kruse-min.jpg',
        label: 'Johannes',
        group: "doctoral"


    },
    {
        id: 5,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_L_Rydin-min.jpg',
        label: 'Leo',
        group: "doctoral"


    },
    {
        id: 6,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_R_Biertz-min.jpg',
        label: 'Raphael',
        group: "master"


    },
    {
        id: 7,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_M_Dahlmanns-min.jpg',
        label: 'Matthias',
        group: "master"


    },
    {
        id: 8,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_G_Hassan-min.jpg',
        label: 'Galib',
        group: "master"
    },
    {
        id: 9,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_L_Kiefer-min.jpg',
        label: 'Lucas',
        group: "master"


    },
    {
        id: 10,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_M_Titz-min.jpeg',
        label: 'Maurizio',
        group: "master"


    },
    {
        id: 11,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_J_Wassmer-min.jpg',
        label: 'Jonas',
        group: "master"


    },
    {
        id: 12,
        shape: 'circularImage',
        image: 'http://www.thp.uni-koeln.de/witthaut/images/Photo_C_Mix-min.jpg',
        label: 'Eva',
        group: "bachelor"


    },
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },
    { from: 0, to: 6 },
    { from: 0, to: 7 },
    { from: 0, to: 8 },
    { from: 0, to: 9 },
    { from: 0, to: 10 },
    { from: 0, to: 11 },
    { from: 0, to: 12 },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },
    { from: randX(12), to: randX(12) },

]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    height: '100%',
    width: '100%',
    nodes: {
        borderWidth: 7,
        size: 30,
        shadow: true,
        color: {
            border: "#3b8fa8",
            background: "#666666",
        },
        font: { color: "#bfc6c9" },
    },
    edges: {
        color: "orange",
        shadow: true,
    },
    groups: {
        prof: {
            color: { background: "#c64d56", border: "#c64d56" },

        },
        postdoctoral: {
            color: { background: "#9535b0", border: "#9535b0" },

        },
        doctoral: {
            color: { background: "#b0cc5e", border: "#b0cc5e" },

        },
        master: {
            color: { background: "#00a2c7", border: "#00a2c7" },

        },
        bachelor: {
            color: { background: "orange", border: "orange" },

        },
    },
    physics:{
        repulsion: {
            centralGravity: 0.9,
            springLength: 200,
            springConstant: 0.05,
            nodeDistance: 50,
            damping: 0.09
          },
          stabilization: {
            enabled: false,
            iterations: 2,
            updateInterval: 100,
            onlyDynamicEdges: false,
            fit: true
          },
    }
};

// initialize your network!
var network = new vis.Network(container, data, options);

