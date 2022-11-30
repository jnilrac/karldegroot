import { MusicLister } from "../../components/MusicLister"
import { ReactElement } from "react"
import { idText } from "typescript"

export default function Page() {

    const mediaList: Array<string> = [
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers",
        "https://soundcloud.com/karl-de-groot/star-crossed-lovers"
    ]

    const listMedia = (): Array<ReactElement> => {
       
           return mediaList.map((item) => {
                return (
                    <div className="w-full">
                        <MusicLister url={item} />
                    </div>
                )
           })
        
    }

    return(
        <div>
            <div>
                <div className="text-white text-5xl top-40 absolute flex justify-center w-full"><h1>Music</h1></div>
                       
                <img  className="pt-20 w-full object-cover h=20 h-page-header" src="assets/desktopheader-music.png" />
              
            </div>

            <div className="flex justify-center w-full">
                <div className="flex flex-col space-y-4 my-20 md:w-2/6">
                 {listMedia()}
                </div>   
            </div>
        </div>
        

    )

}