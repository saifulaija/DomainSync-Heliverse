import { useGetAllUsersQuery } from "@/redux/features/user/userApi";


const User = () => {
    const {data,isLoading}=useGetAllUsersQuery({})

    console.log(data);
    
  return <div>User</div>;
};

export default User;
