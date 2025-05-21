// document.addEventListener('DOMContentLoaded', function() {
//     // Course data
//     const courses = [
//       {
//         id: 1,
//         imageUrl: "../tourism/assetd/tette.JPG",
//         title: "市民交流センターtette",
//         subtitle: "震災復興のシンボル、中心市街地再生・活性化の拠点施設",
//         description: "●震災復興のシンボル\n●中心市街地再生・活性化の拠点・中核施設\n●公共施設の複合化・機能融合(図書館機能、生涯学習(公民館)機能、子育て支援機能(屋内遊び場・子育て支援センター)、市民活動支援機能(市民活動サポートセンター)、ミュージアム機能(円谷英二ミュージアム)、コミュニティFMスタジオ、チャレンジショップ等)",
//       },
//       {
//         id: 2,
//         imageUrl: "/gallery-2.jpg",
//         title: "まちなか街並み散策",
//         subtitle: "ウルトラヒーロー・怪獣モニュメントと観光物産館を巡る",
//         description: "●ウルトラヒーロー・怪獣モニュメント\n●観光物産館flatto\n●SHOT M78(円谷英二監督の生家)",
//       },
//       {
//         id: 3,
//         imageUrl: "/gallery-3.jpg",
//         title: "市役所本庁舎",
//         subtitle: "ウルトラの父モニュメントと展望スペース「ウルトラフロア」",
//         description: "●ウルトラの父モニュメント\n●展望スペース「ウルトラフロア」",
//       },
//       {
//         id: 4,
//         imageUrl: "/gallery-4.jpg",
//         title: "南部地区街並み散策",
//         subtitle: "結の辻・俳句のきあんどんを巡る文化探訪",
//         description: "●結の辻・俳句のきあんどん",
//       },
//       {
//         id: 5,
//         imageUrl: "/gallery-5.jpg",
//         title: "風流のはじめ館",
//         subtitle: "松尾芭蕉や須賀川の俳人の資料展示・学習施設",
//         description: "●松尾芭蕉や須賀川の俳人の資料等の収集、保存、展示\n●地域の歴史性を継承し、地区の回遊性を発展・促進するハブステーション\n●伝統文化に関わる市民の生涯学習拠点",
//       },
//       {
//         id: 6,
//         imageUrl: "/gallery-6.jpg",
//         title: "翠ヶ丘公園Park-PFIカフェ＆温浴施設",
//         subtitle: "福島県内初のPark-PFIによる新しい公園の形",
//         description: "●福島県内初のPark-PFI",
//       },
//       {
//         id: 7,
//         imageUrl: "/gallery-7.jpg",
//         title: "特撮アーカイブセンター",
//         subtitle: "特撮に関する貴重な資料の収集・保存・展示施設",
//         description: "●特撮に関する貴重な資料の収集、保存、修復、展示",
//       },
//     ];
  
//     // Function to create a card element
//     function createCard(course) {
//       const card = document.createElement('div');
//       card.className = 'card';
      
//       card.innerHTML = `
//         <div class="card-image">
//           <img src="${course.imageUrl}" alt="${course.title}">
//           <div class="card-badge">NEW</div>
//         </div>
//         <div class="card-content">
//           <h3 class="card-title">${course.title}</h3>
//           <p class="card-subtitle">${course.subtitle}</p>
//           <div class="card-description">${course.description}</div>
//         </div>
//       `;
      
//       return card;
//     }
  
//     // Render all courses
//     function renderCourses() {
//       const coursesGrid = document.getElementById('coursesGrid');
      
//       if (coursesGrid) {
//         courses.forEach(course => {
//           const cardElement = createCard(course);
//           coursesGrid.appendChild(cardElement);
//         });
//       }
//     }
  
//     // Initialize
//     renderCourses();
//   });