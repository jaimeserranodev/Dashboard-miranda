import { Contact } from '../types/features';

export const sortOrFilterContactsBy = (sortOrFilterBy: string, data: Contact[]) => {
  if (sortOrFilterBy === 'archived') {
    return data.filter(({ archived }) => archived);
  } else {
    data = data.filter(({ archived }) => !archived);
    if (sortOrFilterBy === 'newest') {
      return data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    } else if (sortOrFilterBy === 'oldest') {
      return data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
    }
    return data;
  }
};
