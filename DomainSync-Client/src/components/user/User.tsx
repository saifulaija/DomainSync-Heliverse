// // // import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
// // // import { DomainOption, TQueryParam } from "@/types/global.type";
// // // import { useState, useEffect } from "react";
// // // import UserCard from "./UserCard";
// // // import Loader from "../shared/Loader/Loader";
// // // import { useLocation } from "react-router-dom";
// // // import {
// // //   Select,
// // //   SelectContent,
// // //   SelectGroup,
// // //   SelectItem,
// // //   SelectLabel,
// // //   SelectTrigger,
// // //   SelectValue,
// // // } from "@/components/ui/select";

// // // const User = () => {
// // //   const [params, setParams] = useState<TQueryParam[]>([]);
// // //   const [page, setPage] = useState(1);
// // //   const [domain, setDomain] = useState("");
// // //   const [selectedSubCategory, setSelectedSubCategory] = useState("");
// // //   const [selectedSort, setSelectedSort] = useState("");

// // //   const location = useLocation();

// // //   useEffect(() => {
// // //     const searchParams = new URLSearchParams(location.search);
// // //     const searchQuery = searchParams.get("q");

// // //     if (searchQuery) {
// // //       setParams([{ name: "searchTerm", value: searchQuery }]);
// // //     }else if(domain){
// // //       setParams([{name:"domain",value:domain}])
// // //     }
// // //   }, [location.search]);

// // //   const { data, isLoading, isError } = useGetAllUsersQuery([
// // //     { name: "page", value: page },
// // //     ...params,
// // //   ]);

// // //   // Handle potential errors and loading state
// // //   if (isLoading) {
// // //     return <Loader />;
// // //   }

// // //   if (isError) {
// // //     return <div>Failed to load users. Please try again later.</div>;
// // //   }

// // //   if (!data?.data?.result?.length) {
// // //     return <div>No users found.</div>;
// // //   }

// // //   return (
// // //     <div className="w-full">
// // //       <div className="w-full md:w-auto">
// // //         <Select
// // //           onValueChange={(value) => setDomain(value as typeof domain)}
// // //           value={domain}
// // //         >
// // //           <SelectTrigger className="w-full">
// // //             <SelectValue placeholder="Filter by domain" />
// // //           </SelectTrigger>
// // //           <SelectContent>
// // //             <SelectGroup>
// // //               <SelectLabel>Domain</SelectLabel>
// // //               {DomainOption.map((domain) => (
// // //                 <SelectItem key={domain} value={domain}>
// // //                   {domain}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectGroup>
// // //           </SelectContent>
// // //         </Select>
// // //       </div>
// // //       {/* Add filters and other UI elements here */}
// // //       <div className="container mx-auto pt-10">
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {data.data.result.map((user) => (
// // //             <UserCard key={user._id} user={user} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default User;

// // import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
// // import { DomainOption, GenderOption, TQueryParam } from "@/types/global.type";
// // import { useState, useEffect } from "react";
// // import UserCard from "./UserCard";
// // import Loader from "../shared/Loader/Loader";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectGroup,
// //   SelectItem,
// //   SelectLabel,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Button } from "@/components/ui/button";

// // const User = () => {
// //   const [params, setParams] = useState<TQueryParam[]>([]);
// //   const [page, setPage] = useState(1);
// //   const [domain, setDomain] = useState("");
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Update params whenever search query or domain changes
// //   useEffect(() => {
// //     const searchParams = new URLSearchParams(location.search);
// //     const searchQuery = searchParams.get("q");
// //     const newParams = [];

// //     if (searchQuery) {
// //       newParams.push({ name: "searchTerm", value: searchQuery });
// //     }

// //     if (domain) {
// //       newParams.push({ name: "domain", value: domain });
// //     }

// //     setParams(newParams);
// //   }, [location.search, domain]);

// //   // Fetch users with the current params
// //   const { data, isLoading, isError } = useGetAllUsersQuery([
// //     { name: "page", value: page },
// //     ...params,
// //   ]);

// //   // Handle the domain change
// //   const handleDomainChange = (value) => {
// //     setDomain(value);
// //     // Update URL with the domain filter
// //     const searchParams = new URLSearchParams(location.search);
// //     if (value) {
// //       searchParams.set("domain", value);
// //     } else {
// //       searchParams.delete("domain");
// //     }
// //     navigate({ search: searchParams.toString() });
// //   };

// //   // Handle clearing all filters
// //   const handleClearFilters = () => {
// //     setDomain(""); // Reset domain filter
// //     setParams([]); // Reset params
// //     navigate("/"); // Reset URL to the base
// //   };

// //   // Handle potential errors and loading state
// //   if (isLoading) {
// //     return <Loader />;
// //   }

// //   if (isError) {
// //     return <div>Failed to load users. Please try again later.</div>;
// //   }

 

// //   return (
// //     <div className="w-full">
// //       <div className="md:flex items-center justify-between mb-4 w-[70%] mx-auto">
// //         <div className="w-full md:w-auto">
// //           <Select onValueChange={handleDomainChange} value={domain}>
// //             <SelectTrigger className="w-full">
// //               <SelectValue placeholder="Filter by domain" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectGroup>
// //                 <SelectLabel>Domain</SelectLabel>
// //                 {DomainOption.map((domain) => (
// //                   <SelectItem key={domain} value={domain}>
// //                     {domain}
// //                   </SelectItem>
// //                 ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         <div className="w-full md:w-auto">
// //           <Select onValueChange={handleDomainChange} value={domain}>
// //             <SelectTrigger className="w-full">
// //               <SelectValue placeholder="Filter by Gender" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectGroup>
// //                 <SelectLabel>Gender</SelectLabel>
// //                 {GenderOption.map((gender) => (
// //                   <SelectItem key={gender} value={gender}>
// //                     {gender}
// //                   </SelectItem>
// //                 ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //         <div className="w-full md:w-auto">
// //           <Select onValueChange={handleDomainChange} value={domain}>
// //             <SelectTrigger className="w-full">
// //               <SelectValue placeholder="Filter by Availability" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectGroup>
// //                 <SelectLabel>Domain</SelectLabel>
// //                 {DomainOption.map((domain) => (
// //                   <SelectItem key={domain} value={domain}>
// //                     {domain}
// //                   </SelectItem>
// //                 ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //         <Button onClick={handleClearFilters} variant="outline" className="ml-4">
// //           Clear Filters
// //         </Button>
// //       </div>

// //       {/* Add filters and other UI elements here */}
// //       <div className="container mx-auto pt-10">
// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {data.data.result.map((user) => (
// //             <UserCard key={user._id} user={user} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default User;


// import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
// import { DomainOption, GenderOption, TQueryParam } from "@/types/global.type";
// import { useState, useEffect } from "react";
// import UserCard from "./UserCard";
// import Loader from "../shared/Loader/Loader";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Button } from "@/components/ui/button";
// import NoUserFound from "../shared/NoUserFound/NoUserFound";

// const User = () => {
//   const [params, setParams] = useState<TQueryParam[]>([]);
//   const [page, setPage] = useState(1);
//   const [domain, setDomain] = useState<string>("");
//   const [gender, setGender] = useState<string>("");
//   const [availability, setAvailability] = useState<string>("");
//   const location = useLocation();
//   const navigate = useNavigate();


  

//   // Update params whenever search query or filters change
//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const searchQuery = searchParams.get("q");
//     const newParams: TQueryParam[] = [];

//     if (searchQuery) {
//       newParams.push({ name: "searchTerm", value: searchQuery });
//     }
//     if (domain) {
//       newParams.push({ name: "domain", value: domain });
//     }
//     if (gender) {
//       newParams.push({ name: "gender", value: gender });
//     }
//     if (availability) {
//       newParams.push({ name: "availability", value: availability });
//     }

//     setParams(newParams);
//   }, [location.search, domain, gender, availability]);

//   // Fetch users with the current params
//   const { data, isLoading, isError } = useGetAllUsersQuery([
//     { name: "page", value: page },
//     ...params,
//   ]);

//   const meta=data?.data.meta 
//   console.log(meta);
//   // Handle the domain change
//   const handleDomainChange = (value: string) => {
//     setDomain(value);
//     updateURLParams("domain", value);
//   };

//   // Handle the gender change
//   const handleGenderChange = (value: string) => {
//     setGender(value);
//     updateURLParams("gender", value);
//   };

//   // Handle the availability change
//   const handleAvailabilityChange = (value: string) => {
//     setAvailability(value);
//     updateURLParams("availability", value);
//   };

//   // Handle URL parameter updates
//   const updateURLParams = (key: string, value: string) => {
//     const searchParams = new URLSearchParams(location.search);
//     if (value) {
//       searchParams.set(key, value);
//     } else {
//       searchParams.delete(key);
//     }
//     navigate({ search: searchParams.toString() });
//   };

//   // Handle clearing all filters
//   const handleClearFilters = () => {
//     setDomain("");
//     setGender("");
//     setAvailability("");
//     setParams([]);
//     navigate("/");
//   };

//   // Handle potential errors and loading state
//   if (isLoading) {
//     return <Loader />;
//   }

//   if (isError) {
//     return <div>Failed to load users. Please try again later.</div>;
//   }

//   return (
//     <div className="w-full">
//       <div className=" space-y-2 sm:space-y-0 md:flex items-center justify-between mb-4 w-full sm:w-[70%] mx-auto pt-10">
//         <div className="w-full md:w-auto">
//           <Select onValueChange={handleDomainChange} value={domain}>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Filter by domain" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Domain</SelectLabel>
//                 {DomainOption.map((domain) => (
//                   <SelectItem key={domain} value={domain}>
//                     {domain}
//                   </SelectItem>
//                 ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="w-full md:w-auto">
//           <Select onValueChange={handleGenderChange} value={gender}>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Filter by Gender" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Gender</SelectLabel>
//                 {GenderOption.map((gender) => (
//                   <SelectItem key={gender} value={gender}>
//                     {gender}
//                   </SelectItem>
//                 ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="w-full md:w-auto">
//           <Select onValueChange={handleAvailabilityChange} value={availability}>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Filter by Availability" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Availability</SelectLabel>
//                 <SelectItem value="true">Available</SelectItem>
//                 <SelectItem value="false">Not Available</SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>

//         <Button
//           onClick={handleClearFilters}
//           variant="outline"
//           className=" w-full sm:w-[200px]"
//         >
//           Clear Filters
//         </Button>
//       </div>

//       {/* <div className="container mx-auto pt-10">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {
//             data?.data?.result?.length===0 ? <NoUserFound/>:
//           }
//           {data?.data?.result?.map((user) => (
//             <UserCard key={user._id} user={user} />
//           ))}
//         </div>
//       </div> */}
//       <div className="container mx-auto pt-10">
//         {data?.data?.result?.length === 0 ? (
//           <div className="flex justify-center items-center py-20">
//             <NoUserFound />
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {data?.data?.result?.map((user) => (
//               <UserCard key={user._id} user={user} />
//             ))}
//           </div>
//         )}

//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious href="#" />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">1</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#" isActive>
//                 2
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">3</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext href="#" />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default User;






import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { DomainOption, GenderOption, TQueryParam } from "@/types/global.type";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Loader from "../shared/Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import NoUserFound from "../shared/NoUserFound/NoUserFound";

const User = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [domain, setDomain] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  // Update params whenever search query or filters change
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("q");
    const newParams: TQueryParam[] = [];

    if (searchQuery) {
      newParams.push({ name: "searchTerm", value: searchQuery });
    }
    if (domain) {
      newParams.push({ name: "domain", value: domain });
    }
    if (gender) {
      newParams.push({ name: "gender", value: gender });
    }
    if (availability) {
      newParams.push({ name: "availability", value: availability });
    }

    setParams(newParams);
  }, [location.search, domain, gender, availability]);

  // Fetch users with the current params
  const { data, isLoading, isError } = useGetAllUsersQuery([
    { name: "page", value: page },
    ...params,
  ]);

  const meta = data?.data.meta;

  // Handle the domain change
  const handleDomainChange = (value: string) => {
    setDomain(value);
    updateURLParams("domain", value);
  };

  // Handle the gender change
  const handleGenderChange = (value: string) => {
    setGender(value);
    updateURLParams("gender", value);
  };

  // Handle the availability change
  const handleAvailabilityChange = (value: string) => {
    setAvailability(value);
    updateURLParams("availability", value);
  };

  // Handle URL parameter updates
  const updateURLParams = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    navigate({ search: searchParams.toString() });
  };

  // Handle clearing all filters
  const handleClearFilters = () => {
    setDomain("");
    setGender("");
    setAvailability("");
    setParams([]);
    navigate("/");
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Handle potential errors and loading state
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Failed to load users. Please try again later.</div>;
  }

  return (
    <div className="w-full">
      <div className="space-y-2 sm:space-y-0 md:flex items-center justify-between mb-4 w-full sm:w-[70%] mx-auto pt-10">
        <div className="w-full md:w-auto">
          <Select onValueChange={handleDomainChange} value={domain}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by domain" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Domain</SelectLabel>
                {DomainOption.map((domain) => (
                  <SelectItem key={domain} value={domain}>
                    {domain}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto">
          <Select onValueChange={handleGenderChange} value={gender}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Gender</SelectLabel>
                {GenderOption.map((gender) => (
                  <SelectItem key={gender} value={gender}>
                    {gender}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto">
          <Select onValueChange={handleAvailabilityChange} value={availability}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Availability</SelectLabel>
                <SelectItem value="true">Available</SelectItem>
                <SelectItem value="false">Not Available</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleClearFilters}
          variant="outline"
          className="w-full sm:w-[200px]"
        >
          Clear Filters
        </Button>
      </div>

      <div className="container mx-auto pt-10">
        {data?.data?.result?.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <NoUserFound />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.data?.result?.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
        )}

        {/* Dynamic Pagination */}
        {meta && meta.totalPage > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationPrevious
                href="#"
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
              />

              {/* Render page numbers dynamically */}
              {Array.from({ length: meta.totalPage }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={page === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationNext
                href="#"
                disabled={page === meta.totalPage}
                onClick={() => handlePageChange(page + 1)}
              />
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default User;

