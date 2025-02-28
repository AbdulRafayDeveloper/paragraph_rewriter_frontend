import React from 'react'
import GeneratorTool from '../components/generatorTool';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GenerateRewriteTool from '../components/generateRewriteTool';
import GeneratorCards from '../components/generatorCardsTool';
import GeneratorFaature from '../components/generatorFeature';
import GeneratorAiTool from '../components/generatorToolAI';
import GeneratorrFAQs from '../components/generatorFAQ';
export const metadata = {
  title: "Free AI Paragraph Generator - No Signup Needed",
  description: " Use our free AI paragraph generator to create informative paragraphs on any topic. Our tool doesn't have any usage limits and requires no signup.",
};
const ParaGeneratorTool = () => {
  return (
    <>
        <Navbar/>
        <GeneratorTool/>
        <GeneratorCards/>
        <GeneratorFaature/>
        <GeneratorAiTool/>
        <GenerateRewriteTool/>
        <GeneratorrFAQs/>
        <Footer/>
    </>
  )
}

export default ParaGeneratorTool;
