import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        
        <h1 className="head_text text-center">
            Discover & Share 

            <br className="hidden-md-down"/>

            <span className="orange_gradient text-center"> AI Powered Prompts</span>
        </h1>

        <p className="desc text-center">
            An open source AI prompting tool to discover and share creative prompts.
        </p>

        {/* <Feed></Feed> */}
        

    </section>
  )
}
export default Home