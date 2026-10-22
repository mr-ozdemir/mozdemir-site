// Sitedeki kişisel/kurumsal verinin tek kaynağı. Metinler eski TR/EN sayfalardan birebir taşındı.
// Yeni bir bilgi eklerken her iki dili de doldurun.
import type { Lang } from '../i18n/ui';

export type Localized<T = string> = Record<Lang, T>;

/** Sitenin içeriğinin en son ne zaman gözden geçirildiği (R43). YYYY-MM-DD. */
export const lastUpdated = '2026-10-22';

export const profile = {
  name: 'Muhammet Özdemir',
  alternateName: 'Muhammet Ozdemir',
  email: 'mr.ozdemir34@gmail.com',
  github: 'https://github.com/mr-ozdemir',
  linkedin: 'https://www.linkedin.com/in/mrozdemir',
  cvPdf: '/assets/cv/Muhammet Ozdemir_CV.pdf',
  cvPdfMeta: { pages: 1, sizeKb: 92 },
  role: {
    tr: 'Yapay Zekâ Mühendisi & Araştırmacısı',
    en: 'AI Engineer & Researcher',
  },
  tagline: {
    tr: 'AutoML üzerine araştırma yapıyor; bilgisayarlı görü ve kimlik doğrulama alanında üretimde çalışan yapay zekâ sistemleri geliştiriyorum.',
    en: 'I research AutoML and build production AI systems for computer vision and identity verification.',
  },
  currently: {
    tr: [
      'AI Mühendisi (serbest) — bankacılık ve gemicilik operasyonları için yapay zekâ çözümleri',
      'Yapay Zekâ Araştırmacısı — Erciyes Üniversitesi Yapay Zekâ ve Büyük Veri Uygulama ve Araştırma Merkezi',
    ],
    en: [
      'AI Engineer (self-employed) — AI solutions for banking and shipping operations',
      'AI Researcher — Erciyes University AI and Big Data Application and Research Center',
    ],
  },
  availability: {
    tr: 'Serbest çalışmaya açığım: AutoML, bilgisayarlı görü ve uçtan uca, üretime hazır yapay zekâ sistemleri.',
    en: 'Available for freelance work: AutoML, computer vision and end-to-end, production-ready AI systems.',
  },
  bioShort: {
    tr: 'Erciyes Üniversitesi Bilgisayar Mühendisliği mezunu (Temmuz 2026). TÜBİTAK ve TÜSEB destekli yapay zekâ ve bilgisayarlı görü araştırma projelerinde baş geliştirici; AutoML ve yapay zekâ alanında literatüre katkı sunan yeni bilimsel yöntemler geliştiriyor. Erciyes Üniversitesi Yapay Zekâ Kulübü’nün kurucusu ve başkanı.',
    en: 'B.S. in Computer Engineering, Erciyes University (graduated July 2026). Lead developer on TÜBİTAK and TÜSEB-funded AI and computer-vision research projects; developer of novel scientific methods in AutoML and AI contributing to the literature. Founder and president of the Erciyes University AI Club.',
  },
  bioLong: {
    tr: 'Kariyerimde, temel bilgisayar bilimleri kavramlarına olan ileri düzeyde hâkimiyetimin yanı sıra, 3 yılı aşkın süredir yapay zekâ sistemleri geliştiriyorum. Yapay zekâ projelerinde problemleri hızla analiz eder, fizibilite ve yol haritasını çıkarır; gerekli teorik altyapıyı kurup yeni yöntemler geliştirir, sisteme uygular ve test ederim. Gerektiğinde donanım/yazılım entegrasyonunu üstlenerek çözümleri uçtan uca, gerçek zamanlı ve üretim ortamına hazır hâle getiririm.',
    en: 'Alongside a strong command of core computer science, I have built AI systems for 3+ years. I quickly analyze problems, outline feasibility and roadmaps, establish the theoretical foundation, and develop and test new methods. When needed, I handle hardware/software integration to ship end-to-end, real-time, production-ready solutions.',
  },
  // Kullanıcı kararıyla olduğu gibi korunuyor.
  facts: {
    tr: [
      { label: 'Yaş', value: '25' },
      { label: 'Adres', value: 'Kuzguncuk, Üsküdar, İstanbul' },
      { label: 'Eğitim', value: 'Bilgisayar Mühendisliği (Lisans, 2026)' },
      { label: 'E-posta', value: 'mr.ozdemir34@gmail.com' },
      { label: 'Serbest çalışma', value: 'Açık' },
      { label: 'Yabancı dil', value: 'İngilizce (B2)' },
    ],
    en: [
      { label: 'Age', value: '25' },
      { label: 'Location', value: 'Kuzguncuk, Üsküdar, Istanbul' },
      { label: 'Education', value: 'B.S. Computer Engineering (2026)' },
      { label: 'Email', value: 'mr.ozdemir34@gmail.com' },
      { label: 'Freelance', value: 'Available' },
      { label: 'Language', value: 'English (B2)' },
    ],
  },
};

export type Experience = {
  role: Localized;
  org: Localized;
  start: string; // MM/YYYY
  end: string | null; // null = güncel
  kind: Localized;
  points: Localized<string[]>;
};

export const experience: Experience[] = [
  {
    role: { tr: 'AI Mühendisi', en: 'AI Engineer' },
    org: { tr: 'Serbest çalışan · Türkiye', en: 'Self-employed · Türkiye' },
    start: '09/2025',
    end: null,
    kind: { tr: 'Serbest', en: 'Self-employed' },
    points: {
      tr: [
        'Bankacılık uygulamaları için 10 milyonda 1 hata oranına sahip yüz doğrulama sistemleri ile kimlik tanıma, OCR ve canlılık (liveness) modülleri geliştirdim; TSE sertifikasyon sürecinin tamamını yönettim.',
        'Gemicilik operasyonları için yapay zekâ hizmetleri sunuyorum.',
      ],
      en: [
        'Built face-verification systems with a 1-in-10M error rate, plus ID recognition, OCR, and liveness modules for banking applications; owned the full TSE certification process.',
        'Provide AI services for shipping operations.',
      ],
    },
  },
  {
    role: { tr: 'Yapay Zekâ Araştırmacısı (Tam Zamanlı)', en: 'AI Researcher (Full-time)' },
    org: {
      tr: 'Erciyes Üniversitesi Yapay Zekâ ve Büyük Veri Uygulama ve Araştırma Merkezi · Uzaktan',
      en: 'Erciyes University AI and Big Data Application and Research Center · Remote',
    },
    start: '10/2024',
    end: null,
    kind: { tr: 'Araştırma', en: 'Research' },
    points: {
      tr: [
        'Aktivasyon fonksiyonu tasarımı, sinir ağı mimari araması (NAS) ve uçtan uca AutoML tasarımı üzerine AutoML ve yapay zekâ optimizasyonu araştırmaları yürütüyor; SCI/E indeksli dergilerde yayın yapıyorum.',
      ],
      en: [
        'Conduct AutoML and AI-optimization research on activation-function design, Neural Architecture Search (NAS), and end-to-end AutoML design, published in SCI/E-indexed venues.',
      ],
    },
  },
  {
    role: { tr: 'AI Mühendisi Stajyeri', en: 'AI Engineer Intern' },
    org: { tr: 'Skechers Türkiye / Olka', en: 'Skechers Türkiye / Olka' },
    start: '06/2026',
    end: '08/2026',
    kind: { tr: 'Staj', en: 'Internship' },
    points: {
      tr: [
        'vLLM ile şirket içi (on-premises) LLM servisleme, Text-to-SQL, merkezi RAG mimarisi ve CNN tabanlı doküman işleme.',
        'Servislerin Docker ile paketlenmesi, şirket içi uygulamalarla entegrasyon ve KVKK uyumlu koruma katmanları (guardrails).',
      ],
      en: [
        'On-premises LLM serving with vLLM, Text-to-SQL, a centralized RAG architecture, and CNN-based document processing.',
        'Dockerized services, integration with internal applications, and KVKK-compliant guardrails.',
      ],
    },
  },
  {
    role: { tr: 'AI Stajyeri', en: 'AI Intern' },
    org: {
      tr: 'Erciyes Üniversitesi, Bilgi İşlem Daire Başkanlığı',
      en: 'Erciyes University, IT Department',
    },
    start: '09/2024',
    end: '01/2025',
    kind: { tr: 'Staj', en: 'Internship' },
    points: {
      tr: [
        'Kampüs giriş/çıkış kontrolü, kişi sayımı ve kimlik tabanlı tespit için gerçek zamanlı CNN tabanlı yapay zekâ sistemi geliştirdim.',
        'Sistem tasarımı, model eğitimi, çoklu kamera görüntü işleme, donanım spesifikasyonu ve canlıya alma dâhil uçtan uca uygulama gerçekleştirdim.',
        'Çözümü üretim ortamına hazır hâle getirerek tam operasyonel hazırlığa ulaştırdım.',
      ],
      en: [
        'Built a real-time CNN-based system for campus entry/exit control, counting people/vehicles and performing ID-based tracking.',
        'Owned the end-to-end pipeline: system design, model training, multi-camera video processing, hardware specification, and production deployment.',
        'Delivered a production-ready solution with full operational readiness.',
      ],
    },
  },
  {
    role: { tr: 'Kurucu & Başkan, AI Proje Takım Lideri', en: 'Founder & President, AI Project Team Lead' },
    org: { tr: 'Erciyes Üniversitesi Yapay Zekâ Kulübü', en: 'Erciyes University AI Club' },
    start: '03/2024',
    end: null,
    kind: { tr: 'Topluluk', en: 'Community' },
    points: {
      tr: [
        '20 kişilik ekiple 8 teorik yapay zekâ projesi (TÜBİTAK destekli) ve bir TÜSEB destekli sağlık AI projesini yönettim; proje ulusal finalist oldu.',
        'Proje lideri, koordinatör ve araştırmacı olarak görev aldım; çalışmalardan doğan yayınlarda ortak yazarım.',
      ],
      en: [
        'Led 20 CS students across eight TÜBİTAK-funded AI projects and a TÜSEB-backed health-AI initiative that reached the national finals.',
        'Served as project lead, coordinator, and researcher; co-authored the resulting publications.',
      ],
    },
  },
];

export const education = [
  {
    degree: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' },
    school: { tr: 'Erciyes Üniversitesi, Kayseri', en: 'Erciyes University, Kayseri' },
    period: '09/2021 — 07/2026',
    detail: { tr: 'Lisans · Temmuz 2026’da mezun · GANO: 3.0', en: 'B.S. · Graduated July 2026 · GPA: 3.0' },
    note: {
      tr: 'Uluslararası bilgisayar bilimleri eğitim içeriğine sahip program.',
      en: 'Internationally aligned computer science and engineering curriculum with a focus on applied AI.',
    },
  },
];

export const certificates = [
  {
    name: { tr: 'İngilizce Dil Sertifikası (B1+ – B2)', en: 'English Language Certificate (B1+ – B2)' },
    issuer: { tr: 'St Giles International — Birleşik Krallık', en: 'St Giles International — United Kingdom' },
    date: '09/2025',
  },
];

export const awards = [
  {
    name: {
      tr: 'TÜSEB Ulusal Finalisti — 5 bin proje içinde ilk 50',
      en: 'TÜSEB National Finalist — top 50 among 5,000 projects',
    },
    detail: {
      tr: 'Erken Dönem Meme Kanseri Teşhisi (AI) projesi — Antalya’da sunuldu (2024)',
      en: 'Early-Stage Breast Cancer Diagnosis (AI) project — presented in Antalya (2024)',
    },
  },
  {
    name: { tr: 'Temsil Ödülü — ERÜ Rektörlüğü (2024)', en: 'Representation Award — ERÜ Rectorate (2024)' },
    detail: {
      tr: 'Yapay Zekâ Kulübü: uluslararası yarışmalarda finalist olarak üniversitenin temsil edilmesi',
      en: 'AI Club: representing the university as a finalist in international competitions',
    },
  },
  {
    name: {
      tr: 'Topluluk ve Kulüp Faaliyetleri Ödülü — ERÜ Rektörlüğü (2024)',
      en: 'Community and Club Activities Award — ERÜ Rectorate (2024)',
    },
    detail: {
      tr: 'Yapay Zekâ Kulübü: yıl boyunca yürütülen etkinlik ve projeler',
      en: 'AI Club: events and projects carried out throughout the year',
    },
  },
];

export const skills = [
  {
    group: { tr: 'Yapay zekâ / ML', en: 'AI / ML' },
    items: ['AutoML', 'AI Optimization', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'MLOps'],
  },
  {
    group: { tr: 'Uygulama', en: 'Applied' },
    items: ['Image Processing', 'Data Analysis', 'Model Deployment', 'Research & Publication'],
  },
  {
    group: { tr: 'Araçlar', en: 'Tools' },
    items: ['Python', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'CUDA', 'Docker', 'Git'],
  },
  {
    group: { tr: 'Projelerde kullanılan', en: 'Used in projects' },
    items: ['YOLO', 'vLLM', 'RAG', 'Flask', 'Django', 'Kubernetes', 'ONNX', 'ROS'],
  },
];

export const services = [
  {
    icon: 'sliders',
    title: { tr: 'AutoML çözümleri', en: 'AutoML solutions' },
    text: {
      tr: 'Probleme özgü veri ön işleme, model mimarisi, aktivasyon ve maliyet fonksiyonları, ağırlık başlatma stratejileri ve eğitim hiperparametrelerinin otomatik olarak tasarlanması; görev-spesifik, yüksek performanslı makine öğrenmesi altyapılarının geliştirilmesi ve üretim ortamlarına entegre edilmesi.',
      en: 'Automated design of data preprocessing, model architectures, activation and loss functions, weight initialization strategies, and training hyperparameters to build task-specific, high-performance ML pipelines ready for production.',
    },
  },
  {
    icon: 'eye',
    title: { tr: 'Bilgisayarlı görü', en: 'Computer vision' },
    text: {
      tr: 'Tanıma, sınıflandırma ve segmentasyon dâhil görsel tabanlı sistemlerin tasarlanması; görüntü işleme yöntemleriyle farklı çalışma koşullarına dayanıklı boru hatlarının oluşturulması, değerlendirilmesi ve üretime hazır şekilde devreye alınması.',
      en: 'Design recognition, classification, and segmentation workflows; harden pipelines with image processing so they remain reliable across conditions; evaluate and deploy them in production.',
    },
  },
  {
    icon: 'graph',
    title: { tr: 'Veri bilimi', en: 'Data science & analytics' },
    text: {
      tr: 'Veri analizi, görselleştirme ve raporlama süreçlerinin kurulması; makine öğrenmesi modelleriyle işletmeye değer katan içgörülerin elde edilmesi ve tetikleme mekanizmalarının yapılandırılması. Süreçlerin CRISP-DM metodolojisi ve MLOps ilkeleriyle uyumlu olarak yönetilmesi.',
      en: 'Build analytics, visualization, and reporting flows; surface business value with ML models and event triggers; manage the lifecycle with CRISP-DM practices and MLOps principles.',
    },
  },
  {
    icon: 'chat',
    title: { tr: 'Doğal dil işleme (NLP)', en: 'Natural language processing' },
    text: {
      tr: 'İş ihtiyaçlarına uygun chatbot ve görev odaklı agent çözümlerinin tasarlanması; metin sınıflandırma, duygu analizi, adlandırılmış varlık tanıma, özetleme ve bilgi çıkarımı bileşenlerinin kurulması. Yüksek performans ve düşük işletim maliyeti hedefleriyle mevcut iş akışlarına entegrasyonun sağlanması.',
      en: 'Design business-ready chatbots and task-focused agents; implement text classification, sentiment analysis, named-entity recognition, summarization, and information extraction components; integrate them into workflows with high performance and low operating cost targets.',
    },
  },
  {
    icon: 'cpu',
    title: { tr: 'Gömülü & edge AI', en: 'Embedded & edge AI' },
    text: {
      tr: 'Kaynak kısıtlı donanımlara uygun modellerin sıkıştırılması, quantization ve optimizasyon teknikleriyle uyarlanması; ONNX/TensorRT/TFLite dönüşümlerinin gerçekleştirilmesi ve donanım ile düşük seviyede haberleşen gerçek zamanlı yapay zekâ çözümlerinin devreye alınması.',
      en: 'Compress, quantize, and optimize models for constrained hardware; handle ONNX/TensorRT/TFLite conversions; deploy real-time AI solutions that communicate directly with devices.',
    },
  },
];

export const club = {
  url: 'https://erciyesyapayzeka.com.tr',
  linkedin: 'https://www.linkedin.com/company/erciyes-yapay-zeka/',
  summary: {
    tr: '20 kişilik ekip; 8 teorik proje (TÜBİTAK) ve TÜSEB destekli sağlık AI projesi.',
    en: '20-person team; eight theoretical projects (TÜBİTAK) and a TÜSEB-backed healthcare AI project.',
  },
  about: {
    tr: 'ERÜ Yapay Zekâ Kulübü; araştırma, eğitim ve topluluk gelişimini birlikte yürüten bir yapıdadır. TÜBİTAK–TÜSEB destekli projelerin yanında düzenli eğitim kampları, konuşma etkinlikleri ve tanıtım günleriyle ekosisteme katkı sağlar.',
    en: 'ERÜ Artificial Intelligence Club is an organization that jointly advances research, education and community development. Alongside TÜBİTAK–TÜSEB supported projects, it contributes to the ecosystem through regular training camps, talk events and showcase days.',
  },
  kpis: [
    { label: { tr: 'Araştırma projesi', en: 'Research projects' }, value: { tr: '8 × TÜBİTAK', en: '8 × TÜBİTAK' } },
    { label: { tr: 'Sağlık-AI', en: 'Health-AI' }, value: { tr: '1 × TÜSEB (Final)', en: '1 × TÜSEB (Final)' } },
    { label: { tr: 'Çekirdek ekip', en: 'Core team' }, value: { tr: '20 kişi', en: '20 people' } },
    { label: { tr: 'Ödül', en: 'Awards' }, value: { tr: '2', en: '2' } },
  ],
  awards: {
    tr: [
      { name: 'Temsil Ödülü', text: 'Uluslararası yarışmalarda finalist olarak üniversitenin başarıyla temsil edilmesi' },
      { name: 'Topluluk ve Kulüp Faaliyetleri Ödülü', text: 'Yıl boyunca yürütülen etkinlik ve projeler' },
    ],
    en: [
      { name: 'Representation Award', text: 'Successfully representing the university as a finalist in international competitions' },
      { name: 'Community and Club Activities Award', text: 'Events and projects carried out throughout the year' },
    ],
  },
  awardsLead: {
    tr: 'Erciyes Üniversitesi Rektörlüğü tarafından 2024’te iki ödül',
    en: 'Two awards from the Erciyes University Rectorate in 2024',
  },
  timeline: {
    tr: [
      { title: 'Yapay Zekâ Ekosistemi Tanışma (Cumhurbaşkanlığı Dijital Dönüşüm Ofisi)', text: 'Konferans & networking' },
      { title: 'Data Kamp — Teorik ve Uygulamalı Makine Öğrenmesi', text: 'Güz dönemi 8 hafta; baharda proje atölyesi' },
      { title: 'CENGLISH — Haftalık AI Sohbetleri', text: 'İngilizce pratik için düzenli buluşmalar' },
      { title: 'Proje Tanıtım & TÜBİTAK Proje Yazım Konferansları', text: 'Bilimsel araştırma projeleri odaklı oturumlar' },
      { title: 'Mutex Algoritma Kampı — Temel Programlama', text: 'Eki 2024 · 6 aylık program kapanışı' },
    ],
    en: [
      { title: 'AI Ecosystem Introductory Meetup (Digital Transformation Office of the Presidency)', text: 'Conference & networking' },
      { title: 'Data Camp — Theoretical and Applied Machine Learning', text: '8 weeks in the fall semester; project workshop in spring' },
      { title: 'CENGLISH — Weekly AI Talks', text: 'Regular meetups for practicing English' },
      { title: 'Project Showcase & TÜBİTAK Project Writing Conferences', text: 'Sessions focused on scientific research projects' },
      { title: 'Mutex Algorithm Camp — Fundamentals of Programming', text: 'Oct 2024 · closing of a 6-month program' },
    ],
  },
};
