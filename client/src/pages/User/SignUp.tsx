import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import OAuth from '../../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'
import { UserData } from '../../types'
import './user.css'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      
      const user = userCredential.user
      
      if ( auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      } else {
        toast.error('Something went wrong with registration')
      }

      const userData: UserData = { name: formData.name, email: formData.email}
      userData.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), userData)

      navigate('/');
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome!</p>
        </header>

        <form role='form' onSubmit={onSubmit}>
          <input
            type='text'
            className='nameInput'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt='show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signUpBar'>
            <p className='signUpText'>Sign Up</p>
            <button className='signUpButton'>
              <ArrowRightIcon fill='#000000' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <OAuth />

        <Link to='/sign-in' className='forgotPasswordLink'>
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp