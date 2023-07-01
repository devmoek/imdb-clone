import Image from "next/image";
import Link from "next/link";
import {AiOutlineLike} from "react-icons/ai";

export default function Card({result}) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
            }`} 
                width={500}
                height={300}
                className="sm:rounded-t-lg group-hover:opacity-80 transitio-opacity-200 duration-200"
                placeholder="blur"
                blurDataURL="/spinner.svg"
                alt={result.title || result.name}
                style = {
                    {
                        maxWidth: "100%",
                        height: "auto",
                    }
                }
            />
            <div className="p-2">
                <h2 className="truncate text-lg font-bold">
                    {result.title || result.name}
                </h2>
                <p className="line-clamp-3 text-md">
                    {result.overview}
                </p>
                <p className="flex items-center mt-2 italic">
                    {result.release_date || result.first_air_date}
                    <AiOutlineLike className="h-5 mr-1 ml-3" /> {result.vote_count}
                </p>
            </div>
        </Link>
    </div>
  )
}