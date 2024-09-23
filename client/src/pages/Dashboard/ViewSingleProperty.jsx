import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductByIdAsync,
  singleProperty,
  selectPropertyError,
  selectPropertyStatus,
} from "../../redux/property/propertySlices";
import { Undo2 } from "lucide-react";

const ViewSingleProperty = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByIdAsync(id));
  }, [dispatch, id]);

  const property = useSelector(singleProperty);
  const error = useSelector(selectPropertyError);
  const isLoading = useSelector(selectPropertyStatus);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="max-w-7xl mx-auto flex justify-center items-center mt-3">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-2xl">
        <img
          alt={property?.name}
          src={property?.imageUrl}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <h3 className="mt-0.5 text-lg text-gray-900">{property?.name}</h3>

          <p className="mt-2 text-lg text-gray-800 font-semibold">
            ${property?.price.toFixed(2)}
          </p>

          <p className="mt-2 text-gray-600">
            <strong>Address:</strong> {property?.address}
          </p>

          <p className="mt-2 text-gray-600">
            <strong>Created By:</strong> {property?.createdby?.name}
          </p>

          <p className="mt-2 text-gray-600">
            <strong>Created At:</strong>{" "}
            {new Date(property?.createdAt).toLocaleDateString()}
          </p>

          <div
            className="mt-2 text-sm text-gray-500 border-b"
            dangerouslySetInnerHTML={{ __html: property?.description }}
          ></div>
          <Link to="/view-property" className="text-sm text-blue-700  gap-2 fold-md flex ">Return to Property <Undo2 /></Link>
        </div>
      </article>
    </section>
  );
};

export default ViewSingleProperty;
