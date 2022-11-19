export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};

// export const extractLink = (link: string, type: 'COLLECTION' | 'PAGE') => {
//   const reg = /g/d;
//   reg.
//   switch (type) {
//     case 'COLLECTION':
//       return `${process.env['NEXT_PUBLIC_SITE_URL']}collection/${}`
//     case 'PAGE':
//       break;
//   }
// };
