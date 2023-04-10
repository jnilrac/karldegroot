import { MusicLister } from "../../components/MusicLister"
import { ReactElement } from "react"
import { idText } from "typescript"

export default function Page() {

    const mediaList: Array<string> = [
        "https://soundcloud.com/karl-de-groot/no-chance?in=karl-de-groot/sets/karl-de-groot-portfolio&si=e144fcf851d14d6fb0b114679aab371c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/karl-de-groot/the-bottomless?in=karl-de-groot/sets/karl-de-groot-portfolio&si=1166946f061e45ef849632fd483a86f3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/karl-de-groot/drill-instrumental?in=karl-de-groot/sets/karl-de-groot-portfolio&si=c0ae5bc42f474de284f7cd156a3e5e16&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/karl-de-groot/tight-night-instrumental?in=karl-de-groot/sets/karl-de-groot-portfolio&si=e07669926c0148cf82e18790eb4f8cc0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/karl-de-groot/star-crossed?in=karl-de-groot/sets/karl-de-groot-portfolio&si=7e0af50317844677868f8de60bf6f1fe&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/karl-de-groot/greatest-prize-final?in=karl-de-groot/sets/karl-de-groot-portfolio&si=eee6517d83084f019d48716859905757&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"

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
                       
                <img  className="pt-20 w-full object-cover h=20 h-page-header" src="/assets/desktopheader-music.png" />
              
            </div>

            <div className="flex justify-center w-full">
                <div className="flex flex-col space-y-4 my-20 md:w-2/6">
                 {listMedia()}
                </div>   
            </div>
        </div>
        

    )

}