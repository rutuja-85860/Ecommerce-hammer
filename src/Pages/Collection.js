import React, { useEffect,useState } from 'react'

export default function Collection() {

        
        //   const [api,setApi]= useState([])
          const [searchQuery, setSearchQuery] = useState('');
          const [filteredData, setFilteredData] = useState([]);
    const data =

        [
            {
                "id": 1,
                "title": "Hammer Screen TWS",
                "price":" Rs. 1,499.00 ",
                "description": "ANC + ENC | Touch Screen",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/BestHammerScreenTWSEarbuds.webp?v=1713940395&width=1800",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            {
                "id": 2,
                "title": "Hammer Active 2.0  ",
                "price": "Rs. 1,999.00",
                "description": "2.1 Display | Gesture Control | BT Calling",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/HammerActive2.0Plusbluetoothcallingsmartwtach.webp?v=1702704266&width=900",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            },
            {
                "id": 3,
                "title": "Splendor Bluetooth",
                "price":"Rs. 599.00",
                "description": "Bluetooth Neckband",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/BluetoothNeckbands.webp?v=1712578539&width=900",
                "rating": {
                    "rate": 4.7,
                    "count": 500
                }
            },
            {
                "id": 4,
                "title": "Stellar",
                "price": "Rs. 1,399.00",
                "description": "ENC + Quad Mics",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/Best_Bluetooth_Earbuds_d98c3f89-ec1d-42fd-bbe1-4cf082abafd2.webp?v=1726897897&width=900",
                "rating": {
                    "rate": 2.1,
                    "count": 430
                }
            },
            {
                "id": 5,
                "title": "Cyclone",
                "price": "Rs. 4,999.00 ",
                "description": "1.39 Screen | BT Calling",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/HammerCycloneSmartwatchwithbluetoothcallingfeature.webp?v=1701149739&width=900",
                "rating": {
                    "rate": 4.6,
                    "count": 400
                }
            },
            {
                "id": 6,
                "title": " Aero max  ",
                "price": "Rs. 5,999.00",
                "description": "ANC + ENC | Upto 30 hrs playtime",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/HammerBestTWSEarbuds_9b2a199f-cdd1-41d2-9884-c0fa51110f3c.webp?v=1715673856&width=900",
                "rating": {
                    "rate": 3.9,
                    "count": 70
                }
            },
            {
                "id": 7,
                "title": "Luxor 1.45",
                "price":"Rs. 8,999.00",
                "description": "1.45 Amoled | BT Calling",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/HammerLuxorBluetoothCallingSmartwatch.webp?v=1694839498&width=900",
                "rating": {
                    "rate": 3,
                    "count": 400
                }
            },
            {
                "id": 8,
                "title": "Blaze",
                "price":"Rs. 8,999.00",
                "description": "50mm Drivers | RGB Lights",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/Best_Gaming_Headphones.webp?v=1726897555&width=900",
                "rating": {
                    "rate": 1.9,
                    "count": 100
                }
                
            },
            {
                "id": 9,
                "title": " Active 3.0",
                "price":" Rs. 5,999.00 ",
                "description": " 1.39 Display Bluetooth Calling Smart Watch",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/bluetoothwatch_e57327d6-7377-4ba7-b05b-734a33d44f48.webp?v=1701243515&width=1800",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            {
                "id": 10,
                "title":" Glide 1.43  ",
                "price": "Rs. 8,999.00",
                "description": "Amoled Round Dial Smart Watch With Bluetooth Calling",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/Hammerglidebluetoothcallingsmartwatch_1.webp?v=1694851875&width=1800",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            },
            {
                "id": 11,
                "title": " Solitude",
                "price":"Rs. 5,499.00",
                "description": "Bluetooth Earbuds with RGB Lights and 50ms Low latency",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/HammerSolitudeBluetoothEarbuds.webp?v=1700478512&width=1800",
                "rating": {
                    "rate": 4.7,
                    "count": 500
                }
            },
            {
                "id": 12,
                "title": "Arcade ",
                "price": "Rs. 5,499.00",
                "description": "Bluetooth Earbuds with RGB Lights and 50ms Low latency",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/Arcadetrulywirelessearphones.webp?v=1703742741&width=1800",
                "rating": {
                    "rate": 2.1,
                    "count": 430
                }
            },
            {
                "id": 13,
                "title": "G-Shots ",
                "price": "Rs. 4,999.00 ",
                "description": "Bluetooth v5.3 | Touch Control",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/2_3.webp?v=1692360860&width=1800",
                "rating": {
                    "rate": 4.6,
                    "count": 400
                }
            },
            {
                "id": 14,
                "title": "  Bash Pro  ",
                "price": "Rs. 11,999.00",
                "description": "ANC + ENC | Quad Mics",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/Hammer_Bluetooth_Headphones_329fa3fe-cb02-42fa-8d7d-dcf60a0704bd.webp?v=1725877338&width=1800",
                "rating": {
                    "rate": 3.9,
                    "count": 70
                }
            },
            {
                "id": 15,
                "title": "Bash Max",
                "price":"Rs. 8,245.00",
                "description": "Wireless | Bluetooth V5.3",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/HammerBluetoothHeadphones.webp?v=1695284815&width=1800",
                "rating": {
                    "rate": 3,
                    "count": 400
                }
            },
            {
                "id": 16,
                "title": "Ultra Flow",
                "price":"Rs. 2,499.00",
                "description": "31000 Strokes/Min | 6 Modes",
                "category": "Electric toothbrush",
                "image": "https://hammeronline.in/cdn/shop/files/ultraflowblue.webp?v=1694417566&width=1800",
                "rating": {
                    "rate": 1.9,
                    "count": 100
                }
                
            },
            {
                "id": 17,
                "title": "Flow 2.0",
                "price":" Rs. 1,999.00 ",
                "description": "Black Blue White Red 24000 Strokes/Min | 2 Modes",
                "category": "men's clothing",
                "image": "https://hammeronline.in/cdn/shop/files/fLOW-2.0-black.png?v=1694415683&width=1800",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            {
                "id": 18,
                "title": "BeatBox ",
                "price": "Rs. 5,999.00",
                "description": "24W Output | 8 Hours Playtime",
                "category": "speaker",
                "image": "https://hammeronline.in/cdn/shop/files/Bluetooth_Sound_Bar.webp?v=1726899226&width=1800",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            },
            {
                "id": 19,
                "title": "Groove",
                "price":"Rs. 4,999.00",
                "description": "5W Speaker | 100H StandBy",
                "category": "speaker",
                "image": "https://hammeronline.in/cdn/shop/products/axhjhfj.jpg?v=1641189474&width=1800",
                "rating": {
                    "rate": 4.7,
                    "count": 500
                }
            },
            {
                "id": 20,
                "title": "Ultra Charge",
                "price": "Rs. 2,199.00",
                "description": "UC Green 10000mAh | Fast Chargin",
                "category":"charger",
                "image": "https://hammeronline.in/cdn/shop/files/PortablePowerBank.webp?v=1710228893&width=1080",
                "rating": {
                    "rate": 2.1,
                    "count": 430
                }
            },
            {
                "id": 21,
                "title": "Flex charger",
                "price": "Rs. 2,499.00 ",
                "description": "Wireless Charging | 15W | Light Weigh",
                "category": "charger",
                "image": "https://hammeronline.in/cdn/shop/files/wirelesscharger.webp?v=1711103013&width=1080",
                "rating": {
                    "rate": 4.6,
                    "count": 400
                }
            },
            {
                "id": 22,
                "title": " Conquer ",
                "price": "Rs. 5,999.00",
                "description": "ANC + ENC | Upto 30 hrs playtime",
                "category": "watch",
                "image": "https://hammeronline.in/cdn/shop/files/HammerConquer.webp?v=1693564016&width=1080",
                "rating": {
                    "rate": 3.9,
                    "count": 70
                }
            },
            {
                "id": 23,
                "title": "Luxor 1.45",
                "price":"Rs. 8,999.00",
                "description": "1.45 Amoled | BT Calling",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/HammerLuxorBluetoothCallingSmartwatch.webp?v=1694839498&width=900",
                "rating": {
                    "rate": 3,
                    "count": 400
                }
            },
            {
                "id": 24,
                "title": "Blaze",
                "price":"Rs. 8,999.00",
                "description": "50mm Drivers | RGB Lights",
                "category": "jewelery",
                "image": "https://hammeronline.in/cdn/shop/files/Best_Gaming_Headphones.webp?v=1726897555&width=900",
                "rating": {
                    "rate": 1.9,
                    "count": 100
                }
                
            },

        ]
       
        
        
          const filterdata=(categories)=>{
        
            console.log(categories)
        
            if(categories=="All"){
              setFilteredData(data)
        
            }
            else{
             const newdata = data.filter((v)=>v.category==categories)
             setFilteredData(newdata)
            }
        
        
        
          };

          useEffect(() => {
            if (searchQuery === '') {
              setFilteredData(data); 
            } else {
              const filtered = data.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) 
              );
              setFilteredData(filtered);
            }
          }, []);
    return (
        <div>
            <div className='container'>
            <div className='container'>
          <div className=' d-flex justify-content-evenly mt-5 mb-5'>
            <div className='btn btn-primary' onClick={()=>filterdata("All")}  > All</div>
            <div className='btn btn-primary' onClick={()=>filterdata("electric toothbrush")}  >Electric toothbrush</div>
            <div className='btn btn-primary' onClick={()=>{filterdata("charger")}}  > Charger</div>
            <div className='btn btn-primary' onClick={()=>{filterdata("speaker")}}  >Speaker</div>
            <div className='btn btn-primary' onClick={()=>{filterdata("watch")}}  > Watch</div>
            <div className='btn btn-primary' onClick={()=>{filterdata("earbuds")}}  > Earbuds</div>
            <div className='btn btn-primary' onClick={()=>{filterdata("headphone")}}  > Headphone</div>

            <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
          </div>
        </div>

                <div className='row'>

                    {
                        filteredData.map(({ image, title, description, price }) => {
                            return (

                                <>
                                    <div className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mx-auto m-4 " style={{ width: '20vw',height:'73vh',backgroundColor:"whitesmoke",borderRadius:'20px' }}>
                                        <img src={image} style={{ height: "300px",borderRadius:'20px' }} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{backgroundColor:"white", borderRadius:'10px',height:'20vh'}}>
                                            <h5 className="card-title" style={{fontSize:'26px',textAlign:"center"}}>{title}</h5>
                                            <p className="card-text" style={{fontSize:'20px'}}>{description.substr(0, 60)}</p>
                                            <p className="card-text" style={{fontSize:'25px',}}>{price}</p>
                                            <button style={{backgroundColor:"orange",fontSize:'20px',width:'15vw',height:"5vh",border:'none',borderRadius:'20px',textAlign:"center",alignItems:"center",}}>BUY IT NOW</button>
                                        </div>
                                    </div>

                                </>

                            )
                        })


                    }
                </div>
            </div>
        </div>
    )
}


