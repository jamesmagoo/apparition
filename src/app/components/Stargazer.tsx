'use client'
import { ForceGraph3D } from "react-force-graph"
import { useState, useEffect } from "react";

type Props = {
    graph? : GraphStructure | undefined ;
}

type InputData = {
    id: string;
    pubkey: string;
    created_at: number;
    kind: number;
    tags: Array<[string, string]>;
    content: string;
    sig: string;
  };

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

function transformData3(inputData: InputData[]) {
    // Creating nodes
    const nodes = inputData.map(obj => ({
      id: obj.id,
      title: obj.tags.find(tag => tag[0] === 'title')?.[1],
      summary: obj.tags.find(tag => tag[0] === 'summary')?.[1],
    }));
  
    // Creating links
    const links = [];
    for (const obj of inputData) {
      const eTags = obj.tags.filter(tag => tag[0] === 'e');
      for (const eTag of eTags) {
        const targetId = eTag[1];
        // Only add link if target node exists
        if (nodes.find(node => node.id === targetId)) {
          links.push({
            source: obj.id,
            target: targetId,
          });
        }
      }
    }
    return { nodes, links };
  }


export default function Stargazer({graph}: Props){

    //const [data, setData] = useState({ nodes: [{ id: 0 }], links: [] });
    const [data, setData] = useState(graph);

      useEffect(() => {
        console.log("getting notes from server....")
        fetch("http://localhost:4000/data")
        .then(response => response.json())
        .then(jsonData => {
           let graph = transformData3(jsonData)
          setData(graph);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 m-6 bg-blue-400 h-max">
            <ForceGraph3D
                graphData={data}
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

/**
 * 
 * 
 * SCRAP HEAP CHALLENGE
 * 
 * 
 */

function transformData2(inputData: InputData[]) {
    console.log("transforming...")
    // Extract all unique node IDs referenced in the 'e' tags
    const referencedIds = new Set(inputData.flatMap(obj => obj.tags.filter(tag => tag[0] === 'e').map(tag => tag[1])));
  
    // Create nodes for each object in the input data, including nodes for referenced IDs
    const nodes = Array.from(new Set([...inputData.map(obj => obj.id), ...referencedIds])).map(id => {
      const obj = inputData.find(obj => obj.id === id);
      return {
        id: id,
        title: obj?.tags.find(tag => tag[0] === 'title')?.[1],
        summary: obj?.tags.find(tag => tag[0] === 'summary')?.[1],
      };
    });
  
    // Create links from the 'e' tags
    const links = inputData.flatMap(obj => 
      obj.tags
        .filter(tag => tag[0] === 'e')
        .map(tag => ({
          source: obj.id,
          target: tag[1],
        }))
    );
  
    return { nodes, links };
  }
  
  
  function transformData(inputData: InputData[]) :GraphStructure {
    const nodes = inputData.map(obj => ({
      id: obj.id,
      title: obj.tags.find(tag => tag[0] === 'title')?.[1],
      summary: obj.tags.find(tag => tag[0] === 'summary')?.[1],
    }));
  
    const links = inputData.flatMap(obj => 
      obj.tags
        .filter(tag => tag[0] === 'e')
        .map(tag => ({
          source: obj.id,
          target: tag[1],
        }))
    );
  
    return { nodes, links };
  }