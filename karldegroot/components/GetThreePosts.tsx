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
const GetThreePosts= async () => {
  const parsedPosts: any = [];
   try {
 
   
     const response = await fetch('https://us-central1-pullfluence-ac815.cloudfunctions.net/threePosts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({siteId: "rxWFGEMUjyF1M8oEcyCp"}),
      next: { revalidate: 10 }
    });
  
    
     const rawResponse = await response.json();
     const data = rawResponse
   
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
   
       const {postSectionContent} = result;
     
       parsedPosts.push(
           <Card
           imgUrl={heroImage}
           linkUrl={`blog/${slug}/${postId}`}
           text={postSectionContent}
           title={title}
           key={postId}
           />
       )
   })
   
   } catch (error) {
     console.error(error);
   }

   return parsedPosts ;
}



export default GetThreePosts