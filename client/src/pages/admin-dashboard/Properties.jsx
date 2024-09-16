import { MdDelete } from "react-icons/md";
import house1 from '../../assets/house1.png';
import house2 from '../../assets/house2.png';
import house3 from '../../assets/house3.png';
import house4 from '../../assets/house4.png';
import house5 from '../../assets/house5.png';
import house6 from '../../assets/house6.png';
import { Link, useNavigate } from "react-router-dom";

const properties = [
   {
      id: 1,
      title: 'Cedar Creek Ranch',
      address: 'Austin, United States',
      price: 265000,
      desc: 'Ranch-style house with wide open spaces.',
      bedroom: 4,
      kitchen: 1,
      bathroom: 2,
      area: 2800,
      image: house1
   },
   {
      id: 2,
      title: 'Greenwood Estate',
      address: 'New York, United States',
      price: 310000,
      desc: 'A beautiful house located in a quiet neighborhood.',
      bedroom: 5,
      kitchen: 2,
      bathroom: 3,
      area: 3200,
      image: house2
   },
   {
      id: 3,
      title: 'Sunset Villa',
      address: 'Miami, United States',
      price: 450000,
      desc: 'A luxurious villa with stunning ocean views.',
      bedroom: 6,
      kitchen: 1,
      bathroom: 4,
      area: 4000,
      image: house3
   },
   {
      id: 4,
      title: 'Palm Tree Cottage',
      address: 'Orlando, United States',
      price: 198000,
      desc: 'Cozy cottage in the heart of the city.',
      bedroom: 3,
      kitchen: 1,
      bathroom: 2,
      area: 1500,
      image: house4
   },
   {
      id: 5,
      title: 'Maplewood Manor',
      address: 'Chicago, United States',
      price: 290000,
      desc: 'Spacious manor with a large garden.',
      bedroom: 4,
      kitchen: 2,
      bathroom: 3,
      area: 3000,
      image: house5
   },
   {
      id: 6,
      title: 'Blue Ridge Villa',
      address: 'San Francisco, United States',
      price: 380000,
      desc: 'Modern villa with panoramic city views.',
      bedroom: 5,
      kitchen: 2,
      bathroom: 3,
      area: 3500,
      image: house6
   },
];

export default function Component() {
   const navigate = useNavigate();

   const handleEdit = (id) => {
      navigate(`/admin/edit-property?id=${id}`);
   };

   return (
      <main className='w-full bg-base'>
         <div className='bg-white p-4 rounded-2xl shadow-md shadow-shadow'>
            <h1 className="text-3xl font-bold mb-4 flex justify-center gap-2">
               Property
               <span className="text-primary">Table</span>
            </h1>

            <Link to="/admin/add-property">
               <button className="px-4 py-2 font-medium text-white bg-primary rounded-2xl hover:bg-primary/80">
                  Add Property
               </button>
            </Link>

            <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-primary">
                  <thead>
                     <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-primary">
                     {properties.map((p) => (
                        <tr key={p.id}>
                           <td className="p-4 whitespace-nowrap">
                              <img className="h-14 w-14 rounded-full" src={p.image} alt={p.title} />
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              {p.title}
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              ${p.price}
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                 onClick={() => handleEdit(p.id)}
                                 className="px-4 py-2 font-medium text-white bg-primary rounded-2xl hover:bg-primary/80"
                              >
                                 Edit
                              </button>
                              <button className="ml-2 px-4 py-2 font-medium text-white bg-danger rounded-2xl hover:bg-danger/80">
                                 <MdDelete className="inline-block" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
}
