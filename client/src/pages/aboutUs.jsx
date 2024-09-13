import React from 'react';
import House from '../assets/House.jpg';
import House2 from '../assets/House2.jpeg';
import House3 from '../assets/House3.jpg';
import House4 from '../assets/House4.jpg';

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      
      {/* This is the Heading Section */}
      <h1 className="text-3xl font-bold text-center mb-12">
        Hamro Ghar Jaga 
      </h1>

      {/* This is the Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-4">
        <div className="md:w-1/2 md:pr-16">
          <div className="mb-8">
            {/* Here are the company values */}
            <h2 className="text-xl font-semibold mb-4">Company Values:</h2>
            <p className="mb-3">
              At our core, we embrace innovation by constantly exploring new ideas and technologies to stay ahead. Integrity guides us in being honest and transparent in all our dealings, while sustainability remains a key focus as we strive to build with the environment in mind. Our commitment to customer focus ensures that we prioritize our clients' needs and aim to exceed their expectations. Additionally, we believe in fostering a sense of community by creating vibrant and connected neighborhoods where everyone can thrive.
            </p>

            <h2 className="text-xl font-semibold mb-4">Morals:</h2>
            <p className="mb-3">
              Our company’s morals are founded on respect for everyone’s perspectives, ensuring that every voice is valued. We take accountability for our actions and promises, owning up to our responsibilities with transparency. Collaboration is at the heart of our operations, as we work together to achieve better results. Lastly, we emphasize empathy, striving to understand and support others in all our interactions.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-12">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={House}
              alt="House 1" 
              className="w-full h-auto object-cover rounded-md"
            />
            <img 
              src={House2}
              alt="House 2" 
              className="w-full h-auto object-cover rounded-md"
            />
            <img 
              src={House3}
              alt="House 3" 
              className="w-full h-auto object-cover rounded-md"
            />
            <img 
              src={House4}
              alt="House 4" 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
