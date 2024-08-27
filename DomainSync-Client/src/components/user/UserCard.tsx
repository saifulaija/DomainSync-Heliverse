// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Delete, Edit, UserPlus } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "../ui/tooltip";

// import { cn } from "@/lib/utils";
// import { IUser } from "@/types/user";
// import { Separator } from "@radix-ui/react-select";
// import { useAppDispatch } from "@/redux/hokks";

// const UserCard = ({ user }: { user: IUser }) => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   const handleDetails = () => {
//     navigate(`user/details/${user?._id}`);
//   };

//   const handleAddToTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation();
//     // Add your logic to add the user to the team here
//     console.log(`User ${user.name} added to the team.`);
//   };

//   return (
//     <Card
//       onClick={handleDetails}
//       className={cn(
//         "max-w-md w-full hover:cursor-pointer transition duration-300 hover:border hover:border-primary/50"
//       )}
//     >
//       <CardHeader className="p-0 items-center">
//         <div className="relative w-full" style={{ height: "200px" }}>
//           <img
//             src={user.avatar || "/placeholder-image.jpg"}
//             alt={`${user.name} Avatar`}
//             className="rounded-t-md object-cover w-full h-full"
//           />
//         </div>
//       </CardHeader>

//       <Separator />
//       <CardContent className="p-2">
//         <p className="text-lg font-semibold">{user.name}</p>
//       </CardContent>
//       <CardFooter className="flex justify-between items-center p-2 mb-0">
//         <div className="flex space-x-2">
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <span onClick={(e) => e.stopPropagation()}>
//                   <Delete className="w-5 h-5 text-red-500" />
//                 </span>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Delete User</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Link
//                   to={`/user/update/${user._id}`}
//                   className="text-blue-600 hover:text-blue-800"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <Edit className="w-5 h-5" />
//                 </Link>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Edit User</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </div>
//         <Button
//           onClick={handleAddToTeam}
//           variant="outline"
//           className="flex items-center space-x-1"
//         >
//           <UserPlus className="w-4 h-4" />
//           <span>Add to Team</span>
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default UserCard;




import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Delete, Edit, UserPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { cn } from "@/lib/utils";
import { IUser } from "@/types/user";
import { Separator } from "@radix-ui/react-select";
import { useAppDispatch } from "@/redux/hokks"; // Import the custom hook for dispatch
import { addToCart } from "@/redux/features/user/userSlice";



const UserCard = ({ user }: { user: IUser }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDetails = () => {
    navigate(`user/details/${user?._id}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Dispatch the action to add the user to the cart
    dispatch(addToCart(user));
    console.log(`User ${user.name} added to the cart.`);
  };

  return (
    <Card
      onClick={handleDetails}
      className={cn(
        "max-w-md w-full hover:cursor-pointer transition duration-300 hover:border hover:border-primary/50"
      )}
    >
      <CardHeader className="p-0 items-center">
        <div className="relative w-full" style={{ height: "200px" }}>
          <img
            src={user.avatar || "/placeholder-image.jpg"}
            alt={`${user.name} Avatar`}
            className="rounded-t-md object-cover w-full h-full"
          />
        </div>
      </CardHeader>

      <Separator />
      <CardContent className="p-2">
        <p className="text-lg font-semibold">{user.name}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-2 mb-0">
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span onClick={(e) => e.stopPropagation()}>
                  <Delete className="w-5 h-5 text-red-500" />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete User</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={`/user/update/${user._id}`}
                  className="text-blue-600 hover:text-blue-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Edit className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit User</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="flex items-center space-x-1"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;

