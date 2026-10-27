/* Görünür içerik iki dilde tutulur. Yalnızca yayınlanması uygun olan bilgileri ekleyin.
   private:true kaynak kodu bağlantısını gizler. Sıralama bu listedeki sıradır. */
window.portfolioProjects = [{
  id:'tam-finans', private:true,
  tags:['Flutter','Java','Spring Boot','React','MySQL','JWT / RBAC','Firebase FCM','Cloudflare R2'],
  tr:{
    name:'Tam Finans',subtitle:'Çok platformlu fintech sistemi / Bitirme projesi',
    description:'Tam Finans Ürün Ekibi ile profesyonel bir ürün geliştirme sürecinde yürütülen bitirme projesi. Flutter mobil uygulaması, Spring Boot backend/API katmanı ve React yönetim panelinden oluşan çok platformlu bir fintech sistemi.',
    roleTitle:'Projedeki rolüm',
    role:'Projeyi bir arkadaşımla birlikte geliştirdim. Ben Flutter mobil uygulama tarafına, arkadaşım ise backend/API katmanına ağırlık verdi.',
    highlights:['Yerel işletme keşfi, uçtan uca şifreli mesajlaşma (E2EE) ve quiz etkileşimleri.','JWT/RBAC ile kimlik doğrulama ve yetkilendirme, denetim kayıtları ve WebSocket iletişimi.','Firebase FCM ile anlık bildirimler ve Cloudflare R2 üzerinden medya yönetimi.'],
    visualTitle:'Bir ürün, üç katman.',visualLabel:'Sistem mimarisi',
    layers:[['Mobil uygulama','Flutter'],['Backend / API','Java · Spring Boot'],['Yönetim paneli','React']],
    foundation:'MySQL / Firebase FCM / Cloudflare R2',
    privateLabel:'Özel proje',projectType:'Bitirme projesi',note:'Kaynak kodu özel tutuluyor. Herkese açık canlı demo bulunmuyor.'
  },
  en:{
    name:'Tam Finans',subtitle:'Multi-platform fintech system / Graduation project',
    description:'A graduation project developed with the Tam Finans Product Team within a professional product workflow. A multi-platform fintech system spanning a Flutter mobile application, a Spring Boot backend/API and a React admin panel.',
    roleTitle:'My role',
    role:'I developed this project with a friend. I focused on the Flutter mobile application, while my teammate focused on the backend/API layer.',
    highlights:['Local business discovery, end-to-end encrypted messaging (E2EE) and quiz engagement.','JWT/RBAC authentication and authorization, audit logging and WebSocket communication.','Push notifications through Firebase FCM and media management with Cloudflare R2.'],
    visualTitle:'One product, three layers.',visualLabel:'System architecture',
    layers:[['Mobile application','Flutter'],['Backend / API','Java · Spring Boot'],['Admin panel','React']],
    foundation:'MySQL / Firebase FCM / Cloudflare R2',
    privateLabel:'Private project',projectType:'Graduation project',note:'The source code is private. No public live demo is available.'
  }
},
{
  "id": "smart-hospital",
  "private": true,
  "tags": [
    "Java",
    "Spring Boot",
    "Flutter",
    "JavaScript",
    "Electron",
    "JWT",
    "Cloudflare R2"
  ],
  "tr": {
    "name": "Akıllı Hastane Sistemi",
    "subtitle": "Kanuni Sultan Süleyman Hastanesi / Entegre sağlık platformu",
    "description": "Kanuni Sultan Süleyman Hastanesi ile birlikte geliştirdiğimiz entegre sağlık platformu. Hasta ve personel mobil uygulamalarını, masaüstü yönetim panelini ve Spring Boot backend katmanını bir araya getiriyor.",
    "roleTitle": "İş birliği",
    "role": "Hastane ile birlikte, hasta ve personel ihtiyaçlarını aynı sistemde ele alan bir platform geliştirme çalışması.",
    "highlights": [
      "Hasta ve personel için mobil uygulamalar; yönetim ekibi için masaüstü paneli.",
      "Sınırlı altyapıya sahip ortamlara uygun tasarım ve gerçek zamanlı navigasyon.",
      "Acil durum koordinasyonu, JWT ile kimlik doğrulama ve Cloudflare R2 ile medya yönetimi."
    ],
    "visualTitle": "Hasta, personel ve yönetim.",
    "visualLabel": "Sistem mimarisi",
    "layers": [
      [
        "Hasta ve personel uygulamaları",
        "Flutter"
      ],
      [
        "Backend / API",
        "Java · Spring Boot"
      ]
    ],
    "foundation": "JWT / Cloudflare R2",
    "privateLabel": "Özel proje",
    "projectType": "Sağlık teknolojileri",
    "note": "Kaynak kodu özel tutuluyor."
  },
  "en": {
    "name": "Smart Hospital System",
    "subtitle": "Kanuni Sultan Süleyman Hospital / Integrated healthcare platform",
    "description": "An integrated healthcare platform we developed in collaboration with Kanuni Sultan Süleyman Hospital. It brings together patient and staff mobile applications, an admin desktop panel and a Spring Boot backend.",
    "roleTitle": "Collaboration",
    "role": "A platform developed with the hospital to address patient and staff needs within a shared system.",
    "highlights": [
      "Mobile applications for patients and staff, with a desktop panel for administrators.",
      "Designed for low-infrastructure environments with real-time navigation.",
      "Emergency coordination, JWT authentication and media management through Cloudflare R2."
    ],
    "visualTitle": "Patients, staff and administration.",
    "visualLabel": "System architecture",
    "layers": [
      [
        "Patient & staff applications",
        "Flutter"
      ],
      [
        "Backend / API",
        "Java · Spring Boot"
      ]
    ],
    "foundation": "JWT / Cloudflare R2",
    "privateLabel": "Private project",
    "projectType": "Healthcare technology",
    "note": "The source code is private."
  }
},
{
  "id": "reviel",
  "private": true,
  "liveUrl": "https://reviel.com.tr/",
  "tags": [
    "HTML",
    "CSS",
    "JavaScript",
    "C#"
  ],
  "tr": {
    "name": "Reviel",
    "subtitle": "Dermokozmetik markası / Ürün tanıtım sitesi",
    "description": "Reviel dermokozmetik markası için geliştirdiğim, yayında olan ürün tanıtım sitesi. Markayı, ürünlerini ve araştırma içeriklerini bir araya getirerek ziyaretçilerin bilgiye ulaşmasını sağlıyor.",
    "roleTitle": "Proje kapsamı",
    "role": "HTML, CSS ve JavaScript arayüzü ile C# sunucu tarafını bir araya getiren bir marka ve ürün tanıtım çalışması.",
    "highlights": [
      "Marka hikâyesi ve ürünlerin tanıtıldığı sayfalar.",
      "Araştırma içerikleri, önce–sonra görselleri ve iletişim alanları.",
      "reviel.com.tr adresinde yayında olan web sitesi."
    ],
    "visualTitle": "Markadan ürüne.",
    "visualLabel": "Site yapısı",
    "layers": [
      [
        "Kullanıcı arayüzü",
        "HTML · CSS · JavaScript"
      ],
      [
        "Sunucu tarafı",
        "C#"
      ]
    ],
    "foundation": "reviel.com.tr",
    "privateLabel": "Kaynak kodu özel",
    "projectType": "Yayında",
    "note": "Kaynak kodu özel tutuluyor; canlı site herkese açık.",
    "liveLabel": "Canlı siteyi ziyaret et"
  },
  "en": {
    "name": "Reviel",
    "subtitle": "Dermocosmetics brand / Product marketing website",
    "description": "A live product marketing website I developed for the Reviel dermocosmetics brand. It brings together the brand, its products and research content to help visitors find relevant information.",
    "roleTitle": "Project scope",
    "role": "A brand and product marketing website combining an HTML, CSS and JavaScript interface with a C# server side.",
    "highlights": [
      "Pages introducing the brand story and its products.",
      "Research content, before-and-after imagery and contact sections.",
      "A live website available at reviel.com.tr."
    ],
    "visualTitle": "From brand to product.",
    "visualLabel": "Website structure",
    "layers": [
      [
        "User interface",
        "HTML · CSS · JavaScript"
      ],
      [
        "Server side",
        "C#"
      ]
    ],
    "foundation": "reviel.com.tr",
    "privateLabel": "Private source code",
    "projectType": "Live website",
    "note": "The source code is private; the live website is public.",
    "liveLabel": "Visit live website"
  }
},
{
  "id": "zirve",
  "private": true,
  "liveUrl": "https://esenyurtzirvecilingir.com/",
  "tags": [
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "REST API",
    "JWT",
    "RBAC",
    "2FA"
  ],
  "tr": {
    "name": "Zirve Çilingir",
    "subtitle": "İçerik yönetim sistemi / Kurumsal web sitesi",
    "description": "Zirve Çilingir için geliştirdiğim, site içeriğinin büyük bölümünün yönetim panelinden güncellenebildiği CMS tabanlı web platformu. Ziyaretçi sitesi, ayrı yönetim paneli ve Spring Boot REST API katmanından oluşuyor.",
    "roleTitle": "Fullstack geliştirme",
    "role": "Ziyaretçi arayüzünü, içerik yönetim panelini ve backend katmanını ayrı uygulamalar olarak geliştirdim. Amaç, içerik değişikliklerinin kod düzenlemeden yönetilebilmesiydi.",
    "highlights": [
      "Site içeriğinin büyük bölümünü yönetim panelinden düzenleme imkânı.",
      "Çilingir ve oto anahtar hizmetleri, hizmet bölgeleri, blog ve sıkça sorulan sorular sayfaları.",
      "JWT ve rol tabanlı erişim kontrolü; iki faktörlü kimlik doğrulama, istek sınırlama ve kullanıcı yönetimi."
    ],
    "visualTitle": "İçerik değişir, kod değil.",
    "visualLabel": "CMS yapısı",
    "layers": [
      [
        "Ziyaretçi sitesi",
        "Next.js · TypeScript"
      ],
      [
        "İçerik yönetim paneli",
        "Next.js · TypeScript"
      ],
      [
        "Backend / REST API",
        "Java · Spring Boot"
      ]
    ],
    "foundation": "JWT / RBAC / 2FA / Rate limiting",
    "privateLabel": "Kaynak kodu özel",
    "projectType": "Yayında",
    "note": "Kaynak kodu ve yönetim paneli özel; ziyaretçi sitesi herkese açık.",
    "liveLabel": "Canlı siteyi ziyaret et"
  },
  "en": {
    "name": "Zirve Çilingir",
    "subtitle": "Content management system / Business website",
    "description": "A CMS-based web platform I developed for Zirve Çilingir, with most website content editable through an admin panel. It consists of a public website, a separate admin application and a Spring Boot REST API.",
    "roleTitle": "Fullstack development",
    "role": "I developed the public interface, content management panel and backend as separate applications. The goal was to make content updates possible without editing code.",
    "highlights": [
      "An admin panel for updating most of the website’s content.",
      "Pages covering locksmith and car key services, service areas, a blog and frequently asked questions.",
      "JWT and role-based access control, two-factor authentication, rate limiting and user management."
    ],
    "visualTitle": "Update content, not code.",
    "visualLabel": "CMS structure",
    "layers": [
      [
        "Public website",
        "Next.js · TypeScript"
      ],
      [
        "Content management panel",
        "Next.js · TypeScript"
      ],
      [
        "Backend / REST API",
        "Java · Spring Boot"
      ]
    ],
    "foundation": "JWT / RBAC / 2FA / Rate limiting",
    "privateLabel": "Private source code",
    "projectType": "Live website",
    "note": "The source code and admin panel are private; the public website is live.",
    "liveLabel": "Visit live website"
  }
},
{
  "id": "atli-logistics",
  "private": true,
  "tags": [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "JWT",
    "Cloudflare R2"
  ],
  "tr": {
    "name": "Atlı Lojistik",
    "subtitle": "Lojistik operasyonları / İş gücü yönetim sistemi",
    "description": "Lojistik operasyonlarında iş gücü yönetimi için geliştirilen platform. Hiyerarşik yönetici rolleri, görev atama, ödeme takibi ve çalışan doğrulama süreçlerini React yönetim paneli ve REST backend üzerinden bir araya getiriyor.",
    "roleTitle": "Proje kapsamı",
    "role": "Operasyon ekiplerinin görev ve çalışan süreçlerini yönetmesine yönelik, React arayüzü ve Spring Boot REST API katmanından oluşan bir sistem.",
    "highlights": [
      "Hiyerarşik yönetici rolleri ve güvenli görev atama.",
      "Ödeme takibi ve çalışan doğrulama süreçleri.",
      "MySQL veri katmanı, JWT ile kimlik doğrulama ve Cloudflare R2 entegrasyonu."
    ],
    "visualTitle": "Operasyondan takibe.",
    "visualLabel": "Sistem mimarisi",
    "layers": [
      [
        "Yönetim paneli",
        "React"
      ],
      [
        "Backend / REST API",
        "Java · Spring Boot"
      ]
    ],
    "foundation": "MySQL / JWT / Cloudflare R2",
    "privateLabel": "Kaynak kodu özel",
    "projectType": "İş gücü yönetimi",
    "note": "Kaynak kodu özel tutuluyor.",
    "liveLabel": "Canlı siteyi ziyaret et"
  },
  "en": {
    "name": "Atlı Logistics",
    "subtitle": "Logistics operations / Workforce management system",
    "description": "A workforce management platform for logistics operations. It combines hierarchical admin roles, task assignment, payment tracking and worker verification through a React dashboard and a REST backend.",
    "roleTitle": "Project scope",
    "role": "A system built around a React interface and a Spring Boot REST API to help operations teams manage tasks and workforce processes.",
    "highlights": [
      "Hierarchical admin roles and secure task assignment.",
      "Payment tracking and worker verification workflows.",
      "A MySQL data layer, JWT authentication and Cloudflare R2 integration."
    ],
    "visualTitle": "From operations to oversight.",
    "visualLabel": "System architecture",
    "layers": [
      [
        "Admin dashboard",
        "React"
      ],
      [
        "Backend / REST API",
        "Java · Spring Boot"
      ]
    ],
    "foundation": "MySQL / JWT / Cloudflare R2",
    "privateLabel": "Private source code",
    "projectType": "Workforce management",
    "note": "The source code is private.",
    "liveLabel": "Visit live website"
  }
},
{
  "id": "aircraft-classification",
  "private": true,
  "tags": [
    "Python",
    "PyTorch",
    "scikit-learn",
    "NumPy",
    "Pandas",
    "EfficientNet-B4"
  ],
  "tr": {
    "name": "Askeri Uçak Sınıflandırma",
    "subtitle": "Bilgisayarlı görü / Derin öğrenme hattı",
    "description": "38.826 görüntü üzerinden 89 farklı askeri uçak türünü sınıflandıran, EfficientNet-B4 tabanlı derin öğrenme projesi. Eğitim, değerlendirme ve çıkarım aşamalarını kapsayan bir iş akışı içeriyor.",
    "roleTitle": "Proje kapsamı",
    "role": "Sınıf dengesizliğini ele alan eğitim yaklaşımı, model değerlendirme süreci ve eğitilmiş modelle görüntü sınıflandırma.",
    "highlights": [
      "89 uçak türü ve 38.826 görüntüden oluşan veri seti.",
      "Ağırlıklı kayıp fonksiyonu ve yoğun veri artırma ile sınıf dengesizliğini ele alma.",
      "EfficientNet-B4 ile %92,86 Top-1 doğruluk; değerlendirme ve çıkarım hattı."
    ],
    "visualTitle": "Görüntüden sınıflandırmaya.",
    "visualLabel": "Model iş akışı",
    "layers": [
      [
        "Veri seti",
        "38.826 görüntü / 89 sınıf"
      ],
      [
        "Derin öğrenme modeli",
        "EfficientNet-B4 · PyTorch"
      ],
      [
        "Top-1 doğruluk",
        "%92,86"
      ]
    ],
    "foundation": "Veri artırma / Ağırlıklı kayıp / Çıkarım",
    "privateLabel": "Kaynak kodu özel",
    "projectType": "Yapay zekâ / Bilgisayarlı görü",
    "note": "Kaynak kodu özel tutuluyor."
  },
  "en": {
    "name": "Military Aircraft Classification",
    "subtitle": "Computer vision / Deep learning pipeline",
    "description": "An EfficientNet-B4 deep learning project classifying 89 military aircraft types across 38,826 images. The workflow covers training, evaluation and inference.",
    "roleTitle": "Project scope",
    "role": "A training approach that addresses class imbalance, a model evaluation workflow and image classification using the trained model.",
    "highlights": [
      "A dataset of 38,826 images spanning 89 aircraft types.",
      "Weighted loss and extensive data augmentation to address class imbalance.",
      "92.86% Top-1 accuracy with EfficientNet-B4, with evaluation and inference pipelines."
    ],
    "visualTitle": "From image to classification.",
    "visualLabel": "Model workflow",
    "layers": [
      [
        "Dataset",
        "38,826 images / 89 classes"
      ],
      [
        "Deep learning model",
        "EfficientNet-B4 · PyTorch"
      ],
      [
        "Top-1 accuracy",
        "92.86%"
      ]
    ],
    "foundation": "Augmentation / Weighted loss / Inference",
    "privateLabel": "Private source code",
    "projectType": "AI / Computer vision",
    "note": "The source code is private."
  }
}
];
