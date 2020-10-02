import faker from 'faker';
import { IUserModelSnapshotIn } from 'mbx/models';
// import axios from 'axios';
// import { API_ROOT, TYPE } from './apiConfig';

// export async function getUsers(num: number) {
//   try {
//     const response = await axios.get(`${API_ROOT}${TYPE.USERS}/${num}`);

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

export function getMockUsers(num: number) {
  const tempArr: IUserModelSnapshotIn[] = [];
  for (let i = 0; i < num; i++) {
    tempArr.push({
      id: i,
      name: faker.name.findName(),
      dob: faker.date.past().toUTCString(),
      location: faker.address.city(),
      skills: ['TypeScript', 'React', 'Java'],
    });
  }
  return tempArr;
}
