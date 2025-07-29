const searchInput = document.querySelector('.search-input');
const searchResultsContainer = document.getElementById('search-results');

const songs = [
  { title: 'Sapphire', artist: 'Ed Sheeran', image: 'saphire.jpg', audio: 'Sapphire.mp3' },
  { title: 'Mast Magan', artist: 'Arijit Singh', image: '2states.png', audio: 'Mast Magan FULL Video Song  2 States  Arijit Singh  Arjun Kapoor, Alia Bhatt - T-Series.mp3' },
  { title: 'Die with a smile', artist: 'Bruno Mars', image: 'diewithasmile.png', audio: 'Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video) - LadyGagaVEVO.mp3' },
  { title: 'Ik vaariya', artist: 'Arijit Singh', image: 'raabta.png', audio: 'Ik Vaari Aa Full Song  Raabta  Sushant Singh Rajput & Kriti Sanon  Pritam Arijit Singh Amitabh B - T-Series.mp3' },
  { title: 'Ik Kudi', artist: 'Diljit Dosanjh', image: 'ikkudi.png', audio: 'Ikk Kudi - Full Video  Udta Punjab  Shahid Mallya  Alia Bhatt & Shahid Kapoor  Amit Trivedi - Zee Music Company.mp3' },
  { title: 'Raabta', artist: 'Diljit Dosanjh', image: 'raabta.png', audio: 'Raabta Title Song (Full Video)  Deepika Padukone, Sushant Singh Rajput, Kriti Sanon  Pritam, Jam 8 - T-Series.mp3' },
  { title: 'Espresso', artist: 'Sabrina Carpenter', image: 'sabrina.png', audio: 'Sabrina Carpenter - Espresso - SabrinaCarpenterVEVO.mp3' },
  { title: 'Dil Nu', artist: 'Diljit Dosanjh', image: 'dilnu.png', audio: 'Dil Nu.mp3' },
  { title: 'High On Life', artist: 'Martin Garrix', image: 'highonlife.png', audio: 'Martin Garrix feat. Bonn - High On Life (Official Video) - Martin Garrix.mp3' },
  { title: 'Senorita', artist: 'Shawn Mendes,Camila Cabello', image: 'senorita.png', audio: 'Shawn Mendes, Camila Cabello - Señorita - ShawnMendesVEVO.mp3' },
  { title: 'Aashiq Tera', artist: 'Sohail Sen', image: 'aashiqtera.png', audio: 'Aashiq Tera (Official Song)  Happy Bhag Jayegi  Diana Penty, Abhay Deol, Ali Fazal, Momal.mp3' },
  { title: 'Aaj Ki Raat', artist: 'Sachin-Jigar', image: 'aajkiraat.png', audio: 'Aaj Ki Raat  Stree 2  Tamannaah Bhatia  Sachin-Jigar  Madhubanti  Divya  Amitabh - Saregama Music.mp3' },
  { title: 'Zinda', artist: 'Prasoon Joshi,Siddhart Mahadevan', image: 'bhaagmilkabhaag.png', audio: 'Zinda Lyric Video - Bhaag Milkha BhaagFarhan AkhtarSiddharth MahadevanPrasoon Joshi - SonyMusicIndiaVEVO.mp3' },
  { title: 'Bhaag Milkha Bhaag Title Track', artist: 'Farhan Akhtar,Siddhart Mahadevan', image: 'bhaagmilkabhaag.png', audio: 'Bhaag Milkha Bhaag (Rock Version) Full Video - Farhan AkhtarSiddharth Mahadevan - SonyMusicIndiaVEVO.mp3' },
  { title: 'Offo', artist: 'Amitabh Bhattacharya', image: '2states.png', audio: 'Offo Full Video Song _ 2 States _ Arjun Kapoor _ Alia Bhatt _ Amitabh Bhattacharya [YPlIhgAX9AQ].mp3' },
  { title: 'Locha-E-Ulfat', artist: 'Benny Dayal', image: '2states.png', audio: 'Locha E Ulfat FULL Video Song  2 States  Arjun Kapoor, Alia Bhatt - T-Series.mp3' },
  { title: 'Chor Bazari', artist: 'Pritam, Sunidhi Chauhan', image: 'chorbazari.png', audio: 'CHOR BAZARI - Full Audio Song - Love Aaj Kal  Saif Ali Khan & Deepika Padukone - Mzaalo.mp3' },
  { title: 'Pyaar Hota Kayi Baar Hai', artist: 'Arijit Singh, Amitabh Bhattacharya', image: 'pyaarhotakayibaarhai.png', audio: 'Pyaar Hota Kayi Baar Hai (Full video) Tu Jhoothi Main Makkaar Ranbir,Shraddha,Pritam,Arijit,Amitab.mp3' },
  { title: 'I Wanna Be Yours', artist: 'Arctic Monkeys', image: 'wannabeyours.png', audio: 'I wanna be yours - arctic monkeys - 𝙊𝙝𝙚𝙚 𝙘𝙧𝙚𝙖𝙩𝙞𝙤𝙣.mp3' },
  { title: 'Baby', artist: 'Justin Bieber', image: 'baby.png', audio: 'Justin Bieber - Baby ft. Ludacris - JustinBieberVEVO.mp3' },  
  { title: 'Jaisa Mera T', artist: 'Sachin-Jigar, Arijit Singh', image: 'jaisameratu.png', audio: "Jaise Mera Tu (Full Video Song)  Happy Ending  Saif Ali Khan & Ileana D'Cruz - Eros Now Music.mp3" },  
  { title: 'Until I Found You', artist: 'Stefan Sanchez, Em Beihold', image: 'untilifoundyou.png', audio: "Until I Found You -Stephen Sanchez ft. Em Beihold (Lyric Video) - sydhslm.mp3" },  
  { title: 'Blue', artist: 'Young Kai', image: 'blue.png', audio: "yung kai - blue (Lyrics) - Creative Chaos.mp3" }, 
  { title: 'Shaky-Shaky', artist: 'Sanju Rathod', image: 'shaky.png', audio: "Shaky ( Official #Video ) Sanju Rathod Ft. Isha Malviya  G-Spark  New #Marathi Songs 2025 - Sanju Rathod SR.mp3" }, 
  { title: 'Yellow', artist: 'Cold Play', image: 'yellow.png', audio: "Coldplay - Yellow (Official Video) - Coldplay.mp3" }, 
  { title: 'Give me some sunshine', artist: 'Sharman Joshi', image: '3idoits.png', audio: "Give Me Some Sunshine - 3 Idiots  Aamir Khan, Madhavan, Sharman J  Suraj Jagan  Shantanu Moitra - Zee Music Company.mp3" }, 
  { title: 'Babaji Babaji', artist: 'Sapna Chaudhary', image: 'babaji.png', audio: "Sapna Choudhary  Baba Ji (Official Video)  Vishu Puthi   Haryanvi Song - Dreams Entertainment.mp3" }, 
  { title: 'Behti Hawa Sa Tha Wo', artist: 'Shaan', image: '3idoits.png', audio: "Behti Hawa Sa Tha Woh – 3 Idiots  Aamir Khan, Madhavan, Sharman J  Shaan & Shantanu M  Swanand K - Zee Music Company.mp3" }, 
  { title: 'Fein', artist: 'Travis Scott', image: 'fein.png', audio:"Travis Scott - FE!N ft. Playboi Carti - TravisScottVEVO.mp3" },
  { title: 'Perfect', artist: 'Ed Sheeran', image: 'perfect.png', audio: "Ed Sheeran - Perfect (Official Music Video) - Ed Sheeran.mp3" },
];

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const results = songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );

  searchResultsContainer.innerHTML = "";

  if (results.length === 0) {
    searchResultsContainer.innerHTML = "<p>No songs found.</p>";
  } else {
    results.forEach(song => {
      const card = document.createElement('div');
      card.classList.add('song-card');

      // Encode each value to ensure it works in a URL
      const url = new URL('player.html', window.location.origin);
      url.searchParams.set('title', song.title);
      url.searchParams.set('artist', song.artist);
      url.searchParams.set('image', encodeURIComponent(song.image));
      url.searchParams.set('audio', encodeURIComponent(song.audio));

      card.innerHTML = `
        <img src="${song.image}" alt="${song.title}">
        <h4>${song.title}</h4>
        <p>${song.artist}</p>
        <button class="play-btn">
          <i class="fa-sharp fa-solid fa-play"></i>
        </button>
      `;

      card.addEventListener('click', () => {
        window.location.href = url.toString();
      });

      searchResultsContainer.appendChild(card);
    });

    searchResultsContainer.style.display = 'flex';
  }
});
