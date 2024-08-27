import MyDialog from "@/components/shadcn/MyDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IUser } from "@/types/user";

import React from "react";

import UserDetails from "./DetailsUser";

const UserCard = ({ user }: { user: IUser }) => {
//   const navigate = useNavigate();

//   const handleDetails = (e: any) => {
//     // Prevent click event propagation to avoid conflicts with the modal
//     e.stopPropagation();
//     router.push(`product/details/${product?._id}`);
//   };

  const handleQuickView = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Prevent click event propagation to avoid triggering the onClick for the card
    e.stopPropagation();
  };



  return (
    <Card
 
      className={cn(
        "group mx-auto w-72 transform overflow-hidden hover:cursor-pointer rounded-lg shadow-md"
      )}
    >
      <div className="relative w-full overflow-hidden group">
        <img
          className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          src={user.avatar}
          alt="Product Image"
          width={400}
          height={300}
        />

        <div className="absolute hidden top-20 inset-0 group-hover:flex items-center justify-center transition-all duration-500 ease-in-out">
          <div onClick={handleQuickView}>
            <MyDialog
              triggerButton={<Button className="ml-4">Quick View</Button>}
            >
              <UserDetails user={user} />
            </MyDialog>
          </div>
        </div>
      </div>

      <div className="p-2">
        <h2 className="text-md font-medium text-gray-700 capitalize">
          {user.name}
        </h2>
      </div>
    </Card>
  );
};

export default UserCard;
