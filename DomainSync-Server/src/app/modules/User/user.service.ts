/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';

import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import { userSearchableFields } from './user.constant';
import QueryBuilder from '../../builder/QueryBuilder';

const createUserIntoDB = async (payload: TUser) => {
  const isExistUser = await User.findOne({ email: payload.email });

  if (isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email already exists');
  }

  const result = await User.create(payload);
  return result;
};

const getAllUser = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find({ isDeleted: false }), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;
  const meta = await userQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleUser=async(id:string)=>{
  console.log(id);

  const result=await User.findById(id)
  return result
  
}
const deleteUser=async(id:string)=>{

    const isExistUser = await User.findOne({ _id: id });
    

    if (!isExistUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'This user not found !');
    }
  console.log(id);

  const result=await User.findByIdAndDelete(id)
  return result
  
}

export const UserServices = {
  createUserIntoDB,
  getAllUser,
  getSingleUser,
  deleteUser
 
};
