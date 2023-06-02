import axios from "axios";
import { UserPostRequest, UserPostResponse } from "../../models/user/user";

export const CreateUser = async (
  data: UserPostRequest
): Promise<UserPostResponse> => {
  const res = await axios.post(`user`, {
    data: data,
  });

  return res.data;
};
