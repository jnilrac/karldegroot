import React, { ReactElement } from "react";
import { Card } from "./Card";
import axios from "axios";

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
const GetThreePostsByCategory= async (pfCategory:string|undefined) => {
    console.log(`pf category is ${pfCategory}`)
  const parsedPosts: any = [];
   try {
     const response = await axios.post('https://us-central1-pullfluence-ac815.cloudfunctions.net/threePostsByCategory',
     {
       siteId:"eRCXk6NzV2BHUu4sjqLl",
       category: pfCategory

     });
    
     const data = response.data;
     console.log(data)
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



export default GetThreePostsByCategory