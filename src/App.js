import React from 'react';
import { ThemeProvider, Box, Text } from '@sparkpost/matchbox';
import Table from './Table';
import config from '__PROPSPOTTER_CONFIG__';

function App() {
  return (
    <ThemeProvider>
      <Box
        fontFamily="-apple-system,BlinkMacSystemFont,'San Francisco','Segoe UI',Roboto,Helvetica,sans-serif"
        maxWidth="1080px"
        my="800"
        mx="auto"
      >
        <Text as="h1" fontSize="300" lineHeight="300" mb="800">
          {config.title || 'Propspotter'}
        </Text>

        <Table config={config} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
