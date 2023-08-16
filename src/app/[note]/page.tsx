interface Props {
    content: string;
    // user: {
    //   name: string;
    //   image: string;
    //   pubkey: string;
    // };
    created_at: number;
    hashtags: string[];
  }
export default async function NotePage({content, created_at, hashtags} : Props){

    return (
        <div>
         {/* <p className="text-body5 text-gray-400">
            {new Date(created_at * 1000).toISOString().split("T")[0]}
          </p> */}
        <p>HHHHHHH</p>
        {/* <ul className="flex flex-wrap gap-12">
        {hashtags
          .filter((t) => hashtags.indexOf(t) === hashtags.lastIndexOf(t))
          .map((hashtag) => (
            <li§
              key={hashtag}
              className="bg-gray-300 text-body5 text-gray-900 font-medium rounded-24 px-12 py-4"
            >
              #{hashtag}
            </li§>
          ))}
      </ul> */}
    </div>
    )
}