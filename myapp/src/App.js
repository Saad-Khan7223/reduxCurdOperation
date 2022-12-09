import  Grid  from '@mui/material/Grid';
import Form from './components/Form';
import MyTable from './components/MyTable';
import store from './redux/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
    <Provider store={store}>
    <Grid container spacing={2}>
    <Grid item xs={12} md={4} lg={4}>
    <Form/>
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
    <MyTable/>
    </Grid>
    </Grid>
    </Provider>
    </div>
  );
}

export default App;
