import * as React from 'react'
import { useForm } from "react-hook-form"
import { FcGoogle } from 'react-icons/fc'
import { MdEmail } from "react-icons/md"
import Form from "../../Form"
import Input from "../../Form/Input"
import Modal from "../../Modal"
import css from './index.module.css'
import NextImage from 'next/image'

const SignInModal = () => {
    const { handleSubmit, formState: { errors }, register } = useForm()
    const [isForgot, setIsForgot] = React.useState(false)

    const onSubmit = async (data : any) => {
        const form = document.getElementById('form-sign-in') as HTMLFormElement
        const url = new URL(window.location.href)
        const params = new URLSearchParams(url.search)
        const isExtension = !!params.get('extension')

        if (isExtension) {
            const token = 'token'
            window.open(
                `/signatures?token=${token}`, 
                'credential', 
                'location=1, toolbar=1, menubar=1, resizable=1, width=700, height=700'
            )
        } else {

        }
    }

    return (
        <Modal targetClose='signIn'>
           <div className={css['container']}>
                <div className={css['box']}>
                    <NextImage 
                        src='https://imagetracker.org/media/utils/banner-image-tracker.webp' 
                        alt='' 
                        width={700}
                        height={475}
                    />
                </div>
                <div className={css['form-and-oauth-container']}>
                    <Form 
                        onSubmit={handleSubmit(onSubmit)} 
                        title='Sign in'
                        submitText={isForgot ? 'Recovery' : 'Log in'}
                        id='form-sign-in'
                    >
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
                            placeholder='Your email'
                            label='Email'
                            errorMessage={
                                errors.email && errors.email?.message?.toString()
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
                            disabled={isForgot}
                        />
                        <p 
                            className={css['forgot-password']} 
                            onClick={() => setIsForgot(current => current ? false : true)}
                        >
                            {!isForgot ? 
                                'Forgot your password?' 
                                : 
                                'Back to sign in'
                            }
                        </p>
                    </Form>
                    <div className={css['oauth-container']}>
                        <FcGoogle className={css['google']} />
                    </div>
                </div>
           </div>
        </Modal>
    )
}

export default SignInModal