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
}
];
