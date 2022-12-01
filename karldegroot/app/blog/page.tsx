import { ReactElement } from "react";
import { Card } from "../../components/Card";

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


export default function Page({params}:{params:{slug:string; id:string;}}) {
 
    const listPosts = () : Array<ReactElement> => {
        return posts.map((post)=>(
            <Card
            imgUrl={post.featureImg}
            linkUrl={`blog/${post.slug}`}
            text={post.content}
            title={post.title}
            />
        ))
    }
    
    return(
        <>
            {/*Blog Roll Page Header */}
            <div>
                <div className="text-white text-5xl top-40 absolute flex justify-center w-full"><h1>Blog</h1></div>
                       
                <img  className="pt-20 w-full object-cover h=20 h-page-header" src="assets/desktop-blogHeader.png" />
              
            </div>

            {/*Blog Roll*/}
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  my-20">
                {listPosts()}
                </div>
            </div>
           

        </>
    )
}