// 'use client';
import Tool from "./components/tool";
import WriterText from "./components/paragraphWriter";
import Featured from "./components/featured";
import AiTool from "./components/AItool";
import RewriterTool from "./components/rewritertool";
import FAQs from "./components/FAQ";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
export const metadata = {
  title: "Free AI Paragraph Rewriter | Improve Your Paragraphs with AI",
  description: "Enjoy our paragraph rewriting tool for free. Improve the quality of your paragraphs and make them easier to read. Pick from six different rewriting modes.",
};
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