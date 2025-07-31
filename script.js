// DOMContentLoaded to ensure all elements are ready
// Sidebar hamburger logic

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".left-section");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.add("active");
  });

  sidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  document.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Search logic
const searchInput = document.querySelector('.search-input');
const searchResultsContainer = document.getElementById('search-results');

const hiddenSongs = [
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
  { title: 'Jhol', artist: 'Annural Khalid', image: 'jhol.png', audio: "Jhol.mp3" },
  { title: 'Born to Shine', artist: 'Diljit Dosanjh', image: 'bornTOshine.png', audio: "Goat.mp3" },
  { title: 'Badtameez Dil', artist: 'Diljit DosanjhBenny Dayal, Shefali Alvares', image: 'yjhd.png', audio: "BadtameezDil.mp3" },
  { title: 'Finding Her', artist: 'Kushagra,Bharath', image: 'findingher.png', audio: "FindingHer.mp3" },
  { title: 'Obsessed', artist: 'Riar Saab,Abhijay Sharma', image: 'obssesd.png', audio: "Obssesd.mp3" },
  { title: 'Bang-Bang', artist: 'Jessie J,Ariana Grande', image: 'bangbang.png', audio: "BangBang.mp3" },
  { title: 'Pink Lips', artist: 'Meet Bros Anjjan featuring Khushboo Grewal', image: 'pinklips.png', audio: "PinkLips.mp3" },
  { title: 'Pretty Little Baby', artist: 'Connie Francis', image: 'plb.png', audio: "PrettyLittleBaby.mp3" },
  { title: 'APT', artist: 'ROSE,Bruno Mars', image: 'apt.png', audio: "APT.mp3" },
  { title: 'Apna Bana Le', artist: 'Arjit Singh', image: 'apnabanale.png', audio: "Apna Bana Le - Full Audio  Bhediya  Varun Dhawan, Kriti Sanon Sachin-Jigar,Arijit Singh,Amitabh B.mp3" },
  { title: 'Ae Dil Hai Mushkil', artist: 'Arjit Singh', image: 'adhm.png', audio: "Arijit Singh  Ae Dil Hai Mushkil - Title Track  Lyrical Video  Ranbir Kapoor  Pritam Chakraborty.mp3" },
  { title: 'Sajni', artist: 'Arjit Singh', image: 'sajni.png', audio: "Sajni (Lyrical Video)_ Arijit Singh, Ram Sampath  Laapataa Ladies   Aamir Khan Productions.mp3" },
  { title: 'Satranga', artist: 'Arjit Singh', image: 'satranga.png', audio: "ANIMAL_ SATRANGA(Song) Ranbir Kapoor,RashmikaSandeep VArijit,Shreyas P,Siddharth-Garima Bhushan K.mp3" },
  { title: 'Tujhe Kitna Chahane Lage', artist: 'Arjit Singh', image: 'tkclh.png', audio: "Full Song Tujhe Kitna Chahne Lage  Kabir Singh  Mithoon Feat. Arijit Singh  Shahid K, Kiara A - T-Series.mp3" },
  { title: 'Tum Hi Ho', artist: 'Arjit Singh', image: 'ashiqui.png', audio: "Tum Hi Ho Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor - T-Series.mp3" },
  { title: 'Starboy', artist: 'The Weekend', image: 'starboy.png', audio: "The Weeknd - Starboy ft. Daft Punk (Official Video).mp3" },
  { title: 'Cry For Me', artist: 'The Weekend', image: 'cfm.png', audio: "The Weeknd - Cry For Me.mp3" },
  { title: 'Blinding Lights', artist: 'The Weekend', image: 'bl.png', audio: "The Weeknd - Blinding Lights (Official Video)mp3" },
  { title: 'JENNIE', artist: 'The Weekend', image: 'jennie.png', audio: "The Weeknd, JENNIE, Lily-Rose Depp - One Of The Girls (Official Video).mp3" },
  { title: 'Play Boi', artist: 'The Weekend', image: 'timeless.png', audio: "The Weeknd, Playboi Carti - Timeless (Lyrics).mp3" },
  { title: 'Chatur Naar', artist: 'Kishore Kumar', image: 'cn.png', audio: "Ek Chatur Naar Badi Hoshiyaar - Kishore Kumar & Manna Dey's Superhit Song - R D Burman Songs.mp3" },
  { title: 'Ek Ajnabee Haseena Se', artist: 'Kishore Kumar', image: 'ah.png', audio: "Ek Ajnabee Haseena Se with lyrics  एक अजनब हसन स गन  Ajnabee  Rajesh Khanna  Zeenat.mp3" },
  { title: 'Mere Sapno Ki Rani', artist: 'Kishore Kumar', image: 'mskrkat.png', audio: "Mere Sapno Ki Rani 4K Song _ मर सपन क रन  आरधन  रजश खनन - शरमल टगर - कशर कमर.mp3" },
  { title: 'Pal Pal Dil Ke Pass', artist: 'Kishore Kumar', image: 'ppdkp.png', audio: "Blackmail - Pal Pal Dil Ke Paas Tum Rehti Ho - Kishore Kumar - Shemaroo.mp3" },
  { title: 'Ye Shaam Mastani', artist: 'Kishore Kumar', image: 'ysm.png', audio: "Yeh Shaam Mastani (Lyrics) - Kishore Kumar  Rajesh Khanna  Kati Patang.mp3" },
  { title: 'Dekha Ek Khwab', artist: 'Kishore Kumar', image: 'dek.png', audio: "Dekha Ek Khwab Song  Silsila  Amitabh Bachchan, Rekha  Kishore Kumar, Lata Mangeshkar, Shiv-Hari.mp3" },
  { title: 'Millionare', artist: 'Yo Yo Honey Singh', image: 'millionaire.png', audio: "MILLIONAIRE SONG (Full Video)_ @YoYoHoneySingh   GLORY  BHUSHAN KUMAR.mp3" },
 { title: 'Love Does', artist: 'Yo Yo Honey Singh', image: 'weeknd.png', audio: "Love Does (Official Video) Yo Yo Honey Singh, Urvashi Rautela  Latest Hindi Songs 2025.mp3" },
 { title: 'Laal Pari', artist: 'Yo Yo Honey Singh', image: 'lp.png', audio: "LAAL PARI (Song)_ Yo Yo Honey Singh  Sajid Nadiadwala  Tarun Mansukhani  Housefull 5 - 6th June.mp3" },
 { title: 'High Heels', artist: 'Yo Yo Honey Singh', image: 'hh.png', audio: "HIGH HEELS TE NACHCHE Video Song  KI & KA  Meet Bros ft. Jaz Dhami  Yo Yo Honey Singh  T-Series.mp3" },
 { title: 'Char Botal Vodka', artist: 'Yo Yo Honey Singh', image: 'cb.png', audio: "Chaar Botal Vodka Full Song Feat. Yo Yo Honey Singh, Sunny Leone  Ragini MMS 2.mp3" },
 { title: 'Desi Kalakaar', artist: 'Yo Yo Honey Singh', image: 'dk.png', audio: "LYRICAL_ Desi Kalakaar Full Song with LYRICS  Yo Yo Honey Singh  Sonakshi Sinha.mp3 " },
 { title: 'O Rangrez', artist: 'Shreya Ghoshal', image: 'or.png', audio: "O Rangrez - Lyrcial Video  Bhaag Milkha Bhaag  Farhan, Sonam  Shreya Ghoshal, Javed Bashir.mp3 " },
{ title: 'Bahara', artist: 'Shreya Ghoshal', image: 'bahara.png', audio: "Bahara Full Video - I Hate Luv Storys  Sonam Kapoor, Imran  Shreya Ghoshal, Sona Mohapatra.mp3 " },
{ title: 'Teri Ore', artist: 'Shreya Ghoshal', image: 'to.png', audio: "Teri Ore  Singh Is Kinng  Akshay Kumar Katrina Kaif Pritam Rahat Fateh Ali Khan Shreya Ghoshal.mp3"},
{ title: 'Chikni Chameli', artist: 'Shreya Ghoshal', image: 'cc.png', audio: "Chikni Chameli - 8K4k Music Video  Katrina Kaif, Hrithik  Agneepath  Shreya Ghoshal  Ajay-Atul.mp3"},
{ title: 'Saathiya', artist: 'Shreya Ghoshal', image: 'saathiya.png', audio: "Lyrical Video_ Saathiya  Singham  Ajay Devgan, Kajal Aggarwal.mp3"},
{ title: 'Ve Kamleya', artist: 'Shreya Ghoshal', image: 'vkpng', audio: "Ve Kamleya  Rocky Aur Rani Kii Prem Kahaani  Ranveer  Alia  Pritam  Amitabh  Arijit  Shreya.mp3 "},
{ title: 'Husn', artist: 'Anuv Jain', image: 'husn.png', audio: "Anuv Jain - HUSN (Official Video).mp3"},
{ title: 'Gul', artist: 'Anuv Jain', image: 'gul.png', audio: "Anuv Jain - GUL (Studio).mp3"},
{ title: 'Baarishein', artist: 'Anuv Jain', image: 'baarishein.png', audio: "BAARISHEIN (Studio) Anuv Jain - Anuv Jain.mp3"},
{ title: 'Jo tum Mere ho', artist: 'Anuv Jain', image: 'jtmh.png', audio: "Anuv Jain - JO TUM MERE HO (Lyrics).mp3"},
{ title: 'Alag Aasmaan', artist: 'Anuv Jain', image: 'aa.png', audio: "Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3"},
{ title: 'Iraaday', artist: 'Anuv Jain', image: 'iraaday.png', audio: "Abdul Hannan & Rovalio - Iraaday (Official Music Video).mp3"},
{ title: 'Gandi Baat', artist: 'Mika Singh', image: 'gb.png', audio: "Gandi Baat  Full Video Song  R...Rajkumar  Pritam.mp3"},
{ title: 'Sexy Baliye', artist: 'Mika Singh', image: 'sb.png', audio: "Sexy Baliye  Aamir Khan  Zaira Wasim  Amit Trivedi  Mika Singh  Kausar  Lyrical.mp3"},
{ title: 'Aapka kya hoga', artist: 'Mika Singh', image: 'akh.png', audio: "Aapka Kya Hoga Janabe Ali (Dhanno) Housefull Full Song  Akshay Kumar  Mika Singh.mp3"},
{ title: 'Chinta Ta Ta Chita Chita', artist: 'Mika Singh', image: 'ctt.png', audio: "Chinta Ta Ta Chita Chita Full Video - Rowdy RathoreAkshay,KareenaMika SinghSajid Wajid.mp3"},
{ title: 'Dhinka Chika', artist: 'Mika Singh', image: 'dc.png', audio: "Dhinka Chika Full Video Song  Ready Feat. Salman Khan, Asin.mp3"},
{ title: 'Mauja hi Mauja', artist: 'Mika Singh', image: 'jwm.png', audio: "Full Video_ Mauja Hi Mauja  Jab We Met  Shahid kapoor, Kareena Kapoor  Mika Singh   Pritam.mp3"},
{ title: 'Duma Dum Mast Kalandar', artist: 'Mika Singh', image: 'ddmk.png', audio: "Top Punjabi Hits Songs of Mika  Duma Dum Mast Kalandar  Best of Mika Singh  Yo Yo Honey Singh.mp3"},
{ title: 'Pyar Ki Pungi', artist: 'Mika Singh', image: 'pkp.png', audio: "Agent Vinod Pyar Ki Pungi Full Video Song (HD)  Saif Ali Khan  Pritam.mp3"},
{ title: 'Subah Hone Na De', artist: 'Mika Singh', image: 'shnd.png', audio: "Subha Hone Na De Full Song Desi Boyz  Akshay Kumar ,John Abraham  Pritam   Mika Singh, Kumaar.mp3"},
{ title: 'August', artist: 'Taylor Swift', image: 'august.png', audio: "Taylor Swift  august (Official Lyric Video).mp3"},
{ title: 'Cruel Summer', artist: 'Taylor Swift', image: 'cs.png', audio: "Taylor Swift - Cruel Summer (Official Audio).mp3"},
{ title: 'Daylight', artist: 'Taylor Swift', image: 'daylight.png', audio: "Taylor Swift - Daylight (Official Audio).mp3"},
{ title: 'Fearless', artist: 'Taylor Swift', image: 'fearless.png', audio: "Taylor Swift - Fearless (Taylor's Version) (Lyric Video).mp3"},
{ title: 'You belong with me', artist: 'Taylor Swift', image: 'ybwm.png', audio: "Taylor Swift - You Belong With Me.mp3"},
{ title: 'Sunn Raha hai Na', artist: 'Aashiqui 2 ', image: 'ashiqui.png', audio: "Sunn Raha Hai Na Tu Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor - T-Series.mp3"},
{ title: 'Tum Hi Ho', artist: 'Aashiqui 2 ', image: 'ashiqui.png', audio: "Tum Hi Ho Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor - T-Series.mp3"},
{ title: 'Chahun Main Yana', artist: 'Aashiqui 2 ', image: 'ashiqui.png', audio: "Chahun Main Ya Naa Full Video Song Aashiqui 2  Aditya Roy Kapur, Shraddha Kapoor - T-Series.mp3"},
{ title: 'Selfie Le Le Re', artist: 'Bajrangi Bhaijaan ', image: 'bajrangi.png', audio: "Selfie Le Le Re FULL VIDEO Song Pritam - Salman Khan  Bajrangi Bhaijaan  T-Series - T-Series.mp3"},
{ title: 'Bhar Do Jholi', artist: 'Bajrangi Bhaijaan ', image: 'bajrangi.png', audio: "Bhar Do Jholi Meri FULL VIDEO Song - Adnan Sami  Bajrangi Bhaijaan  Salman Khan Pritam - T-Series.mp3"},
{ title: 'Tu jo Mila', artist: 'Bajrangi Bhaijaan ', image: 'bajrangi.png', audio: "Tu Jo Mila VIDEO Song - K.K. Pritam  Salman Khan, Nawazuddin, Harshaali  Bajrangi Bhaijaan - T-Series.mp3"},
{ title: 'Tu Chaihye', artist: 'Bajrangi Bhaijaan ', image: 'bajrangi.png', audio: "Tu Chahiye FULL VIDEO Song - Atif Aslam Pritam  Bajrangi Bhaijaan  Salman Khan, Kareena Kapoor - T-Series.mp3"},
{ title: 'Choo Lo', artist: 'The Local Train ', image: 'local.png', audio: "The Local Train - Aalas Ka Pedh - Choo Lo (Official Audio) - The Local Train.mp3"},
{ title: 'Aaoge Tum Kabhi', artist: 'The Local Train ', image: 'local.png', audio: "The Local Train - Aaoge Tum Kabhi (Official) - The Local Train.mp3"},
{ title: 'Kabira', artist: 'Yeh Jawaani Hai Diwani ', image: 'yjhd.png', audio: "Kabira Full Song Yeh Jawaani Hai Deewani  Pritam  Ranbir Kapoor, Deepika Padukone - T-Series.mp3"},
{ title: 'Ilahi', artist: 'Yeh Jawaani Hai Diwani ', image: 'yjhd.png', audio: "Ilahi Full Video Song  Yeh Jawaani Hai Deewani  Ranbir Kapoor, Deepika Padukone  Pritam - T-Series.mp3"},
{ title: 'Ghagra', artist: 'Yeh Jawaani Hai Diwani ', image: 'yjhd.png', audio: "Ghagra Full Video Song  Yeh Jawaani Hai Deewani  Pritam  Madhuri Dixit, Ranbir Kapoor - T-Series.mp3"},
{ title: 'Dilliwali Girlfriend', artist: 'Yeh Jawaani Hai Diwani ', image: 'yjhd.png', audio: "Dilliwali Girlfriend Full Song Yeh Jawaani Hai Deewani  Ranbir Kapoor, Deepika Padukone  Pritam - T-Series.mp3"},
{ title: 'Badtameez Dil', artist: 'Yeh Jawaani Hai Diwani ', image: 'yjhd.png', audio: "BadtameezDil.mp3"},
{ title: 'Balam Pichkari', artist: 'Yeh Jawaani Hai Diwani ', image: 'yjhd.png', audio: "Balam Pichkari Full Song Video Yeh Jawaani Hai Deewani  PRITAM  Ranbir Kapoor, Deepika Padukone - T-Series.mp3"},
{ title: 'Deja Vu', artist: 'Guts', image: 'oliviaR.png', audio: "Olivia Rodrigo - deja vu (Official Video) - OliviaRodrigoVEVO.mp3"},
{ title: 'Traitor', artist: 'Guts', image: 'oliviaR.png', audio: "Olivia Rodrigo - traitor (Official Video) - OliviaRodrigoVEVO.mp3"},
{ title: 'Vampire', artist: 'Guts', image: 'oliviaR.png', audio: "Olivia Rodrigo - vampire - LatinHype.mp3"},
{ title: 'Raanjhan', artist: 'Raanjhan', image: 'raanjhan.png', audio: "Full Video Raanjhan  Do Patti  Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara - T-Series.mp3"},
{ title: 'Kaise Hua ', artist: 'Kabir Singh', image: 'kabirsingh.png', audio: "Kabir Singh  Kaise Hua Song  Shahid K, Kiara A, Sandeep V  Vishal Mishra, Manoj Muntashir - T-Series.mp3"},
{ title: 'Bekhayali', artist: 'Kabir Singh', image: 'kabirsingh.png', audio: "Bekhayali Full Song  Kabir Singh  Shahid K,Kiara ASandeep Reddy Vanga  Sachet-Parampara  Irshad - T-Series.mp3"},
{ title: 'Tujhe Kitna Chahane Laga', artist: 'Kabir Singh', image: 'kabirsingh.png', audio: "Full Song Tujhe Kitna Chahne Lage  Kabir Singh  Mithoon Feat. Arijit Singh  Shahid K, Kiara A - T-Series.mp3"},
{ title: 'Mere Sohneya', artist: 'Kabir Singh', image: 'kabirsingh.png', audio: "Full Song Mere Sohneya  Kabir Singh  Shahid K, Kiara A, Sandeep V  Sachet - Parampara  Irshad K - T-Series.mp3"},
{ title: 'Bewajah', artist: 'Sanam Teri Kasam', image: 'kabirsingh.png', audio: "Bewajah, Lyrical Video - Sanam Teri Kasam  Harshvardhan, Mawra  Himesh Reshammiya - SonyMusicIndiaVEVO.mp3"},
{ title: 'Haal-E-Dil', artist: 'Sanam Teri Kasam', image: 'stk.png', audio: "Haal-E-Dil, Lyrical Video - Neeti Mohan  Sanam Teri Kasam  Harshvardhan  Himesh Reshammiya - SonyMusicIndiaVEVO.mp3"},
{ title: 'Sanam Teri Kasam', artist: 'Sanam Teri Kasam', image: 'stk.png', audio: "Sanam Teri Kasam, (Lyrical Video) - Harshvardhan, Mawra  Ankit Tiwari  Palak M  Himesh Reshammiya - SonyMusicIndiaVEVO.mp3', artist: 'Sanam Teri Kasam"},
{ title: 'Do Khatole',artist: 'Masoom Sharma', image: '2k.png', audio: "2 Khatole  MASOOM SHARMA  Manjeet Mor, Chahal Saab, Vikash Rajana  New Haryanvi Song 2024 - Tuffan Music.mp3"},
{ title: 'Chambal Ke Daaku',artist: 'Masoom Sharma', image: 'ckd.png', audio: "Chambal K Dakku  Masoom Sharma  Swara Verma  Rahul Muana  Ruba Khan  New Haryanvi Song 2024 - Bajewala Records Haryanvi.mp3"},
{ title: 'Lofar',artist: 'Masoom Sharma', image: 'lofar.png', audio: "Lofar Masoom Sharma (Official Video) Swara verma  Pinna Music  New Haryanvi Song Haryanvi 2025 - Shikaari Music.mp3"},
{ title: '52 Bars',artist: 'Punjab Radio', image: '52bars.png', audio: "52 Bars  (Official Video) Karan Aujla  Ikky  Four You EP  First Song  Latest Punjabi Songs 2023 - Karan Aujla.mp3"},
{ title: 'Admirin You',artist: 'Punjab Radio', image: 'ay.png', audio: "Admirin' You (Official Video) Karan Aujla  Ikky  Making Memories  Latest Punjabi Songs 2023 - Karan Aujla.mp3"},
{ title: 'Old Money',artist: 'Punjab Radio', image: 'om.png', audio: "AP Dhillon - Old Money (Official Audio) - APDHILLON.mp3"},
{ title: 'Excuses',artist: 'Punjab Radio', image: 'excuses.png', audio: "Excuses (Official Video)  AP Dhillon  Gurinder Gill  Intense - Intense.mp3"},
{ title: 'Bandana',artist: 'Punjab Radio', image: 'bandana.png', audio: "Shubh - Bandana (Official Music Video) - SHUBH.mp3"},
{ title: 'Cheques',artist: 'Punjab Radio', image: 'cheques.png', audio: "Shubh - Cheques (Official Music Video) - SHUBH.mp3"},
{ title: 'Wavy',artist: 'Punjab Radio', image: 'wavy.png', audio: "WAVY (OFFICIAL VIDEO) KARAN AUJLA  LATEST PUNJABI SONGS 2024 - Karan Aujla (1).mp3"},
{ title: 'Winning Speech',artist: 'Punjab Radio', image: 'ws.png', audio: "Winning Speech Karan Aujla (Official Video) Karan Aujla New Song  New Punjabi Song 2024 - Town Media.mp3"},
{ title: 'With You',artist: 'Punjab Radio', image: 'wy.png', audio: "With You - AP Dhillon (Official Music Video) - APDHILLON.mp3"},


];

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  searchResultsContainer.innerHTML = '';

  if (!query) {
    searchResultsContainer.style.display = 'none';
    return;
  }

  const results = hiddenSongs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchResultsContainer.innerHTML = '<p style="color:white;">No results found.</p>';
  } else {
    results.forEach(song => {
      const card = document.createElement('div');
      card.classList.add('song-card');
      card.innerHTML = `
        <img src="${song.image}" alt="${song.title}">
        <h4>${song.title}</h4>
        <p>${song.artist}</p>
        <form action="player.html" method="GET">
          <input type="hidden" name="title" value="${song.title}">
          <input type="hidden" name="artist" value="${song.artist}">
          <input type="hidden" name="image" value="${song.image}">
          <input type="hidden" name="audio" value="${encodeURIComponent(song.audio)}">
          <button type="submit" class="play-btn">
            <i class="fa-sharp fa-solid fa-play"></i>
          </button>
        </form>
        <audio src="songs/${encodeURIComponent(song.audio)}" preload="none" id="${song.title.replace(/\s+/g, '_')}"></audio>
      `;

      card.querySelector('.play-btn').addEventListener('click', (e) => {
        // e.preventDefault();
        const audio = card.querySelector('audio');

        document.querySelectorAll('audio').forEach(a => {
          if (a !== audio) {
            a.pause();
            a.currentTime = 0;
          }
        });

        const icon = card.querySelector('.play-btn i');
        const isPlaying = !audio.paused;

        document.querySelectorAll('.play-btn i').forEach(btn => {
          btn.classList.remove('fa-pause');
          btn.classList.add('fa-play');
        });

        if (!isPlaying) {
          audio.play();
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
        } else {
          audio.pause();
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
        }
      });

      searchResultsContainer.appendChild(card);
    });
  }

  searchResultsContainer.style.display = 'flex';
});
