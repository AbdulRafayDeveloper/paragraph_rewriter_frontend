'use client';
import Tool from "./components/tool";
import WriterText from "./components/paragraphWriter";
import Featured from "./components/featured";
import AiTool from "./components/AItool";
import RewriterTool from "./components/rewritertool";
import FAQs from "./components/FAQ";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
const Index=()=>{
  return (
    <>
      <Navbar/>
      <Tool/>
      <WriterText/>
      <Featured/>
      <AiTool/>
      <RewriterTool/>
      <FAQs/>
      <Footer/>
    </>
  )
}
export default Index;