import { MusicPlayer } from "../components/MusicPlayer"
import { Card } from "../components/Card"
import { Button } from "../components/Button"

export default function Page() {
    return(
        <>
        <div className="relative ">
            
            <div className="absolute top-14 bottom-10 inset-x-10 md:top-20 md:bottom-10 rounded-3xl md:inset-x-20  border-10 border-white bg-black/20 grid grid-cols-1 md:grid-cols-2">
                <div className="md:flex flex-col justify-center pl-20 hidden ">
                    <MusicPlayer />
                </div>
                <div className="flex flex-col text-white text-center justify-center text-3xl md:text-4xl lg:text-5xl lg:space-y-10 font-bold" >
                    <h1 className="text-center">Producer</h1>
                    <h1 className="text-center text-pink-kd">+</h1>
                    <h1 className="text-center">Songwriter</h1>
                </div>
            </div>
            <div>
                <img className="object-cover w-full" src="assets/desktop-homeHero.png" />
            </div>
        </div>
        <div className="h-fit bg-black flex flex-col md:hidden">
                <div className="flex justify-center">
                    <h2 className="text-white text-2xl mt-10 mb-4">New Music</h2>
                </div>
                <div className="flex  justify-center">
                    <MusicPlayer />
                </div>
        </div>
            <div className="h-fit bg-black flex flex-col">
                <div className="flex text-center justify-center h-20 pt-8"><h2 className="text-white text-2xl md:text-4xl text-center">Latest Posts</h2></div>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0 ">
                        <Card
                        imgUrl="/assets/SampleBlogImage.png"
                        linkUrl="/blog-post"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisl non ligula tempor porttitor. Aliquam erat volutpat. Etiam faucibus, turpis sed convallis vehicula, justo tellus ornare dui, a posuere ex metus eget tortor."
                        title="Test Blog"
                        />
                        <Card
                        imgUrl="/assets/SampleBlogImage.png"
                        linkUrl="/blog-post"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisl non ligula tempor porttitor. Aliquam erat volutpat. Etiam faucibus, turpis sed convallis vehicula, justo tellus ornare dui, a posuere ex metus eget tortor."
                        title="Test Blog"
                        />
                        <Card
                        imgUrl="/assets/SampleBlogImage.png"
                        linkUrl="/blog-post"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nisl non ligula tempor porttitor. Aliquam erat volutpat. Etiam faucibus, turpis sed convallis vehicula, justo tellus ornare dui, a posuere ex metus eget tortor."
                        title="Test Blog"
                        />
                    </div>
                </div>
                <div className="flex justify-center pt-10">
                <Button
                    label="Go to Blog"
                    url="/blog"
                    />
                </div>
            </div>
        </>
        

    )
}