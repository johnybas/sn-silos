import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurBusinessUnits = () => {
  return (
    <section className='px-6 py-12 overflow-hidden bg-gradient-to-br to-transparent from-gray-50 lg:px-0 lg:py-24'>
      <div className='flex flex-col gap-2 text-left md:text-center'>
        <h2 className='text-4xl font-bold lg:text-5xl'>Our Business Units</h2>
      </div>
      {/* Soil Sense Unit */}
      <article className='mx-auto md:py-8 sm:grid sm:grid-cols-2 max-w-7xl sm:items-center'>
        <div className='py-8 lg:py-24'>
          <div className='max-w-xl mx-auto text-left'>
            <Image
              className='w-auto h-16'
              src='/images/logo/soilsense.png'
              alt='soilsense-logo'
              width={100}
              height={100}
            />
            <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-3xl'>
              Soil Sense
            </h2>

            <p className='mt-2 font-medium text-gray-700'>
              Major sustainability impact in agriculture farming
            </p>
            <p className='mt-4 text-gray-500 md:'>
              There is a concentrated effort to modernize the agriculture
              industry, and data-driven weather intelligence is the key to
              sustainability. Managing the decision-making processes of farming
              has always been complex because there are so many different
              limiting factors that aren’t within a farmer’s control. The
              weather itself being chief among them.
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                href='#!'
                className='inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <Image
          alt='Violin'
          src='https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
          width={100}
          unoptimized
          height={100}
          className='object-cover w-full h-full sm:self-end rounded-3xl'
        />
      </article>
      {/* Tech Land Unit */}
      <article className='mx-auto mt-16 sm:grid sm:grid-cols-2 sm:items-center max-w-7xl'>
        <div className='order-2 py-8 lg:py-24'>
          <div className='max-w-xl mx-auto text-left'>
            <Image
              className='w-auto h-16'
              src='/images/logo/techland.png'
              alt='techland-logo'
              width={100}
              height={100}
            />
            <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-3xl'>
              Tech Land
            </h2>

            <p className='mt-2 font-medium text-gray-700'>
              Costs and Energy savings for commercial properties
            </p>
            <p className='mt-4 text-gray-500 md:'>
              TechLand is a concentrated effort to modernize the land buying and
              selling industry, and data-driven intelligence is the key to
              sustainability. Managing the decision-making processes of
              real-estate has always been complex because there are so many
              different limiting factors that aren’t within a somone&apos;s
              control. The uncertainity itself being chief among them.
            </p>

            <div className='mt-4 md:mt-8'>
              <Link
                href='/about'
                className='inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt='Violin'
          src='https://images.unsplash.com/photo-1541636765-2682acc27f49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lJTIwZmFybWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
          width={100}
          unoptimized
          height={100}
          className='object-cover w-full h-full aspect-auto sm:self-end rounded-3xl'
        />
      </article>
      {/* Organic Chef Unit */}
      <article className='mx-auto mt-16 md:py-8 sm:grid sm:grid-cols-2 max-w-7xl sm:items-center'>
        <div className='py-8 lg:py-24'>
          <div className='max-w-xl mx-auto text-left'>
            <Image
              className='w-auto h-16'
              src='/images/logo/organicchef.png'
              alt='organic-chef-logo'
              width={100}
              height={100}
            />
            <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-3xl'>
              Organic Chef
            </h2>

            <p className='mt-2 font-medium text-gray-700'>
              Major sustainability impact in agriculture farming
            </p>
            <p className='mt-4 text-gray-500 md:'>
              There is a concentrated effort to modernize the agriculture
              industry, and data-driven weather intelligence is the key to
              sustainability. Managing the decision-making processes of farming
              has always been complex because there are so many different
              limiting factors that aren’t within a farmer’s control. The
              weather itself being chief among them.
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                href='#!'
                className='inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <Image
          alt='Organic Chef'
          src='https://images.unsplash.com/photo-1591586116988-62fe65164f8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2dpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
          width={100}
          unoptimized
          height={100}
          className='object-cover w-full h-full sm:self-end rounded-3xl'
        />
      </article>
    </section>
  );
};

export default OurBusinessUnits;
