// import MyDialog from "@/components/shadcn/MyDialog";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { IUser } from "@/types/user";

// import React from "react";

// import { Separator } from "@radix-ui/react-select";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "../ui/tooltip";
// import { Delete, Edit } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const UserCard = ({ user }: { user: IUser }) => {
//     const navigate = useNavigate();

//   //   const handleDetails = (e: any) => {
//   //     // Prevent click event propagation to avoid conflicts with the modal
//   //     e.stopPropagation();
//   //     router.push(`product/details/${product?._id}`);
//   //   };

//   const handleQuickView = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     // Prevent click event propagation to avoid triggering the onClick for the card
//     e.stopPropagation();
//   };

//   const handleDetails = () => {
//     navigate(`user/details/${user?._id}`);
//   };

//   return (
//     <Card
//         onClick={handleDetails}
//       className={cn(
//         "hover:shadow-lg  hover:shadow-slate-400 max-w-md w-full hover:cursor-pointer transition duration-300 "
//       )}
//     >
//       <CardHeader className="p-0 items-center">
//         <div className="relative w-full" style={{ height: "200px" }}>
//           <img
//             src={user.avatar || "/placeholder-image.jpg"}
//             alt="Blog Image"
//             className="rounded-t-md object-cover"
//           />
//         </div>
//       </CardHeader>

//       <Separator />
//       <CardContent className="p-2">
//         <p className="text-lg font-semibold">{user.name}</p>
//       </CardContent>
//       <CardFooter className={cn("flex justify-between items-center p-2 mb-0")}>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <span onClick={(e) => e.stopPropagation()}>
//                 <Delete className="w-5 h-5" />
//               </span>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Share</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to="/product/update"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Edit className="w-5 h-5" />
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Share</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
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
import MyDialog from "@/components/shadcn/MyDialog";
import { cn } from "@/lib/utils";
import { IUser } from "@/types/user";
import { Separator } from "@radix-ui/react-select";

const UserCard = ({ user }: { user: IUser }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`user/details/${user?._id}`);
  };

  const handleAddToTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Add your logic to add the user to the team here
    console.log(`User ${user.name} added to the team.`);
  };

  return (
    <Card
      onClick={handleDetails}
      className={cn(
        "hover:shadow-lg hover:shadow-slate-400 max-w-md w-full hover:cursor-pointer transition duration-300"
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
          onClick={handleAddToTeam}
          variant="outline"
          className="flex items-center space-x-1"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add to Team</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;

