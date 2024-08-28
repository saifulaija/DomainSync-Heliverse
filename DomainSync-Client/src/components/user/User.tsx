import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { TQueryParam } from "@/types/global.type";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Loader from "../shared/Loader/Loader";
import { useLocation } from "react-router-dom";

const User = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("q");

    if (searchQuery) {
      setParams([{ name: "searchTerm", value: searchQuery }]);
    }
  }, [location.search]);

  const { data, isLoading, isError } = useGetAllUsersQuery([
    { name: "page", value: page },
    ...params,
  ]);

  // Handle potential errors and loading state
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Failed to load users. Please try again later.</div>;
  }

  if (!data?.data?.result?.length) {
    return <div>No users found.</div>;
  }

  return (
    <div className="w-full">
      {/* Add filters and other UI elements here */}
      <div className="container mx-auto pt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.data.result.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
