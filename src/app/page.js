'use client';
import Tool from "./components/tool";
import WriterText from "./components/paragraphWriter";
import Featured from "./components/featured";
import AiTool from "./components/AItool";
import RewriterTool from "./components/rewritertool";
const Index=()=>{
  return (
    <>
      <Tool/>
      <WriterText/>
      <Featured/>
      <AiTool/>
      <RewriterTool/>
    </>
  )
}
export default Index;