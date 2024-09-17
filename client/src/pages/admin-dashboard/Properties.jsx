import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { properties } from "../../properties";

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
