import { ReactElement } from "react";
import { Card } from "../../components/Card";
import axios from "axios";
import { headers } from 'next/headers';


type posts = Array<post>;

interface post {
    title: string;
    content: Array<any>;
    slug: string;
    heroImage: string;
    postId: string;
    parsedTableData: Array<tableDataContent>;
}
interface tableDataContent {
    postSectionContent:  string;
    postSectionType: string;
}

interface postToParse {
    postId: string;
    data: data;
}

interface data {
    author: string;
    title: string;
    slug: string;
    tableDataContent: string;
    date_created:object;
    category: string;
    heroImage: string;
}


const getPosts= async () => {
    
       const parsedPosts: any = [];
        try {
          const response = await axios.post('https://us-central1-pullfluence-ac815.cloudfunctions.net/posts',
          {
            siteId:"eRCXk6NzV2BHUu4sjqLl"
          });
         
          const data = response.data;
       
        data.map((post: postToParse) =>{
            const {data, postId} = post;
            
            const {
                author,
                title,
                slug,
                tableDataContent,
                date_created,
                category,
                heroImage,
            } = data;

            const parsedTableData = JSON.parse(tableDataContent);
            function isWritten(section: tableDataContent) {
                return section.postSectionType === "Written Content";
              }
            const result = parsedTableData.find(isWritten);
            console.log(result);
            const {postSectionContent} = result;
            //console.log(parsedTableData)
            parsedPosts.push(
                <Card
                imgUrl={heroImage}
                linkUrl={`blog/${slug}/${postId}`}
                text={postSectionContent}
                title={title}
                />
            )
        })
        
        } catch (error) {
          console.error(error);
        }
       
        return parsedPosts ;
}






export default async function Page({params}:{params:{slug:string; id:string;}}) {
    const headersList = headers();
    const referer = headersList.get('referer');
    const blogRollData =  await getPosts();
    
    return(
        <>
            {/*Blog Roll Page Header */}
            <div>
                <div className="text-white text-5xl top-40 absolute flex justify-center w-full"><h1>Blog</h1></div>
                       
                <img  className="pt-20 w-full object-cover h=20 h-page-header" src="/assets/desktop-blogHeader.png" />
              
            </div>

            {/*Blog Roll*/}
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  my-20">
           
                {blogRollData}
                </div>
            </div>
           

        </>
    )
}