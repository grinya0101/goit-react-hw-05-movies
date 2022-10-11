import { ThreeDots } from 'react-loader-spinner';
import { Box } from '../Box';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#e50000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
}
