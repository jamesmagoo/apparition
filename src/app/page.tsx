import Stargazer from "./components/Stargazer";


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

async function getNotes() {
  const res = await fetch("http://localhost:4000/data")
  const data = await res.json(); // awaiting the result of the json method
  return data as InputData[];
}

function transformData2(inputData: InputData[]) {
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

function logNodesAndLinks(data: GraphStructure) {
  console.log("Nodes:");
  data.nodes.forEach(node => {
    console.log(`- ID: ${node.id}, Title: ${node.title}, Summary: ${node.summary}`);
  });

  console.log("Links:");
  data.links.forEach(link => {
    console.log(`- Source: ${link.source}, Target: ${link.target}`);
  });
}



/**
 * 
 * MAIN PAGE 
 * 
 */
export default async function Home() {

 

  const data = await getNotes();
  const graphDataStructure: GraphStructure = transformData3(data);
  if (typeof navigator !== 'undefined') {
    // navigator is defined, safe to use here
    console.log(navigator.userAgent);
    logNodesAndLinks(graphDataStructure)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-100 h-max">
      <Stargazer graph={graphDataStructure}/>
      <h6>Not in a million years</h6>
    </div>
  )
}
