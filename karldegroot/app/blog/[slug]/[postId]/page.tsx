import Link from "next/link";
import { Button } from "../../../../components/Button";
import { Card } from "../../../../components/Card";
import { ReactElement  } from "react";
import axios from "axios";
import parse from "html-react-parser";
//import DOMPurify from "isomorphic-dompurify";
//type posts = Array<post>;

interface post {
    postTitle?: string;
    postContent?: Array<any>;
    postSlug?: string;
    postHeroImage?: string;
    postPostId?: string;
    postTableDataContent?: Array<newTableData>;
    postAuthor?: string;
    postDate_created?: object;
    postCategory?: string;
}

type stringValue = string;

interface newTableData {
    postSectionContent:  string;
    postSectionType: string;
}


interface responseData {
    author:responseObj;
    title: responseObj;
    slug: responseObj;
    tableDataContent: responseObj;
    date_created: timeObj;
    category: responseObj;
    heroImage: responseObj;
}

interface responseObj {
    stringValue:string;
}
interface timeObj {
    timestampValue: timeObjKeys;
}
interface timeObjKeys {
    seconds: string;
    nanos: number;
}

/*

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

*/

const getPosts = () => {
    //return posts;
}

  export default async function Page({params}:{params:{slug:string; postId:string;}}) {
    

    const getPost= async ()  => {
        let finalObj: post = {};
         try {
           const response = await axios.post('https://us-central1-pullfluence-ac815.cloudfunctions.net/post',
           {
             postId: params.postId,
             slug: params.slug
           });
          
           const responseData : responseData = response.data._fieldsProto;
          
    
           
             const {
                 author,
                 title,
                 slug,
                 tableDataContent,
                 date_created,
                 category,
                 heroImage,
             } = responseData;
             
             const parsedTableData = JSON.parse(tableDataContent.stringValue)
    
             
            
             finalObj = {
                postAuthor: author.stringValue,
                postTitle: title.stringValue,
                postSlug: slug.stringValue,
                postTableDataContent: parsedTableData,
                postDate_created: date_created.timestampValue,
                postCategory: category. stringValue,
                postHeroImage: heroImage.stringValue,
             }
        
         
         } catch (error) {
           console.error(error);
         }
         return finalObj;
    }
 
 /*   
    
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
*/
    //const {title, content, featureImg} = showPost();

    const post =  await getPost();
     //console.log(post.postAuthor)
   const content = post.postTableDataContent?.map((item:any) => {
        //const cleanItem = parse(DOMPurify.sanitize(item.postSectionContent));
        const parsed = parse(item.postSectionContent);
        return parsed;
    });
    return(
        <>
        <div className="container mt-20 flex flex-col space-y-10 lg:space-y-20 mb-20 text-white">
                <div className="flex justify-center">
                    <h1 className="text-3xl lg:text-5xl font-semibold">{post.postTitle}</h1>
                </div>
                
                <div className="container w-full lg:w-8/12">
                    <img  src={post.postHeroImage}/>
                    </div>
                <div className="w-full flex justify-center">
                    <div className="w-8/12 text-white">{content}</div>
                
                </div>
            </div>

           <div className="h-fit bg-black flex flex-col">
                <div className="flex text-center justify-center h-20 pt-8"><h2 className="text-white text-2xl md:text-4xl text-center">Related Posts</h2></div>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0 ">
                        
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