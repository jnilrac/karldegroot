import pullfluence from "../../pages/api/pullfluence.json"

interface pageInfo {
  pageTitle: string;
 }
 



export default function Head() {
  const {pageTitle} = pullfluence.pages[2];
    return (
      <>
        <title>{pageTitle}</title>
      </>
    );
  }