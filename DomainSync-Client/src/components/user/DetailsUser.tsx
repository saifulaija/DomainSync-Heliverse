import { Card } from "@/components/ui/card";
import { IUser } from "@/types/user";

const UserDetails = ({ user }: { user: IUser }) => {
  return (
    <Card className="p-4 shadow-lg rounded-lg">
      <div className="relative w-full overflow-hidden group rounded-lg">
        <img
          className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          src={user.avatar}
          alt="Product Image"
          width={500}
          height={300}
        />

        {/* Product Tag */}
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          New Arrival
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium text-gray-900 capitalize">
          {user.name}
        </h2>
        <h2 className="text-lg font-medium text-gray-900 capitalize">
          {user.email}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{user.gender}</p>

        <div className="flex items-center mt-3">
          <p className="ml-2 text-base font-medium text-gray-500 line-through dark:text-gray-300">
            ${user.domain}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default UserDetails;
