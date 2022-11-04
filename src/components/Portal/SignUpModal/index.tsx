import { useForm } from "react-hook-form"
import { FaLock, FaUserAlt, FaUserTag } from "react-icons/fa"
import { FcGoogle } from 'react-icons/fc'
import { MdEmail } from "react-icons/md"
import Form from "../../Form"
import Input from "../../Form/Input"
import Modal from "../../Modal"
import css from './index.module.css'
import NextImage from 'next/image'

const SignUpModal = () => {
    const { handleSubmit, formState: { errors }, register } = useForm()

    const onSubmit = async (data : any) => {
        if(data.verifyPassword === data.password) {
            const form = document.getElementById('form-sign-up') as HTMLFormElement
            form.reset()
        } else {
            alert('Verify password and password must match')
        }   
    }

    return (
        <Modal targetClose='signUp'>
           <div className={css['container']}>
                <div className={css['box']}>
                    <NextImage 
                        src='https://imagetracker.org/media/utils/banner-image-tracker.webp' 
                        alt='' 
                        width={700}
                        height={475}
                    />
                </div>
                <div>
                    <Form 
                        onSubmit={handleSubmit(onSubmit)} 
                        title='Sign up'
                        submitText='Register'
                        id='form-sign-up'
                    >
                        <Input 
                            type='text'
                            icon={ <FaUserAlt /> }
                            register = {
                                {...register('name', {
                                    max : {
                                        value: 24,
                                        message : 'Name must be a maximum of 24 characters'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]/,
                                        message: 'The name is only composed of letters.'
                                    },
                                    min : {
                                        value : 3,
                                        message : 'Name must be a minimum of 3 characters'
                                    },
                                    required : 'Name is required'
                                })}
                            }
                            placeholder='Your name'
                            label='Name'
                            errorMessage={
                                errors.name && errors.name?.message?.toString()
                            }
                        />
                        <Input 
                            type='email'
                            icon={ <MdEmail /> }
                            register = {
                                {...register('email', {
                                    max : {
                                        value: 256,
                                        message : `Email must be a maximum of 256 characters`
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'The email is invalid'
                                    },
                                    min : {
                                        value : 3,
                                        message : 'Email must be a minimum of 3 characters'
                                    },
                                    required : 'Email is required'
                                })}
                            }
                            placeholder='Your best email'
                            label='Email'
                            errorMessage={
                                errors.email && errors.email?.message?.toString()
                            }
                        />
                        <Input 
                            type='text'
                            icon={ <FaUserTag /> }
                            register={
                                {...register('nickname', {
                                    max : {
                                        value: 24,
                                        message : 'Nickname must be a maximum of 24 characters'
                                    },
                                    min : {
                                        value : 3,
                                        message : 'Nickname must be a minimum of 3 characters'
                                    },
                                    required : 'Nickname is required'
                                })}
                            }
                            placeholder='Your nickname'
                            label='Nickname'
                            errorMessage={
                                errors.nickname && errors.nickname?.message?.toString()
                            }
                        />
                        <Input 
                            type='password'
                            register={
                                {...register('password', {
                                    max : {
                                        value: 24,
                                        message : 'Password must be a maximum of 24 characters'
                                    },
                                    min : {
                                        value : 3,
                                        message : 'Password must be a minimum of 3 characters'
                                    },
                                    required : 'Password is required'
                                })}
                            }
                            placeholder='Your password'
                            label='Password'
                            errorMessage={
                                errors.password && errors.password?.message?.toString()
                            }
                        />
                        <Input 
                            type='password'
                            register={
                                {...register('verifyPassword', {
                                    max : 24,
                                    min : 3,
                                    required : 'Verify password is required'
                                })}
                            }
                            placeholder='Verify your password'
                            label='Verify password'
                            errorMessage={
                                errors.verifyPassword && errors.verifyPassword?.message?.toString()
                            }
                        />
                    </Form>
                    <div className={css['oauth-container']}>
                        <FcGoogle className={css['google']} />
                    </div>
                </div>
           </div>
        </Modal>
    )
}

export default SignUpModal