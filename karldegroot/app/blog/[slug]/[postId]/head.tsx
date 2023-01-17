export default function Head({ params }: { params: { slug: string } }) {
    const {slug} = params;
    return (
      <>
        <title>{slug}</title>
      </>
    );
  }