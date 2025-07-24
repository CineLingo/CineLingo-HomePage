"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Hero Section
    'hero.title.line1': "We don't just translate videos.",
    'hero.title.line2': "We reconstruct them.",
    'hero.subtitle': "Every frame, every word, every voice — our AI transforms global content into fluent local experiences, breaking down language barriers in video.",
    'hero.tech.lipSync': "Lip-sync AI",
    'hero.tech.voice': "Voice Synthesis",
    'hero.tech.visual': "Visual Translation",
    
    // Tech Section
    'tech.title': "Tech",
    'tech.subtitle': "We develop AI technologies that push the boundaries of video localization.",
    'tech.agent.title': "Agent-based Translation Systems",
    'tech.agent.description': "We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture.",
    'tech.agent.tag': "Context-aware AI",
    'tech.lipSync.title': "Lip-sync Modeling",
    'tech.lipSync.description': "We build models that align facial movements with translated speech — frame-accurate and emotion-preserving.",
    'tech.lipSync.tag': "Frame-accurate sync",
    'tech.tts.title': "Text-to-Speech (TTS)",
    'tech.tts.description': "Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency.",
    'tech.tts.tag': "Native-level voices",
    'tech.visual.title': "On-Screen Text Translation",
    'tech.visual.description': "Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations.",
    'tech.visual.tag': "On-screen text translation",
    'tech.quote': "We aim not just to translate — but to create videos that look, sound, and feel native",
    
    // About Section
    'about.title': "About CineLingo",
    'about.p1': "CineLingo is an AI startup specializing in video content localization.",
    'about.p2': "We build end-to-end systems that transform global YouTube videos into native-level Korean, Japanese and various languages.",
    'about.p3': "Our work goes beyond dubbing — we aim to synchronize speech, facial motion, and on-screen text, creating videos that feel truly local, powered by our in-house TTS, lip-sync, and screen translation models.",
    'about.p4': "To ensure precision and fluency, we leverage agent-based translation pipelines that adapt to linguistic nuances and cultural contexts.",
    
    // Collaborations Section
    'collaborations.title': "Collaborations with creators",
    'collaborations.subtitle': "We currently partner with leading science channels such as Veritasium, 3Blue1Brown, Welch Labs and Doctorfriends making their content accessible to new audiences with high fidelity and care.",
    
    // Join Section
    'join.title': "Join us",
    'join.subtitle': "We're always looking for passionate researchers, engineers, creators, and designers.",
    'join.button': "Get in touch",
    'nav.home': "Home",
    'nav.service': "Service",
    'nav.research': "Research",
    'nav.team': "Team",
    'nav.contact': "Contact us",

    // Research Page
    'research.hero.title': "Research",
    'research.hero.subtitle': "Advancing the frontiers of AI-powered video localization through cutting-edge research",
    'research.jamflow.title': "JAM-Flow: Joint Audio-Motion Synthesis with Flow Matching",
    'research.jamflow.team': "CineLingo Research Team • Seoul, South Korea",
    'research.jamflow.arxiv': "arXiv",
    'research.jamflow.project': "Project Page",
    'research.jamflow.abstract.title': "Abstract",
    'research.jamflow.abstract.p1': "The intrinsic link between facial motion and speech is often overlooked in video localization, where lip-sync, text-to-speech (TTS), and visual text translation are typically addressed as separate tasks. This paper introduces CineLingo, a unified framework to simultaneously synthesize and condition on both facial motion, speech, and visual elements for seamless video localization.",
    'research.jamflow.abstract.p2': "Our approach leverages advanced AI models and a novel Multi-Modal Localization Transformer (MM-LT) architecture, integrating specialized Lip-Sync, TTS, and Visual Translation modules. These are coupled via selective joint attention layers and incorporate key architectural choices, such as temporally aligned positional embeddings and localized joint attention masking, to enable effective cross-modal interaction while preserving modality-specific strengths.",
    'research.jamflow.abstract.p3': "Trained with an end-to-end objective, CineLingo supports a wide array of conditioning inputs—including text, reference audio, and reference motion—facilitating tasks such as synchronized talking head generation from text, audio-driven animation, automated dubbing, and much more, within a single, coherent model. CineLingo significantly advances multi-modal generative modeling by providing a practical solution for holistic video localization.",
    'research.jamflow.architecture.title': "Architecture",
    'research.jamflow.architecture.description': "The training and inference pipeline of the JAM-Flow framework. Our joint MM-DiT comprises a Motion-DiT for facial expression keypoints and an Audio-DiT for mel-spectrograms, coupled via joint attention. The model is trained with an inpainting-style flow matching objective on masked inputs and various conditions (text, reference audio/motion). At inference, it flexibly generates synchronized audio-visual outputs from partial inputs.",
    
    'research.ttsctrlnet.title': "TTS-CtrlNet: Time varying emotion aligned text-to-speech generation with ControlNet",
    'research.ttsctrlnet.arxiv': "arXiv",
    'research.ttsctrlnet.project': "Project Page",
    'research.ttsctrlnet.abstract.p1': "Recent advances in text-to-speech (TTS) have enabled natural speech synthesis, but fine-grained, time-varying emotion control remains challenging. Existing methods often allow only utterance-level control, require full model fine-tuning with a large emotion speech dataset, which can degrade performance.",
    'research.ttsctrlnet.abstract.p2': "Inspired by ControlNet for text-to-image generation, we propose the first ControlNet-based approach for controlling flow-matching TTS (TTS-CtrlNet), which freezes the original model and makes a trainable copy of it to process additional condition. We show that TTS-CtrlNet can boost the pretrained large TTS model by adding intuitive, scalable, and time-varying emotion control while inheriting the ability of the original model (e.g., zero-shot voice cloning & naturalness).",
    'research.ttsctrlnet.abstract.p3': "Furthermore, we provide practical recipes for adding emotion control: 1) optimal architecture design choice with block analysis, 2) emotion-specific flow step, and 3) flexible control scale. Experiments show that TTS-CtrlNet can effectively adds an emotion controller to existing TTS, and achieves state-of-the-art performance with emotion similarity scores: Emo-SIM and Aro-Val SIM.",
    'research.ttsctrlnet.architecture.description': "The training and inference pipeline of the TTS-CtrlNet framework. Controlling signal is processed through ControlNet and fed into the subset of blocks in original model.",
    
    'research.areas.title': "Our Research Areas",
    'research.areas.subtitle': "We focus on four key areas that form the foundation of our video localization technology",
    'research.areas.agent.title': "Agent-based Translation",
    'research.areas.agent.description': "We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture. Our agents understand the broader context of the content and make intelligent decisions about localization strategies.",
    'research.areas.agent.tag': "Context-aware AI",
    'research.areas.tts.title': "Text-to-Speech (TTS)",
    'research.areas.tts.description': "Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency. We leverage large language models and advanced audio synthesis to create voices that sound natural and culturally appropriate.",
    'research.areas.tts.tag': "Native-level voices",
    'research.areas.lipsync.title': "Lip-sync Modeling",
    'research.areas.lipsync.description': "We build models that align facial movements with translated speech — frame-accurate and emotion-preserving. Our approach uses advanced computer vision and speech synthesis to ensure that every lip movement matches the spoken words naturally.",
    'research.areas.lipsync.tag': "Frame-accurate sync",
    'research.areas.visual.title': "On-Screen Text Translation",
    'research.areas.visual.description': "Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations. Our system can detect, translate, and replace text in videos while maintaining visual coherence and readability.",
    'research.areas.visual.tag': "Visual reconstruction",
    
    'research.join.title': "Join us",
    'research.join.subtitle': "If you're excited about building the most natural, delightful, and culturally sensitive video localization systems out there, reach out—we're hiring.",
    'research.join.button': "Get in touch",

    // Team Page
    'team.title': "Meet Our Team",
    'team.description.prefix': "CineLingo is led by ",
    'team.description.mingi': "Mingi Kwon",
    'team.description.middle': ", ",
    'team.description.jaeseok': "Jaeseok Jeong",
    'team.description.suffix': ", and a team of creative individuals with a shared passion. We are backed by Youngjung Uh at Yonsei University, Yongjae Lee at UW-Madison and a collection of founders and investors.",
    'team.location': "We have offices in Seoul, Korea. Our team members have long-tenured careers in machine learning, software, and entertainment.",
    'team.belief': "We strongly believe that a small, focused team with a clear vision can build great things.",
    'team.photos.title': "Our Team",
    'team.photos.scroll': "Team photos",
    'team.info.location.title': "Location",
    'team.info.location.address': "61, Yonsei-ro 2na-gil, Seodaemun-gu, Seoul, Republic of Korea.",
    'team.info.email.title': "Email",
  },
  ko: {
    // Hero Section
    'hero.title.line1': "단순히 비디오를 번역하지 않습니다.",
    'hero.title.line2': "비디오를 재구성합니다.",
    'hero.subtitle': "모든 프레임, 모든 단어, 모든 목소리까지 — CINELINGO는 영상 속 언어 장벽을 허물고, 글로벌 콘텐츠를 현지 시청자에게 완전히 자연스러운 영상 경험으로 재구성합니다.",
    'hero.tech.lipSync': "립싱크 AI",
    'hero.tech.voice': "음성 합성",
    'hero.tech.visual': "시각 번역",
    
    // Tech Section
    'tech.title': "기술",
    'tech.subtitle': "비디오 현지화의 경계를 넓히는 AI 기술을 개발합니다.",
    'tech.agent.title': "에이전트 기반 번역 시스템",
    'tech.agent.description': "AI 에이전트를 사용하여 콘텐츠 장르, 톤, 문화에 적응하는 고품질의 맥락 인식 번역을 수행합니다.",
    'tech.agent.tag': "맥락 인식 AI",
    'tech.lipSync.title': "립싱크 모델링",
    'tech.lipSync.description': "번역된 음성과 얼굴 움직임을 정렬하는 모델을 구축합니다 — 프레임 정확하고 감정을 보존합니다.",
    'tech.lipSync.tag': "정확한 프레임 동기화",
    'tech.tts.title': "텍스트-투-스피치 (TTS)",
    'tech.tts.description': "CINELINGO의 맞춤형 TTS 시스템은 톤, 타이밍, 캐릭터 일관성에 맞춰진 네이티브 수준의 목소리를 생성합니다.",
    'tech.tts.tag': "자연스러운 목소리 합성",
    'tech.visual.title': "화면 텍스트 번역",
    'tech.visual.description': "인페인팅과 비전-언어 모델을 결합하여 원활한 번역을 제공하는 시각적 텍스트를 재구성합니다.",
    'tech.visual.tag': "화면 텍스트 번역",
    'tech.quote': "단순히 번역하는 것이 아니라 — 네이티브하게 보이고, 들리고, 느껴지는 비디오를 만드는 것을 목표로 합니다",
    
    // About Section
    'about.title': "CineLingo 소개",
    'about.p1': "CineLingo는 비디오 콘텐츠 현지화에 특화된 AI 스타트업입니다.",
    'about.p2': "Cinelingo는 글로벌 유튜브 영상을 한국어, 일본어 등 다양한 언어로 현지 수준에 맞게 완벽하게 변환하는 end-to-end 시스템을 개발합니다.",
    'about.p3': "단순한 더빙을 넘어, 음성, 얼굴 움직임, 화면 속 텍스트까지 완벽하게 동기화시켜 진짜 로컬 콘텐츠처럼 느껴지는 영상을 만들어냅니다. 이 모든 것은 자체 개발한 TTS, 립싱크, 화면 번역 모델로 구동됩니다.",
    'about.p4': "정확하고 자연스러운 번역을 위해, 언어의 미묘한 뉘앙스와 문화적 맥락에 적응하는 에이전트 기반 번역 파이프라인을 사용합니다.",
    
    // Collaborations Section
    'collaborations.title': "크리에이터와의 협업",
    'collaborations.subtitle': "현재 Veritasium, 3Blue1Brown, Welch Labs, Doctorfriends와 같은 세계적인 과학 유튜브 채널과 파트너십을 맺고 있으며, 그들의 콘텐츠가 새로운 시청자에게 높은 정확도와 정성으로 전달될 수 있도록 돕고 있습니다.",
    
    // Join Section
    'join.title': "함께하세요",
    'join.subtitle': "열정적인 연구자, 엔지니어, 크리에이터, 디자이너를 항상 기다리고 있습니다.",
    'join.button': "연락하기",
    'nav.home': "홈",
    'nav.service': "서비스",
    'nav.research': "연구",
    'nav.team': "팀",
    'nav.contact': "연락처",

    // Research Page
    'research.hero.title': "연구",
    'research.hero.subtitle': "최첨단 연구를 통해 AI 기반 비디오 현지화의 경계를 넓혀갑니다",
    'research.jamflow.title': "JAM-Flow: 플로우 매칭을 통한 공동 오디오-모션 합성",
    'research.jamflow.team': "CineLingo 연구팀 • 서울, 대한민국",
    'research.jamflow.arxiv': "arXiv",
    'research.jamflow.project': "프로젝트 페이지",
    'research.jamflow.abstract.title': "초록",
    'research.jamflow.abstract.p1': "얼굴 움직임과 음성 간의 본질적인 연결은 비디오 현지화에서 종종 간과되며, 립싱크, 텍스트-투-스피치(TTS), 시각적 텍스트 번역이 일반적으로 별도의 작업으로 처리됩니다. 이 논문은 원활한 비디오 현지화를 위해 얼굴 움직임, 음성, 시각적 요소를 동시에 합성하고 조건화하는 통합 프레임워크인 JAM-Flow를 소개합니다.",
    'research.jamflow.abstract.p2': "우리의 접근 방식은 고급 AI 모델과 새로운 멀티모달 현지화 트랜스포머(MM-LT) 아키텍처를 활용하여 전문화된 립싱크, TTS, 시각적 번역 모듈을 통합합니다. 이들은 선택적 공동 어텐션 레이어를 통해 결합되며, 시간적으로 정렬된 위치 임베딩과 지역화된 공동 어텐션 마스킹과 같은 핵심 아키텍처 선택을 포함하여 모달리티별 강점을 보존하면서 효과적인 크로스모달 상호작용을 가능하게 합니다.",
    'research.jamflow.abstract.p3': "엔드-투-엔드 목표로 훈련된 CineLingo는 텍스트, 참조 오디오, 참조 모션을 포함한 광범위한 조건화 입력을 지원하여 텍스트에서 동기화된 토킹 헤드 생성, 오디오 기반 애니메이션, 자동 더빙 등을 단일 일관된 모델 내에서 용이하게 합니다. JAM-Flow는 전체적인 비디오 현지화를 위한 실용적인 솔루션을 제공하여 멀티모달 생성 모델링을 크게 발전시킵니다.",
    'research.jamflow.architecture.title': "아키텍처",
    'research.jamflow.architecture.description': "JAM-Flow 프레임워크의 훈련 및 추론 파이프라인. 우리의 공동 MM-DiT는 얼굴 표정 키포인트를 위한 Motion-DiT와 멜-스펙트로그램을 위한 Audio-DiT로 구성되며, 공동 어텐션을 통해 결합됩니다. 모델은 마스킹된 입력과 다양한 조건(텍스트, 참조 오디오/모션)에 대해 인페인팅 스타일 플로우 매칭 목표로 훈련됩니다. 추론 시에는 부분 입력에서 동기화된 오디오-비주얼 출력을 유연하게 생성합니다.",
    
    'research.ttsctrlnet.title': "TTS-CtrlNet: ControlNet을 통한 시간 변화 감정 정렬 텍스트-투-스피치 생성",
    'research.ttsctrlnet.abstract.p1': "텍스트-투-스피치(TTS)의 최근 발전으로 자연스러운 음성 합성이 가능해졌지만, 세밀하고 시간에 따라 변화하는 감정 제어는 여전히 도전적입니다. 기존 방법들은 종종 발화 수준의 제어만 허용하고, 성능을 저하시킬 수 있는 대규모 감정 음성 데이터셋으로 전체 모델 미세조정을 요구합니다.",
    'research.ttsctrlnet.abstract.p2': "텍스트-투-이미지 생성을 위한 ControlNet에서 영감을 받아, 원본 모델을 고정하고 추가 조건을 처리하기 위한 훈련 가능한 복사본을 만드는 플로우 매칭 TTS(TTS-CtrlNet)를 제어하는 첫 번째 ControlNet 기반 접근 방식을 제안합니다. TTS-CtrlNet이 원본 모델의 능력(예: 제로샷 음성 복제 및 자연스러움)을 상속하면서 직관적이고 확장 가능하며 시간에 따라 변화하는 감정 제어를 추가하여 사전 훈련된 대형 TTS 모델을 향상시킬 수 있음을 보여줍니다.",
    'research.ttsctrlnet.abstract.p3': "또한 감정 제어를 추가하기 위한 실용적인 방법을 제공합니다: 1) 블록 분석을 통한 최적 아키텍처 설계 선택, 2) 감정별 플로우 단계, 3) 유연한 제어 스케일. 실험은 TTS-CtrlNet이 기존 TTS에 감정 컨트롤러를 효과적으로 추가할 수 있으며, 감정 유사도 점수 Emo-SIM과 Aro-Val SIM에서 최첨단 성능을 달성함을 보여줍니다.",
    'research.ttsctrlnet.architecture.description': "TTS-CtrlNet 프레임워크의 훈련 및 추론 파이프라인. 제어 신호는 ControlNet을 통해 처리되어 원본 모델의 블록 하위 집합에 공급됩니다.",
    
    'research.areas.title': "우리의 연구 영역",
    'research.areas.subtitle': "우리는 비디오 현지화 기술의 기초를 형성하는 네 가지 핵심 영역에 집중합니다",
    'research.areas.agent.title': "에이전트 기반 번역",
    'research.areas.agent.description': "우리는 AI 에이전트를 사용하여 콘텐츠 장르, 톤, 문화에 적응하는 고품질의 맥락 인식 번역을 수행합니다. 우리의 에이전트는 콘텐츠의 더 넓은 맥락을 이해하고 현지화 전략에 대한 지능적인 결정을 내립니다.",
    'research.areas.agent.tag': "맥락 인식 AI",
    'research.areas.tts.title': "텍스트-투-스피치 (TTS)",
    'research.areas.tts.description': "우리의 맞춤형 TTS 시스템은 톤, 타이밍, 캐릭터 일관성에 맞춰진 네이티브 수준의 목소리를 생성합니다. 우리는 대규모 언어 모델과 고급 오디오 합성을 활용하여 자연스럽고 문화적으로 적절한 목소리를 만듭니다.",
    'research.areas.tts.tag': "네이티브 수준 목소리",
    'research.areas.lipsync.title': "립싱크 모델링",
    'research.areas.lipsync.description': "우리는 번역된 음성과 얼굴 움직임을 정렬하는 모델을 구축합니다 — 프레임 정확하고 감정을 보존합니다. 우리의 접근 방식은 고급 컴퓨터 비전과 음성 합성을 사용하여 모든 입 움직임이 자연스럽게 말하는 단어와 일치하도록 보장합니다.",
    'research.areas.lipsync.tag': "프레임 정확 동기화",
    'research.areas.visual.title': "화면 텍스트 번역",
    'research.areas.visual.description': "인페인팅과 비전-언어 모델을 결합하여 원활한 번역을 제공하는 시각적 텍스트를 재구성합니다. 우리 시스템은 시각적 일관성과 가독성을 유지하면서 비디오의 텍스트를 감지, 번역, 교체할 수 있습니다.",
    'research.areas.visual.tag': "시각적 재구성",
    
    'research.join.title': "함께하세요",
    'research.join.subtitle': "가장 자연스럽고 즐겁고 문화적으로 민감한 비디오 현지화 시스템을 구축하는 것에 흥미가 있다면 연락주세요 — 우리는 채용 중입니다.",
    'research.join.button': "연락하기",

    // Team Page
    'team.title': "우리 팀을 만나보세요",
    'team.description.prefix': "CineLingo는 ",
    'team.description.mingi': "권민기",
    'team.description.middle': ", ",
    'team.description.jaeseok': "정재석",
    'team.description.suffix': ", 그리고 열정을 공유하는 창의적인 팀원들이 이끌고 있습니다. 연세대학교 어영정 교수님, 위스콘신 대학교 매디슨 캠퍼스의 이용재 교수님, 그리고 여러 창업자 및 투자자들의 지원을 받고 있습니다. 서울에 본사를 두고 있으며, 팀원들은 머신러닝, 소프트웨어, 엔터테인먼트 분야에서 오랜 경력을 쌓아온 전문가들입니다.",
    'team.location': "우리는 서울, 한국에 사무실이 있습니다. 우리 팀원들은 머신러닝, 소프트웨어, 엔터테인먼트 분야에서 오랜 경력을 가지고 있습니다.",
    'team.belief': "우리는 명확한 비전을 가진 작고 집중된 팀이 위대한 결과를 만들어낼 수 있다고 믿습니다.",
    'team.photos.title': "우리 팀",
    'team.photos.scroll': "CINELINGO 팀원들",
    'team.info.location.title': "위치",
    'team.info.location.address': "서울특별시 서대문구 연세로2나길 61, 대한민국",
    'team.info.email.title': "이메일",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ko' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 