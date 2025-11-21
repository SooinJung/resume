import React, { useState } from 'react';
import { ResumeView } from './components/SyllabusView'; 
import { ChatWidget } from './components/SyllabusForm'; // Repurposed as ChatWidget
import { ResumeData } from './types';

const sooinData: ResumeData = {
  fullName: "Sooin Jung",
  title: "AI Engineer & Product Manager",
  tagline: "Bridging the gap between AI technology and human needs.",
  email: "pinksooin@gmail.com",
  phone: "010 4645 2251",
  location: "Seoul, South Korea",
  github: "https://github.com/SooinJung",
  summary: `안녕하세요, 저는 단순히 공부를 위한 공부보다는, 기술을 통해 실제 문제를 해결하고 AI 전공자가 아닌 사용자들에게도 가치를 제공하는 것에 더 큰 보람을 느끼는 AI 개발자 정수인 입니다.

숙명여자대학교에서 인공지능을 전공하며 자연어 처리, 추천 시스템, RAG 기반 챗봇 등 실질적인 서비스를 구현하는 프로젝트들을 진행해왔습니다. 대표적으로는 이력서 기반 면접 코칭 챗봇 및 유튜브 추천 시스템을 개발한 Jobis 프로젝트에서 핵심 딥러닝 파트를 맡아, LangChain과 FAISS를 활용한 검색 강화 생성(RAG) 기법을 구현하고, FastAPI 서버와의 연동을 통해 실제 사용 가능한 형태로 완성한 경험이 있습니다.

또한 (주)레디츠와 AI(NLP) 관련 정부 R&D 사업을 진행한 바 있고, Job-AT 프로젝트에서는 Selenium 기반 실시간 크롤링 데이터로 질문 생성을 자동화하고, Ko-LLaMA 모델을 LoRA 기반으로 파인튜닝하여 사용자의 이력서와 채용공고에 최적화된 인터뷰 질문을 생성하는 시스템을 구축하였습니다.

저는 현업에서 쓰일 수 있는 AI 서비스를 만드는 경험을 중시하며, 알고리즘과 모델 그 자체에 머무르지 않고, 어떻게 시스템에 통합하고 사용자에게 가치를 줄 수 있을지를 고민해 왔습니다. 앞으로도 다양한 멀티모달 AI 기술과 사용자 중심의 모델 설계를 함께 고민할 줄 아는, 실전형 AI 개발자로 성장하고 싶습니다.`,
  skills: [
    { category: "Languages", items: ["Python", "TypeScript", "SQL"] },
    { category: "AI/ML", items: ["PyTorch", "LangChain", "HuggingFace", "FAISS", "OpenAI API", "Vertex AI"] },
    { category: "Backend", items: ["FastAPI", "MySQL", "SQLAlchemy"] },
    { category: "Frontend/Design", items: ["React", "Tailwind CSS", "Figma"] },
    { category: "Tools", items: ["Git", "Selenium", "Tableau", "Jira"] }
  ],
  skillMetrics: [
    { name: "NLP / LLM", level: 90 },
    { name: "RAG Systems", level: 85 },
    { name: "Product Mgmt", level: 80 },
    { name: "Backend Dev", level: 75 },
    { name: "UI/UX Design", level: 70 }
  ],
  education: [
    { 
      institution: "Sookmyung Women's Univ.", 
      degree: "IT Engineering (AI Major)", 
      year: "3.73 / 4.5",
      details: "Focus on Natural Language Processing & Recommender Systems"
    },
    { 
      institution: "Frankfurt UAS", 
      degree: "Exchange Student", 
      year: "2023.09 - 2024.03",
      details: "Computer Science Department"
    }
  ],
  experience: [
    {
      company: "TAVE (IT Club)",
      role: "Deep Learning Member (OB)",
      duration: "2024.03 - 2024.08",
      achievements: ["Conducted deep learning studies and team projects."]
    },
    {
      company: "Hyundai Mobis (Frankfurt)",
      role: "Working Student (Product Compliance)",
      duration: "2024.02 - 2024.03",
      achievements: ["Product Compliance Project Assistant", "Supported regulatory compliance checks for automotive parts."]
    },
    {
      company: "Algorithm Study",
      role: "Member",
      duration: "2024.09 - Present",
      achievements: ["Solving 5 algorithm problems weekly", "Code reviews with peers"]
    },
    {
      company: "Paper Review Study",
      role: "Team Lead",
      duration: "2024.07 - 2024.12",
      achievements: ["Led NLP/CV paper reviews", "Code analysis of state-of-the-art models"]
    }
  ],
  projects: [
    {
      name: "Jobis",
      period: "2024.09 - 2025.03",
      role: "Deep Learning Lead",
      description: "AI Interview Coaching & Customized Learning Material Recommendation Platform",
      techStack: ["LangChain", "FAISS", "Whisper", "FastAPI"],
      whatDidIDo: [
        "Implemented Chatbot using LangChain & GPT API with RAG",
        "Developed YouTube recommendation system using Whisper & FAISS (Similarity Search)",
        "Integrated FastAPI backend with AI models"
      ],
      links: [{ label: "Github", url: "https://github.com/JOBS-Sookmyung" }],
      imageGradient: "from-blue-500 to-cyan-400"
    },
    {
      name: "AmoreParty (AmorePacific)",
      period: "2024.11 - 2024.12",
      role: "Project Manager & Designer",
      description: "GenAI-based Cosmetic Service Concept & Content Planning",
      techStack: ["Figma", "GenAI Tools"],
      whatDidIDo: [
        "Led project direction, goal setting, and feature specification",
        "Conducted global/domestic market research & user persona analysis",
        "Designed UI for Main, Ledger, and Chatbot pages"
      ],
      links: [{ label: "Github", url: "https://github.com/SooinJung/AmoreParty" }],
      imageGradient: "from-pink-400 to-rose-400"
    },
    {
      name: "Sol-ports (Shinhan Card)",
      period: "2024.09 - 2024.11",
      role: "PM & Data Analyst",
      description: "Healthcare-Finance Service: Converting health benefits to investment points. (Shinhan Investment Corp. Finalist 🎖️)",
      techStack: ["Python", "Pandas", "Tableau", "Figma"],
      whatDidIDo: [
        "Proposed business strategy connecting Healthcare & Investment based on ESG analysis",
        "Performed EDA on real customer data provided by Shinhan Financial Group",
        "Modeled correlation between health spending and investment tendencies",
        "Designed service UI/UX"
      ],
      links: [{ label: "Github", url: "https://github.com/SooinJung/Shinhan_Hackerthon" }],
      imageGradient: "from-indigo-500 to-blue-600"
    },
    {
      name: "Lab Intern (NLP)",
      period: "2024.08 - 2025.03",
      role: "Undergraduate Researcher",
      description: "Bi-weekly paper analysis and presentation under Prof. Chul-Yeon Kim",
      techStack: ["NLP", "Transformers"],
      whatDidIDo: [
        "RAG: Retrieval-Augmented Generation Paper Review",
        "GPT-3 (Few-Shot Learners) Paper Review",
        "Attention is all you need Paper Review",
        "BART & LLaMA Paper Reviews"
      ],
      imageGradient: "from-emerald-400 to-teal-500"
    },
    {
      name: "Leddits (Industry Project)",
      period: "2024.03 - 2024.11",
      role: "AI Researcher",
      description: "Gov R&D Project on AI (NLP) & LLM Fine-tuning",
      techStack: ["Vertex AI", "Colab", "PyTorch"],
      whatDidIDo: [
        "Developed RAG model using Kaggle datasets",
        "Researched & Experimented with (Q)DoRA, LoRA, Quantization",
        "Collected & Preprocessed Korean QA Datasets",
        "Fine-tuned Korean LLM & MLLM models"
      ],
      imageGradient: "from-violet-500 to-purple-600"
    },
    {
      name: "Job-AT",
      period: "2024.03 - 2024.08",
      role: "NLP Engineer",
      description: "Automated Interview Question Generation based on Resume & Job Description",
      techStack: ["Selenium", "LangChain", "Ko-LLaMA", "Streamlit"],
      whatDidIDo: [
        "Built real-time crawling system with Selenium",
        "Fine-tuned Ko-LLaMA(7B) & Ko-BERT using LoRA",
        "Implemented Question Generation via RAG & FAISS Vector DB"
      ],
      links: [{ label: "Github", url: "https://github.com/Job-AT/jobat-deploy" }],
      imageGradient: "from-orange-400 to-amber-400"
    }
  ]
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <ResumeView data={sooinData} onReset={() => {}} />
      <ChatWidget resumeContext={sooinData} />
    </div>
  );
};

export default App;
