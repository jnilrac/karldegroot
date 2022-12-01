import Link from "next/link";
import { Button } from "../../../components/Button";

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

export async function generateStaticParams() {
    const posts = await getPosts();
  
    return posts.map((post: post) => ({
      slug: post.id,
    }));
  }

const getPosts = () => {
    return posts;
}

  export default function Page({params}:{params:{lang:string; slug:string; id:string;}}) {
    const {slug} = params;


    const showPost = () : post => {
        const post = getPosts().find(x => x.slug === slug)
        return post !== undefined ? post :{ 
                                            title: "None",
                                            content: "",
                                            slug: "",
                                            featureImg: "",
                                            id: "",
                                        }
    }

    const {title, content, featureImg} = showPost();
    return(
        <>
        <div className="container mt-20 flex flex-col space-y-10 lg:space-y-20 mb-20 text-white">
                <div className="flex justify-center">
                    <h1 className="text-3xl lg:text-5xl font-semibold">{title}</h1>
                </div>
                
                <div className="container w-full lg:w-8/12">
                    <img  src={featureImg}/>
                    </div>
                <div className="w-full flex justify-center">
                    <div className="w-8/12">{content}</div>
                
                </div>
            </div>
            <div className="flex justify-center my-10"><Link href={`/blog`}>
                <Button
                label="Back to Blog"
                url="/blog"
                />
            </Link>
        </div>
        </>
       
    )

  }