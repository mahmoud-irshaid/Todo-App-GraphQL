import { ThemeProvider, createTheme } from '@mui/material/styles';
import { client } from './GraphQL/client';
import { ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import { Container } from '@mui/material';
import AppContainer from './components/AppContainer';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Header />
        <Container maxWidth="md" sx={{ boxShadow: 3, my: 10, p: 2, borderRadius: 5 }}>
          <AppContainer />
        </Container>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
