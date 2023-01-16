import pullfluence from "../../pages/api/pullfluence.json"

interface pageInfo {
  pageTitle: string;
 }
 



export default function Head() {
  const {pageTitle} = pullfluence.pages[1];
    return (
      <>
        <title>{pageTitle}</title>
      </>
    );
  }