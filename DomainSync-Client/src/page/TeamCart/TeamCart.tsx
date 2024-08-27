// import { useAppSelector, useAppDispatch } from "@/redux/hokks";
// import { removeFromCart } from "@/redux/features/user/userSlice";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Trash } from "lucide-react";
// import TeamCartForm from "@/form/TeamCartForm";

// const TeamCart = () => {
//   const user = useAppSelector((state) => state.user);
//   const dispatch = useAppDispatch();

//   const handleDelete = (id: string) => {
//     dispatch(removeFromCart({ _id: id }));
//   };

//   return (
//     <div className="w-full">
//       <div className="container mx-auto">
//         <div className="md:flex items-center gap-3">
//           <div className="w-full">
//             <Table>
//               <TableCaption>Your selected team members</TableCaption>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-1/4">Name</TableHead>
//                   <TableHead className="w-1/4">Email</TableHead>
//                   <TableHead className="w-1/4">Domain</TableHead>
//                   <TableHead className="w-1/4 text-center">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {user.cartItems.map((member) => (
//                   <TableRow key={member._id}>
//                     <TableCell className="font-medium">{member.name}</TableCell>
//                     <TableCell>{member.email}</TableCell>
//                     <TableCell>{member.domain}</TableCell>
//                     <TableCell className="text-center">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => handleDelete(member._id)}
//                         className="flex items-center justify-center space-x-1"
//                       >
//                         <Trash className="w-4 h-4" />
//                         <span>Delete</span>
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           <div className="w-full">
//            <TeamCartForm/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCart;




import { removeFromCart, clearCart } from "@/redux/features/user/userSlice";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash, XCircle } from "lucide-react";
import TeamCartForm from "@/form/TeamCartForm";
import { useAppDispatch, useAppSelector } from "@/redux/hokks";

const TeamCart = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeFromCart({ _id: id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full p-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-2/3">
            <Table className="bg-white shadow-md rounded-lg">
              <TableCaption>Your selected team members</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Name</TableHead>
                  <TableHead className="w-1/4">Email</TableHead>
                  <TableHead className="w-1/4">Domain</TableHead>
                  <TableHead className="w-1/4 text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.cartItems.length > 0 ? (
                  user.cartItems.map((member) => (
                    <TableRow key={member._id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        {member.name}
                      </TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.domain}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(member._id)}
                          className="flex items-center justify-center space-x-1"
                        >
                          <Trash className="w-4 h-4" />
                          <span>Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-4">
                      No members in the cart
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            {user.cartItems.length > 0 && (
              <div className="flex justify-end mt-4">
                <Button
                  variant="destructive"
                  onClick={handleClearCart}
                  className="flex items-center space-x-2"
                >
                  <XCircle className="w-5 h-5" />
                  <span>Clear Cart</span>
                </Button>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/3">
            <TeamCartForm users={user.cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCart;

