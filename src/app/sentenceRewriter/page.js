import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SentenceRewriteTool from '../components/sentenceRewriteTool';
import SentenceRewriteCards from '../components/sentenceRewriteCards';
import SentenceFeatures from '../components/sentenceFeatures';
import SentenceAiTool from '../components/sentenceAITool';
import SentenceFAQs from '../components/sentenceFAQs';

export const metadata = {
  title: " Free AI Sentence Rewriter | No Signup Needed",
  description: " Improve the quality of your sentences with our free online sentence rewriter tool. Choose from different rewriting modes that fit your needs and requirements.",
};
const ParaGeneratorTool = () => {
  return (
    <>
        <Navbar/>
        <SentenceRewriteTool/>
        <SentenceRewriteCards/>
        <SentenceFeatures/>
        <SentenceAiTool/>
        <SentenceFAQs/>
        <Footer/>
    </>
  )
}

export default ParaGeneratorTool;
