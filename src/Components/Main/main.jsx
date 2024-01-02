import React, {useEffect} from "react";
import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
//import the image to avoid error on the browser
import img from '../Assets/img (1).jpg'
import img2 from '../Assets/img (2).jpeg'
import img3 from '../Assets/img (3).jpeg'
import img4 from '../Assets/img (4).jpeg'
import img5 from '../Assets/img (5).jpeg'
import img6 from '../Assets/img (6).webp'
import img7 from '../Assets/img (7).webp'
import img8 from '../Assets/img (8).jpeg'
import img9 from '../Assets/img (9).webp'
import img10 from '../Assets/img (10).jpeg'


import Aos from 'aos';              //npm i aos --save
import 'aos/dist/aos.css';



//Paste the array here
const Data = [
{
id: 1,
imgSrc: img,
destTitle: "Paris",
location: "France",
grade: "Travel comfortably",
fees: "$920",
description: "The City of Light draws millions of visitors every year with its unforgettable ambiance. The divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture, further enhanced by cascading trees and glowing streetlamps. Peppering the Seine's cobbled walks and graceful bridges are impossibly chic Parisians, probably on their way to the market, cafe or cinema."
},
{
id: 2,
imgSrc: img2,
destTitle: "Bora Bora",
location: "French Polynesian",
grade: "Travel comfortably",
fees: "$870",
description: "The island is famous for its stunning natural beauty, featuring lush greenery, tropical flowers, and the iconic Mount Otemanu. Visitors can enjoy panoramic views from various viewpoints and take in the picturesque landscapes. Bora Bora is often considered a dream destination for honeymooners and couples seeking a romantic escape. The serene atmosphere, luxurious accommodations, and idyllic surroundings create a perfect setting for a romantic getaway. The warm, shallow waters of Bora Bora are ideal for a variety of water activities. Visitors can engage in snorkeling, scuba diving, kayaking, and boat tours. The vibrant marine life and coral gardens make these activities particularly memorable. While enjoying the natural beauty, visitors can also immerse themselves in Polynesian culture. This includes traditional dance performances, local cuisine, and the opportunity to interact with the friendly locals. The laid-back atmosphere of Bora Bora provides a peaceful and relaxing environment. Visitors can unwind on pristine beaches, indulge in spa treatments, and enjoy the tranquility of the island. The sunsets in Bora Bora are legendary, the combination of vibrant colors reflecting off the lagoon and the silhouette of Mount Otemanu creates a breathtaking and unforgettable spectacle."
},
{
id: 3,
imgSrc: img3,
destTitle: "Rome",
location: "Italy",
grade: "Travel comfortably",
fees: "$900",
description: "The rich history spanning over two and a half millennia, It was the heart of the Roman Empire, and its historical sites, such as the Colosseum, Roman Forum, and Pantheon, provide a glimpse into ancient civilizations. Rome has been a center for art and culture throughout history. The Vatican Museums house an extensive collection of art, including Michelangelo's Sistine Chapel ceiling. The city's churches, museums, and galleries showcase a wealth of artistic treasures. Italian cuisine is renowned worldwide, and Rome is no exception. Visitors can indulge in authentic pasta, pizza, gelato, and other delicious dishes. The city's vibrant food culture adds to the overall experience. Rome's cobblestone streets, historic fountains, and charming squares create a romantic ambiance. Sunset views from key vantage points, such as the Pincio Terrace overlooking Piazza del Popolo, add to the city's allure."
},
{
id: 4,
imgSrc: img4,
destTitle: "Swiss Alps",
location: "Switzerland",
grade: "Travel comfortably",
fees: "$800",
description: "The region is a haven for outdoor enthusiasts. Visitors can enjoy activities such as skiing, snowboarding, hiking, mountain biking, paragliding, and more. The Alps provide a playground for both winter and summer sports. The Swiss Alps are renowned for their world-class ski resorts. Places like Zermatt, Verbier, and St. Moritz offer excellent skiing and snowboarding opportunities, along with luxurious accommodations and après-ski activities. The Swiss Alps offer a unique cultural experience with traditional mountain villages, charming chalets, and a rich Alpine heritage. Visitors can explore local customs, cuisine, and festivals. Many Swiss Alps resorts provide wellness and spa facilities, offering a perfect blend of outdoor adventure and relaxation. After a day of activities, visitors can unwind with panoramic views and soothing treatments. The region offers a chance to indulge in delicious Swiss cuisine. Alpine specialties such as fondue and raclette can be enjoyed in picturesque mountain restaurants."
},
{
id: 5,
imgSrc: img5,
destTitle: "Maldives",
location: "Republic of Maldives",
grade: "Travel comfortably",
fees: "$840",
description: "The island nation of the Maldives is popular with honeymooners looking for seclusion and adventurers looking to explore the depths of the sea on a scuba diving and snorkeling excursion. Travelers seeking relaxation can unwind at one of the island spas and all visitors should certainly spend a day exploring the Maldivian capital of Malé. The hotels in this region are also spectacular, ranging from underwater hotels to overwater bungalows to incredibly beautiful resorts. However, getting to and staying in this tropical paradise requires patience (there are no direct flights from the United States) and plentiful cash. Located between the Arabian and Laccadive seas, roughly 500 miles southwest of Sri Lanka, the Maldives is about as isolated as you can get – and that's just another one of its many allures."
},
{
id: 6,
imgSrc: img6,
destTitle: "Turks & Caicos",
location: "Dominican Republic",
grade: "Travel comfortably",
fees: "$800",
description: "The Turks & Caicos Islands have the perfect antidote for your hectic lifestyle: nearly abandoned, blindingly white sand fringed by shimmering azure water, colorful coral reefs, crispy conch fritters and a sleepy, lighthearted atmosphere. While the destructive hurricanes of 2017 did impact the island, much of the damage has been repaired and its beaches are still as stunning as ever. Turks & Caicos holds tight to its reputation as an exclusive and secluded getaway. And regular vacationers to these skinny strips of alabaster sand will tell you that they wouldn't have it any other way. This network of roughly 100 islands and cays has three dominant personalities. There's glamorous Providenciales, or \"Provo\" which shelters a bevy of luxurious hotels. Laid-back Grand Turk is the historic and cultural nucleus (and cruise ship hub), best seen in the Turks & Caicos National Museum or along the shores of Cockburn Town, where Christopher Columbus first docked in the Western Hemisphere. Tiny, flat Salt Cay plays host to the best dives: From here, you can explore one of the largest reef systems in the world."
},
{
id: 7,
imgSrc: img7,
destTitle: "Tokyo",
location: "Japan",
grade: "Travel comfortably",
fees: "$780",
description: "Tokyo is a hub of Japanese culture, featuring traditional tea ceremonies, historic temples and shrines, and cultural festivals. You can experience the juxtaposition of ancient traditions alongside cutting-edge technology. From street food to Michelin-starred restaurants, you can savor a wide range of Japanese cuisine, including sushi, ramen, tempura, and more. The city is also known for its diverse international dining scene. Tokyo is a shopping haven with districts like Shibuya, Harajuku, and Ginza offering everything from luxury brands to quirky fashion boutiques and unique specialty stores. Don't forget the famous department stores and electronic shops. Tokyo's nightlife is diverse, ranging from traditional izakayas to trendy nightclubs. The city also boasts vibrant entertainment districts like Roppongi and Shinjuku, where you can find bars, theaters, and live music venues. Each neighborhood in Tokyo has its own personality and charm. Whether you're exploring the historic Asakusa, the fashion-forward Harajuku, or the upscale Roppongi Hills, each area offers a different experience. Japanese hospitality, known as \"omotenashi\" is renowned worldwide. Tokyo is also considered one of the safest major cities, making it a welcoming destination for solo travelers and families alike."
},
{
id: 8,
imgSrc: img8,
destTitle: "Phuket",
location: "Thailand",
grade: "Travel comfortably",
fees: "$750",
description: "Phuket Town offers a glimpse into the island's history with its well-preserved colonial architecture, vibrant street art, and cultural attractions. The Old Town is a charming area to explore with its unique blend of Thai and European influences. Phuket is renowned for its stunning beaches with soft white sands and crystal-clear waters. Patong Beach, Kata Beach, Karon Beach, and many others offer picturesque settings for sunbathing, water activities, and relaxation.  Phuket serves as a convenient gateway for exploring other nearby islands. Day trips or longer excursions can take you to the Phi Phi Islands, James Bond Island, and other picturesque spots. Phuket offers a diverse culinary scene with a plethora of restaurants serving authentic Thai cuisine, seafood, and international dishes. Street food markets provide an opportunity to savor local flavors. Beyond its beaches, Phuket is home to natural attractions like the Big Buddha, the Phang Nga Bay, and various viewpoints that provide breathtaking panoramas of the island and its surroundings."
},
{
id: 9,
imgSrc: img9,
destTitle: "Costa Rica",
location: "Republic of Costa Rica",
grade: "Travel comfortably",
fees: "$900",
description: "Immersing oneself in Costa Rican culture provides a unique experience. The country celebrates various festivals, and the cuisine is a blend of indigenous, Spanish, and Afro-Caribbean influences. Costa Rica is known for its stunning landscapes, including lush rainforests, pristine beaches, active volcanoes, and diverse wildlife. The country is a haven for nature lovers and offers numerous opportunities for eco-tourism and outdoor activities. The country offers activities such as zip-lining through the rainforest, white-water rafting, surfing, hiking, and exploring national parks. Costa Rica is a leader in sustainable tourism and has a strong commitment to environmental conservation. Visitors can explore eco-friendly accommodations, wildlife reserves, and protected areas. The \"Pura Vida\" lifestyle is a cultural mantra in Costa Rica, emphasizing a simple and pure way of living. The people are known for their friendliness and welcoming attitude, contributing to a laid-back and stress-free atmosphere. The country is known for its focus on health and wellness. Visitors can enjoy yoga retreats, spa experiences, and access to fresh, locally sourced foods."
},
{
id: 10,
imgSrc: img10,
destTitle: "Amsterdam",
location: "Netherlands",
grade: "Travel comfortably",
fees: "$950",
description: "Amsterdam is rich in history and cultural heritage. Visitors can explore iconic landmarks such as the Anne Frank House, the Van Gogh Museum, and the Rijksmuseum, which houses an extensive collection of Dutch art. The city is famous for its picturesque canals and unique architecture. Walking or taking a boat tour along the canals allows visitors to appreciate the charming buildings, historic bridges, and houseboats that define Amsterdam's cityscape. The \"Bike Capital of the World.\" The city is extremely bike-friendly, and many locals and tourists alike prefer exploring the city by bicycle. Renting a bike provides a unique and efficient way to discover Amsterdam.mIf visiting during spring, tourists can experience the famous Dutch tulip season. The Keukenhof Gardens, located just outside Amsterdam, showcase breathtaking displays of tulips and other flowers.  Amsterdam is known for its unique approach to cannabis regulations. While cannabis is not legal, it is tolerated in designated \"coffeeshops.\" Additionally, the city is home to numerous cafés where visitors can enjoy coffee and Dutch pastries."
},
]


const Main = () => {
      //create react hook to add a scroll animation..
      useEffect(() => {
        Aos.init({durations: 2000})
    },[])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3  data-aos="fade-right"className="title">
                    Most visit destinations
                </h3>
            </div>

            <div className="secContent grid">
              {/* use map method to do that shall use a list of object in one array.
             create array name data. map() array to fetch each destination at once */}
              {Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return(
                    <div key={id} data-aos="fade-up" className="singleDestination">
                        {/* return single id from the map array */}
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h3 className="destTitle">{destTitle}</h3>
                            <span className="continent flex">
                            <HiOutlineLocationMarker className="icon"/>
                            <span className="name">{location}</span>
                        </span>

                        <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                        </div>

                        <div className="desc">
                            <p>{description}</p>
                        </div>

                        <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className="icon" />
                        </button>
                     </div>
                    </div>
                     )
                 })

              }
              
            </div>
        </section>
    )
}

export default Main


// const DestinationCard = ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
  
//     const toggleExpand = () => {
//       setIsExpanded(!isExpanded);
//     };
  
//     return (
//       <div className={`singleDestination ${isExpanded ? 'expanded' : ''}`}>
//         {/* ... other content ... */}
  
//         <div className="desc description">
//           <p>{description}</p>
//         </div>
        
//         <button onClick={toggleExpand} className="expand">
//           Show More
//         </button>
//         <button onClick={toggleExpand} className="collapse">
//           Show Less
//         </button>
//       </div>
//     );
//   };