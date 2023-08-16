'use client'
import Stargazer from './components/Stargazer';
import { GraphCanvas } from 'reagraph';
import { theme1 } from './graph/theme';

const nodes = [
  {
    id: '1',
    label: '1'
  },
  {
    id: '2',
    label: '2'
  }
];

const edges = [
  {
    source: '1',
    target: '2',
    id: '1-2',
    label: '1-2'
  },
  {
    source: '2',
    target: '1',
    id: '2-1',
    label: '2-1'
  }
];

/**
 * 
 * MAIN PAGE 
 * 
 */
export default function Home() {

  if (typeof navigator !== 'undefined') {
    // navigator is defined, safe to use here
    console.log(navigator.userAgent);
  }

  return (
    // <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-100 h-max">
    <div style={{ width: '600px', height: '400px' }}>
      <GraphCanvas
        theme={theme1}
        nodes={nodes}
        edges={edges}
        onCanvasClick={()=>console.log("click")}
        onNodeClick={(node)=>{console.log(`clinking this node ${node.id}`)}}
      />
      <h6>Not in a million years</h6>
    </div>
  )
}
