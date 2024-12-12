import { Link, Typography } from '@mui/material';

export default function AuthPageCopyright  ()  {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link href="/" style={{ color: 'inherit' }}>
           Tiny-Toes
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      );
}

