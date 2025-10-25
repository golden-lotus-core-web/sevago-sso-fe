import { axiosRequest } from '../../common/config/axios.config';
import type { ResList } from '../../common/interfaces/res-list.interface';
import type { User } from './user.entities';
import type { CreateUserDto, GetListUserDto, UpdateAccountDto, UpdateUserDto } from './user.interface';


export const createUser = async (body: CreateUserDto): Promise<User> => await axiosRequest.post('user', body);

export const updateUser = async (id: string, body: UpdateUserDto): Promise<User> =>
  await axiosRequest.put('user/' + id, body);

export const updateAccount = async (body: UpdateAccountDto): Promise<User> => await axiosRequest.patch('user', body);

export const deleteUser = async (id: string): Promise<void> => await axiosRequest.delete('user/' + id);

export const getListUser = async (body: GetListUserDto): Promise<ResList<User>> =>
  await axiosRequest.post('user/list', body);

export const getListUserRelations = async (body: GetListUserDto): Promise<ResList<User>> =>
  await axiosRequest.post('user/list/relations', body);

export const getUser = async (id: string): Promise<User> => await axiosRequest.get('user/' + id);

export const getUserInformationHistory = async (id: string): Promise<User> =>
  await axiosRequest.get('user/user-history/' + id);

export const getUserOrgUnitPositionById = async (userId: string): Promise<User> =>
  await axiosRequest.get('user/user-org-unit-position/' + userId);




export const getUserGenerateNextUserCode = async (): Promise<string> =>
  await axiosRequest.get('user/generate-next-user-code');



export const getUserNearestManagers = async (): Promise<User[]> =>
  await axiosRequest.get(`user/nearest-managers/current`);

export const getUserByOrgUnit = async (body: { orgUnitIds: string[] }): Promise<User[]> =>
  await axiosRequest.post(`/org-unit/users-by-org-units`, body);


