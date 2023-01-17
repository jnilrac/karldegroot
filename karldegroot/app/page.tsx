import { ReactElement } from "react";
import { MusicPlayer } from "../components/MusicPlayer"
import { Card } from "../components/Card"
import { Button } from "../components/Button"


type posts = Array<post>;

interface post {
    title: string;
    content: string;
    slug: string;
    featureImg: string;
    id: string;
}



const posts: posts = [
    {
        id:'1',
        title: "Example Post 1",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-1",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fj-amill-santiago-n2ZB09ug4NQ-unsplash.jpg?alt=media&token=3a9097b5-e706-4c7a-b1df-41905abe6766"
    },
    {
        id:'2',
        title: "Example Post 2",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-2",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fstephanie-klepacki-eOSrb_kZipw-unsplash.jpg?alt=media&token=ad5e5da2-bf9f-4d89-b86d-be035d6fff86"
    },
    {
        id:'3',
        title: "Example Post 3",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-3",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fstephanie-klepacki-eOSrb_kZipw-unsplash.jpg?alt=media&token=ad5e5da2-bf9f-4d89-b86d-be035d6fff86"
    },
    {
        id:'4',
        title: "Example Post 1",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-1",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fj-amill-santiago-n2ZB09ug4NQ-unsplash.jpg?alt=media&token=3a9097b5-e706-4c7a-b1df-41905abe6766"
    },
    {
        id:'5',
        title: "Example Post 2",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-2",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fstephanie-klepacki-eOSrb_kZipw-unsplash.jpg?alt=media&token=ad5e5da2-bf9f-4d89-b86d-be035d6fff86"
    },
    {
        id:'6',
        title: "Example Post 3",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-3",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fstephanie-klepacki-eOSrb_kZipw-unsplash.jpg?alt=media&token=ad5e5da2-bf9f-4d89-b86d-be035d6fff86"
    },
    {
        id:'7',
        title: "Example Post 1",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-1",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fj-amill-santiago-n2ZB09ug4NQ-unsplash.jpg?alt=media&token=3a9097b5-e706-4c7a-b1df-41905abe6766"
    },
    {
        id:'8',
        title: "Example Post 2",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-2",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fstephanie-klepacki-eOSrb_kZipw-unsplash.jpg?alt=media&token=ad5e5da2-bf9f-4d89-b86d-be035d6fff86"
    },
    {
        id:'9',
        title: "Example Post 3",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium enim vitae purus pretium, ac pulvinar sapien aliquam. Fusce tellus tellus, porttitor sed faucibus sit amet, consequat a ex. In facilisis est blandit enim egestas vulputate. Praesent elementum ex a lobortis vehicula. Ut euismod ex semper risus efficitur, ac maximus sapien tincidunt. Suspendisse ultricies non lacus at blandit. Sed iaculis elementum tristique. Nam in libero ipsum. Ut nec nunc pellentesque, egestas elit nec, auctor purus. Curabitur bibendum, ipsum sed tempus blandit, nisi urna feugiat diam, quis dictum nunc arcu nec neque. Cras erat ligula, viverra nec varius nec, luctus non mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        slug: "example-post-3",
        featureImg: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/testblogpics%2Fstephanie-klepacki-eOSrb_kZipw-unsplash.jpg?alt=media&token=ad5e5da2-bf9f-4d89-b86d-be035d6fff86"
    },
]



export default function Page(){    
    
    const listPosts = () : Array<ReactElement> => {
         
        const threePosts = () =>{
           const postArray= []
           postArray.push(posts.at(-1))
           postArray.push(posts.at(-2))
           postArray.push(posts.at(-3))
            return(
                postArray
            )
        }
      
            return threePosts().map((post)=>(
                <Card
                imgUrl={`${post?.featureImg}`}
                linkUrl={`blog/${post?.slug}`}
                text={`${post?.content}`}
                title={`${post?.title}`}
                />
                 ))  
            
    }
    const soundcloudUrl = "https://soundcloud.com/karl-de-groot/david-guetta-morten-feat-raye-you-cant-change-me-karl-de-groot-remix?si=5355c12abd2643d2a3b8d88442f29d91&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    return(
        <>
        <div className="relative ">
            
            <div className="absolute top-14 bottom-10 inset-x-10 md:top-20 md:bottom-10 rounded-3xl md:inset-x-20  border-10 border-white bg-black/20 grid grid-cols-1 md:grid-cols-2">
                <div className="md:flex flex-col justify-center hidden h-full pl-20">
                    <MusicPlayer url={soundcloudUrl} />
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
                <div className="flex justify-center">
                    <div className="w-9/12"><MusicPlayer url={soundcloudUrl} /></div>
                    
                </div>
        </div>
            <div className="h-fit bg-black flex flex-col">
                <div className="flex text-center justify-center h-20 pt-8"><h2 className="text-white text-2xl md:text-4xl text-center">Latest Posts</h2></div>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0 ">
                        {"posts go here"}
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