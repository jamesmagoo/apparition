import { ForceGraph3D } from "react-force-graph"

type Props = {}
const Stargazer = (props: Props) => {

    const notesData = {
        "nodes": [ 
            { 
              "id": "id1",
              "name": "name1",
              "val": 1 ,
              "others" : {
                "note" : "sdasdsadasdas"
              }
            },
            { 
              "id": "id2",
              "name": "name2",
              "val": 10 
            },
        ],
        "links": [
            {
                "source": "id1",
                "target": "id2"
            },
        ]
    }

    function genRandomTree(N = 50, reverse = false) {
        return {
          nodes: [...Array(N).keys()].map(i => ({ id: i })),
            links: [...Array(N).keys()]
          .filter(id => id)
          .map(id => ({
            [reverse ? 'target' : 'source']: id,
            [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
          }))
        };
      }
      function genRandomTreeNoLinks(N = 50, reverse = false) {
        return {
          nodes: [...Array(N).keys()].map(i => ({ id: i })),
            links: [4]
          .filter(id => id)
          .map(id => ({
            [reverse ? 'target' : 'source']: id,
            [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
          }))
        };
      }

    return (
       <ForceGraph3D 
       graphData={genRandomTreeNoLinks(25,false)}
       width={1200}
       height={800}
       backgroundColor={"black"}
       onNodeClick={(node)=>{console.log(`here we go : ${node.name}`)}}
       onNodeHover={(node)=>{console.log(`here we go : ${node?.other?.note}`)}}/>
    )
}

export default Stargazer