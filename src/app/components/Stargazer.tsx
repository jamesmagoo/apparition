import { ForceGraph3D } from "react-force-graph"

type Props = {}
const Stargazer = (props: Props) => {

    const notesData = {
        "nodes": [
            {
                "id": "id1",
                "name": "My Essay",
                "val": 1,
                "url": "www.dog-house.ie",
                "eventid": "abcdefghijklmnopqrstuvwxynz",
                "title": "My Essay",
                "summary": "Bla bla bla bla"
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
                    [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1))
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
                    [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1))
                }))
        };
    }



    //   const data = {
    //     "id": "7ab35950a6c72e20e0707c123c44efb21a6e6f06b1ca4e981e2d86b05ce5d583",
    //     "tags": [
    //       ["e", "0cae41d141234asdffsf"],
    //       ["e", "0cae41d13413244sdxsax"],
    //       ["published_at", "1691951338"],
    //       ["title", "Don't get emotional"]
    //     ],
    //   };


    type InputData = {
        id: string;
        tags: Array<[string, string]>;
    };

    type Node = {
        id: string;
        name?: string;
        title?: string;
        summary?: string;
    };

    type TreeStructure = {
        nodes: Node[];
        links: { source: string; target: string }[];
    };

    function unpackData(data: InputData): TreeStructure {
        const node: Node = { id: data.id };
        const nodes: Node[] = [node];
        const links: { source: string; target: string }[] = [];

        // Extracting title and summary from tags
        data.tags.forEach(tag => {
            if (tag[0] === "title") {
                node.title = tag[1];
            } else if (tag[0] === "summary") {
                node.summary = tag[1];
            }
        });

        data.tags.forEach(tag => {
            if (tag[0] === "e") {
                nodes.push({ id: tag[1] });
                links.push({ source: data.id, target: tag[1] });
            }
        });

        return { nodes, links };
    }

    const data: InputData = {
        "id": "123",
        "tags": [
            ["e", "334"],
            ["e", "678"],
            ["published_at", "1691951338"],
            ["title", "Don't get emotional"],
            ["summary", "The nostr essay of all time "]
        ],
    };

    const tree: TreeStructure = unpackData(data);

    function generateRandomData(): InputData[] {
        const titles = [
            "Don't get emotional",
            "Embrace the Challenge",
            "Life's Twists and Turns",
            "Journey of Discovery",
            "Lost and Found",
            "The Road Less Traveled",
        ];

        const summaries = [
            "The nostr essay of all time The nostr essay of all time The nostr essay of all time The nostr essay of all time",
            "A tale of triumph and defeat",
            "Finding oneself in the unknown",
            "An exploration of new horizons",
            "A story of redemption and growth",
            "An unconventional path to success An unconventional path to success An unconventional path to success An unconventional path to success",
        ];

        const data: InputData[] = [];

        for (let i = 0; i < 6; i++) {
            const id = i.toString();
            const title = titles[Math.floor(Math.random() * titles.length)];
            const summary = summaries[Math.floor(Math.random() * summaries.length)];

            const linkedId1 = ((i + 1) % 6).toString();
            const linkedId2 = ((i + 2) % 6).toString();

            data.push({
                id,
                tags: [
                    ["e", linkedId1],
                    ["e", linkedId2],
                    ["published_at", "1691951338"],
                    ["title", title],
                    ["summary", summary],
                ],
            });
        }

        return data;
    }


    function unpackDataArray(dataArray: InputData[]): TreeStructure {
        const nodes: Node[] = [];
        const links: { source: string; target: string }[] = [];

        dataArray.forEach(data => {
            const node: Node = { id: data.id };

            // Extracting title and summary from tags
            data.tags.forEach(tag => {
                if (tag[0] === "title") {
                    node.title = tag[1];
                    node.name = tag[1];
                } else if (tag[0] === "summary") {
                    node.summary = tag[1];
                }
            });

            nodes.push(node);

            data.tags.forEach(tag => {
                if (tag[0] === "e") {
                    links.push({ source: data.id, target: tag[1] });
                }
            });
        });

        return { nodes, links };
    }

    const dataArray: InputData[] = generateRandomData();
    const treeStructure: TreeStructure = unpackDataArray(dataArray);




    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 m-6 bg-blue-400 h-max">
            <ForceGraph3D
                //graphData={genRandomTreeNoLinks(25,false)}
                graphData={treeStructure}
                width={1200}
                height={800}
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