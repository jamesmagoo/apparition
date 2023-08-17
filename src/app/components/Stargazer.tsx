'use client'
import { ForceGraph3D } from "react-force-graph"

type Props = {
    graph : GraphStructure;
}

type Node = {
    id: string;
    name?: string;
    title?: string;
    summary?: string;
};

type GraphStructure = {
    nodes: Node[];
    links: { source: string; target: string }[];
};


const Stargazer = ({graph}: Props) => {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 m-6 bg-blue-400 h-max">
            <ForceGraph3D
                //graphData={genRandomTreeNoLinks(25,false)}
                graphData={graph}
                width={1200}
                height={800}
                linkOpacity={1}
                linkColor={"purple"}
                backgroundColor={"black"}
                nodeLabel={(node) => `
                            <div style="font-family: Arial; background-color: rgba(255, 155, 255, 0.8); padding: 5px; border-radius: 5px;">
                            <strong>Title:</strong> ${node.title || 'No title'}
                            <br />
                            <strong>Summary:</strong> ${node.summary || 'No summary'}
                            </div>
                        `}
                //onNodeHover={(node)=>{console.log(`here we go : ${node?.id}`)}}
                onNodeClick={(node) => {
                    console.log(`here we go : ${node?.title}`)
                    console.log(`here we go : ${node?.summary}`)
                }} />
        </div>
    )
}

export default Stargazer