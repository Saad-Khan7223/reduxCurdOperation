import { Container,Input,Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector,useDispatch } from 'react-redux'
import { setUserSlice } from '../redux/slice/user'
import { addUserSlice, editUserSlice } from '../redux/slice/users'

export default function Form() {

  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const handleChange=(prop)=>(e)=>{
    dispatch(setUserSlice({...user,[prop]:e.target.value}))
  }
  const handleSubmit=()=>{
    user.id === 0 ?dispatch(addUserSlice({...user,id:nanoid(8)})):dispatch(editUserSlice(user))
    dispatch(setUserSlice({
      id:0,
      name:"",
      passowrd:"",
      email:""
    }) )
  }
    return (
    <div>
    <Container>   
     <Container>
   <Input  value={user.id} fullWidth disabled/>
   </Container>
   <Container>
   <Input onChange={handleChange('name')} placeholder='Enter Your Name' value={user.name} fullWidth/>
   </Container>
   <Container>
   <Input onChange={handleChange('email')} placeholder='Enter Your Email' value={user.email} fullWidth/>
   </Container>
   <Container>
   <Input onChange={handleChange('password')} placeholder='Enter Your password' value={user.password} fullWidth/>
   </Container>
   <Container>
    <Button  onClick={()=>handleSubmit()} variant="outlined" fullWidth>Submit</Button>
    </Container>
    </Container>

    </div>
  )
}
