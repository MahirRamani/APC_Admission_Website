import React from 'react';
import { Card, Box, Typography, Avatar, Chip, SvgIcon, createTheme } from '@mui/material';

interface ProfileTileProps {
  id: number;
  imageUrl: string;
  name: string;
  year: number;
  degree: string;
  branch: string;
  villege_city: string;
  onClick: (id: number) => void;
}

const ProfileTile: React.FC<ProfileTileProps> = ({ id, imageUrl, name, year, degree, branch, villege_city, onClick }) => {
  return (
    <Card
      onClick={() => onClick(id)}
      sx={{
        backgroundColor: 'slate.100',
        width: '356px',
        border: '5px solid',
        borderColor: '#33eb91',
        borderRadius: 2,
        boxShadow: 5,
        padding: 0.5,
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        ml: .4,
        mb: 1,
        cursor: 'pointer',
      }}
    >
      <Box>
        <Avatar
          src={imageUrl}
          sx={{
            borderRadius: 2,
            width: 80,
            height: 80,
            objectFit: 'cover',
            border: '2px solid',
            borderColor: 'bg_dark_section',
          }}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
          {name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Chip
            label={`Year : ${year}`}
            sx={{
              borderRadius: 1,
              fontSize: '0.85rem',
              fontWeight: 'bold',
              backgroundColor: 'royalblue',
              color: 'white',
              boxShadow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          />
          <Chip
            label={degree}
            sx={{
              borderRadius: 1,
              fontSize: '0.85rem',
              fontWeight: 'bold',
              backgroundColor: 'royalblue',
              color: 'white',
              boxShadow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          />
          <Chip
            label={branch}
            sx={{
              borderRadius: 1,
              fontSize: '0.85rem',
              fontWeight: 'bold',
              backgroundColor: 'royalblue',
              color: 'white',
              boxShadow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Chip
            label={villege_city}
            sx={{
              borderRadius: 1,
              fontSize: '0.85rem',
              fontWeight: 'bold',
              backgroundColor: 'royalblue',
              color: 'white',
              boxShadow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileTile;


//
// import React from 'react';
// import { Card, Box, Typography, Avatar, Chip } from '@mui/material';

// interface ProfileTileProps {
//   id: number;
//   imageUrl: string;
//   name: string;
//   year: number;
//   degree: string;
//   branch: string;
//   villege_city: string;
//   onClick: (id: number) => void;
// }

// const ProfileTile: React.FC<ProfileTileProps> = ({ id, imageUrl, name, year, degree, branch, villege_city, onClick }) => {
//   return (
//     <Card
//       onClick={() => onClick(id)}
//       sx={{
//         backgroundColor: 'slate.100',
//         width: '356px',
//         border: '5px solid',
//         borderColor: '#33eb91',
//         borderRadius: 2,
//         boxShadow: 5,
//         padding: 0.5,
//         display: 'flex',
//         flexDirection: 'row',
//         gap: 1,
//         ml: 0.4,
//         mb: 1,
//         cursor: 'pointer',
//       }}
//     >
//       <Box>
//         <Avatar
//           src={imageUrl}
//           sx={{
//             borderRadius: 2,
//             width: 80,
//             height: 80,
//             objectFit: 'cover',
//             border: '2px solid',
//             borderColor: 'bg_dark_section',
//           }}
//         />
//       </Box>
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
//         <Typography sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
//           {name}
//         </Typography>
//         <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
//           <Chip
//             label={`Year : ${year}`}
//             sx={{
//               borderRadius: 1,
//               fontSize: '0.85rem',
//               fontWeight: 'bold',
//               backgroundColor: 'royalblue',
//               color: 'white',
//               boxShadow: 1,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           />
//           <Chip
//             label={degree}
//             sx={{
//               borderRadius: 1,
//               fontSize: '0.85rem',
//               fontWeight: 'bold',
//               backgroundColor: 'royalblue',
//               color: 'white',
//               boxShadow: 1,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           />
//           <Chip
//             label={branch}
//             sx={{
//               borderRadius: 1,
//               fontSize: '0.85rem',
//               fontWeight: 'bold',
//               backgroundColor: 'royalblue',
//               color: 'white',
//               boxShadow: 1,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           />
//         </Box>
//         <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
//           <Chip
//             label={villege_city}
//             sx={{
//               borderRadius: 1,
//               fontSize: '0.85rem',
//               fontWeight: 'bold',
//               backgroundColor: 'royalblue',
//               color: 'white',
//               boxShadow: 1,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           />
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// export default ProfileTile;
