import Link from "next/link";
import { Button } from "../../../../components/Button";
import { Card } from "../../../../components/Card";
import { ReactElement  } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import GetThreePostsByCategory from "../../../../components/GetThreePostsByCategory";



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



  export default async function Page({params}:{params:{slug:string; postId:string;}}) {
   

    const getPost= async ()  => {
        let finalObj: post = {};
         try {
          

           const response = await fetch('https://us-central1-pullfluence-ac815.cloudfunctions.net/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postId: params.postId, slug: params.slug}),
            next: { revalidate: 10 }
            });
        
    
            const rawResponse = await response.json();
            const responseData = rawResponse._fieldsProto
           
           
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
 


    const post =  await getPost();
    const {postCategory} = post;
   
    const listedPosts = await GetThreePostsByCategory(postCategory)
   
   const content = post.postTableDataContent?.map((item:any) => {
        const replace = item.postSectionContent
        .replace("<ul>", '<ul class="list-disc marker:text-white>"')
        .replace("<ol>", '<ol class="list-decimal marker:text-white>"')
        .replace("<li>", '<li></li><li>')
        .replace("ql-indent-1", 'indent-6')
        .replace("ql-indent-2", 'indent-14')
        .replace("ql-indent-3", 'indent-24')
        .replace("ql-indent-4", 'indent-32')
        .replace("ql-indent-5", 'indent-40')
        .replace("ql-indent-6", 'indent-48')
        .replace("ql-indent-7", 'indent-56')
        .replace("ql-indent-8", 'indent-64')
        .replace("ql-align-center", 'text-center')
        .replace("ql-align-right", 'text-right')
        .replace("ql-align-justify", 'text-justify')
        .replace("<h1>", `<h1 class="text-3xl lg:text-5xl font-semibold">`)
        .replace("<h2>", `<h2 class="text-2xl md:text-4xl font-semibold">`)
        .replace("<h3>", `<h3 class="text-xl md:text-3xl font-semibold">`)
        .replace("<h4>", `<h4 class="text-lg md:text-2xl font-semibold">`)
        .replace("<a", `<a class="blog-link"`)

        const pure = sanitizeHtml(replace)
        if(item.postSectionType === "Subsection Image") {

           return (
                <div className="flex justify-center m-11">
                    <img style={{maxWidth: 600}} src={item.postSectionContent}/>
                </div>
                
           )
           
        } else {
            //const parsed = parse(pure);
            const parsed = ReactHtmlParser(replace)
            return parsed;
        }
        
    });
    return(
        <>
        <div className="container mt-28 flex flex-col space-y-10 lg:space-y-10 mb-20 text-white">
                <div className="flex justify-center">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-center">{post.postTitle}</h1>
                </div>
                <div className="flex justify-center"> <h4 className="text-lg md:text-2xl font-semibold">By: {post.postAuthor}</h4></div>
                <div className="container w-full lg:w-8/12">
                    <img src={post.postHeroImage}/>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-8/12 text-white">
                           {content}
                    </div>
                
                </div>
            </div>

           <div className="h-fit bg-black flex flex-col">
                <div className="flex text-center justify-center h-20 pt-8"><h2 className="text-white text-2xl md:text-4xl text-center font-semibold">Related Posts</h2></div>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0 ">
                        {listedPosts}
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