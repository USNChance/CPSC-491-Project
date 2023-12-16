import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ResponsiveAppBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div style={{ paddingRight: "1%" }}>
                        <img alt='cookify' src='https://cdn.discordapp.com/attachments/367494904449990657/1181079136421290014/Logo.png?ex=657fc0a9&is=656d4ba9&hm=e5d0b195d499674b79d6f4e550869861222894fb003c3c2f974ac3cff6c733bc&' height={60} width={60} />
                    </div>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Cookify
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;