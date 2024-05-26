import { Link } from "react-router-dom"





export const LandingPageComponent = ()=> {
  return (

    <div className="bg-gray-100 relative">
      <div className="py-12 lg:py-16">
        <div className="container px-4 grid gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Study Abroad and Expand Your Horizons</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Immerse yourself in new cultures, gain international experience, and make lifelong connections.
              </p>
              
            </div>
            <div className="flex justify-end">

              



              
              <Link to={"/contact"}
                className="text-gray-900 dark:text-gray-100 hover:scale-105 transform transition-transform duration-300"
                href="/contact"
              >
                Contact
              </Link>
            </div>


            <div>
              <Link className="btn btn-primary btn-lg inline-block rounded-full" href="#">
                Explore Programs
              </Link>
            </div>
          </div>



          <img
            alt="Hero"
            className="mx-auto aspect-[4/1] overflow-hidden rounded-xl object-[cover] border"
           
            src="/MainLogo.jpg"
            // width="1240" height="900"

            width= "auto" height="auto" max-width= "100%"    max-height="100%"    object-fit="contain"
          />
        </div>
      </div>
      <div className="py-12 lg:py-16">
        <div className="container px-4 grid gap-8 lg:gap-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Air Tickets and Hotel Booking</h2>
              <p className="text-gray-600 dark:text-gray-400">
              Me trust offers exclusive flight ticket services and hotel packages to all such people who are aspiring to move abroad. You need not to wander here and there in search of cheap air tickets to your dream destination. Once you attain your visa, you can book your ticket anytime with Me Trust consultancy and book a room in luxurious hotel within your pocket. We also offer these both services to the people travelling within India. Besides providing the prime air ticket servicing, we also cater you with other travelling assistance. We book your air tickets, hotels and also arrange car on your behalf to make your journey hassle free. Get proper guidance for all the documents you need to carry while travelling.
              Me trust try to provide you the tickets and an accommodation at the minimal cost. Travel with the top class airlines at the cheapest price and enjoy living in deluxe room. We offer huge discounts on international tickets and offer numerous hotel packages. Cheap tickets and affordable staying make your overall journey reasonable.
              </p>
              {/* <Link className="underline text-blue-600" href="#">
                Learn More
                <span className="sr-only">about the Barcelona Summer Experience</span>
              </Link> */}
            </div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden">
              <img
                alt="Barcelona Summer Experience"
                className="object-cover"
                height="270"
                src="/FinancialAssistance.jpg"
                style={{
                  aspectRatio: "480/270",
                  objectFit: "cover",
                }}
                width="480"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Financial Assistance</h2>
              <p className="text-gray-600 dark:text-gray-400">
              Whether you want to move abroad for travelling, for studies, for business or want to settle there, you need money at every pace. We understand you and provide you reliable financial assistance besides offering you other services. We understand that you may hesitate or drop your plan of travelling abroad just because of financial issue. So we come up with this solution, so that you need not to move here and there in search of financial aid. Once you make your plan of moving abroad or get your visa approved, you can visit us anytime for any financial assistance and accomplish your dreams.
              We provide you complete guidance on loans or other financial assistance in very easy and straight manner.
              </p>
              {/* <Link className="underline text-blue-600" href="#">
                Learn More
                <span className="sr-only">about the Kyoto Cultural Immersion</span>
              </Link> */}
            </div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden">
              <img
                alt="Kyoto Cultural Immersion"
                className="object-cover"
                height="270"
                src="/AirTicket2.png"
                style={{
                  aspectRatio: "480/270",
                  objectFit: "cover",
                }}
                width="480"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Passport Assistance</h2>
              <p className="text-gray-600 dark:text-gray-400">
No need to wait in long queues to apply for passport
Fill your passport application under expert guidance
We assist you in the whole process of passport application
We guide you thoroughly regarding all the documents to be attached
With proper assistance you will get your passport in few days
              </p>
              {/* <Link className="underline text-blue-600" href="#">
                Learn More
                <span className="sr-only">about the Paris Fashion Institute</span>
              </Link> */}
            </div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden">
              <img
                alt="Paris Fashion Institute"
                className="object-cover"
                height="270"
                src="/VisaAssistance1.avif"
                style={{
                  aspectRatio: "480/270",
                  objectFit: "cover",
                }}
                width="480"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="py-12 lg:py-16 text-center">
          <div className="container px-4 grid gap-4 lg:gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100">Hear from Our Students</h2>
            <div className="mx-auto grid lg:grid-cols-3 gap-4 lg:gap-6 items-start">
              <div className="flex flex-col gap-2">
                <img
                  alt="Student 1"
                  className="mx-auto rounded-full overflow-hidden object-cover border"
                  height="150"
                  src="/3.jpeg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <div className="space-y-1 text-sm text-gray-300">
                  <p>Emily Johnson</p>
                  <p>University of California, Berkeley</p>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "Studying abroad was an incredible experience. I learned so much about different cultures and made
                  friends from all over the world. It's something I'll cherish forever."
                </blockquote>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Student 2"
                  className="mx-auto rounded-full overflow-hidden object-cover border"
                  height="150"
                  src="2.jpeg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <div className="space-y-1 text-sm text-gray-300">
                  <p>Carlos Gomez</p>
                  <p>University of Madrid</p>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "Studying abroad in the United States was a dream come true. I improved my English, learned about
                  American culture, and met amazing people. It was an unforgettable experience."
                </blockquote>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Student 3"
                  className="mx-auto rounded-full overflow-hidden object-cover border"
                  height="150"
                  src="/1.jpeg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <div className="space-y-1 text-sm text-gray-300">
                  <p>Sophie Dubois</p>
                  <p>Sorbonne University</p>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "Studying abroad allowed me to see the world with new eyes. I discovered my passion for international
                  relations and made memories that will last a lifetime. It was an enriching and inspiring journey."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






