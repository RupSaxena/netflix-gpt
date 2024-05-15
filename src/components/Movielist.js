import Moviecard from "./Moviecard";

const Movielist=({title,movies})=>{
    
    return(
        <div className="px-6">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
              <div className="flex overflow-x-scroll">
    <div className="flex">
            {movies?.map((m)=>(<Moviecard key={m.id} posterPath={m.poster_path}/>))}</div>
        </div></div>
    )
}
export default Movielist;