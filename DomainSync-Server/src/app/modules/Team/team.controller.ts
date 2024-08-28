import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { teamServices } from './team.service';


const createTeam = catchAsync(async (req, res) => {
  const result = await teamServices.createTeam(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team is created successfully',
    data: result,
  });
});
const getSingleTeam = catchAsync(async (req, res) => {
  const{id}=req.params
  const result = await teamServices.getSingleTeam(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team are fetched successfully',
    data: result,
  });
});


export const teamControllers = {
    createTeam,
    getSingleTeam,


};
