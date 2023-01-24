import pullfluence from "../pages/api/pullfluence.json"

interface pageInfo {
  pageTitle: string;
 }
 



export default function Head() {
  const {pageTitle} = pullfluence.pages[0];
    return (
      <>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
      </>
    );
  }