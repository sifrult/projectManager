import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Input from "./pages/Input";
import Nav from "./components/Nav";

const httpLink = createHttpLink({
    uri: '/graphql',
  });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

export default function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path='/' element={<><Nav /><Main /></>} />
                    <Route path='/Projects' element={<><Nav /><Projects /></>} />
                    <Route path='/Input' element={<><Nav /><Input /></>} />
                </Routes>
            </Router>


        </ApolloProvider>
    )
}
