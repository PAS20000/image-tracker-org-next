import * as ReactIFA from "react-icons/fa"
import * as React from 'react'
import { MdEmail } from "react-icons/md"
import Avatar from "../Avatar"
import Form from "../Form"
import Input from "../Form/Input"
import css from "./index.module.css"
import { useForm } from 'react-hook-form'

const ProfileCard = () => {
    const { handleSubmit, formState: { errors }, register } = useForm()
    const formRef = React.useRef<HTMLFormElement>(null)
    const ChangeAvatar = () => {
        const input = <input 
           
        />
    }

    const PlayAudio = async (path : string) => {
        const audio = new Audio(path)
        
        //await audio
    }

    React.useEffect(() => {
        PlayAudio('/notification.wav')
    }, [])

    const onSubmit = async (data : any) => {
        if (data.newPassword === data.verifyNewPassword) {
            const form = document.getElementById('form-profile-update') as HTMLFormElement
            form.reset()
        } else {
            alert('New passowrd and verify new password must be equals')
        }
        console.log(data)
    }

    return (
        <div className={css['container']}>
            <div className={css['card']} />
            <div className={css['avatar']}>
                <Avatar 
                    w={50}
                    h={50}
                    onClick={ChangeAvatar}
                />
            </div>
            <div className={css['options']}>
                <div className={css['header']}>
                    <ReactIFA.FaUserEdit />
                </div>
                <button>
                    <ReactIFA.FaUserCog />
                </button>
            </div>
            <Form 
                title='Update your profile' 
                onSubmit={handleSubmit(onSubmit)}
                submitText='Update'
                id='form-profile-update'
            >
                <Input
                    icon={ <ReactIFA.FaUserTag /> }
                    register={
                        {
                            ...register('name', {
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
                            })
                        }
                    }
                    label='Name'
                    placeholder='Your new name'
                    errorMessage={
                        errors.name && errors.name.message?.toString()
                    }
                />
                <Input 
                    icon={ <ReactIFA.FaUserAlt /> }
                    register={
                        {
                            ...register('nickname', {
                                max : {
                                    value: 24,
                                    message : 'Nickname must be a maximum of 24 characters'
                                },
                                min : {
                                    value : 3,
                                    message : 'Nickname must be a minimum of 3 characters'
                                },
                                required : 'Nickname is required' 
                            })
                        }
                    }
                    label='Nickname'
                    placeholder='Your new nickname'
                    errorMessage={
                        errors.nickname && errors.nickname.message?.toString()
                    }
                />
                <Input 
                    icon={ <MdEmail /> }
                    register={
                        {
                            ...register('email', {
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
                            })
                        }
                    }
                    label='Email'
                    placeholder='Your new email'
                    type='email'
                    errorMessage={
                        errors.email && errors.email.message?.toString()
                    }
                />
                <Input 
                    icon={ <ReactIFA.FaLock /> }
                    register={
                        {
                            ...register('currentPassword', {
                                max : {
                                    value: 24,
                                    message : 'Current password must be a maximum of 24 characters'
                                },
                                min : {
                                    value : 3,
                                    message : 'Current password must be a minimum of 3 characters'
                                },
                                required : 'Current password is required'
                            })
                        }
                    }
                    label='Current Password'
                    placeholder='Your current password'
                    type='password'
                    errorMessage={
                        errors.currentPassword && errors.currentPassword.message?.toString()
                    }
                />
                <Input 
                    icon={ <ReactIFA.FaLock /> }
                    register={
                        {
                            ...register('newPassword', {
                                max : {
                                    value: 24,
                                    message : 'New password must be a maximum of 24 characters'
                                },
                                min : {
                                    value : 3,
                                    message : 'New password must be a minimum of 3 characters'
                                }
                            })
                        }
                    }
                    label='New Password'
                    placeholder='Your new password'
                    type='password'
                    errorMessage={
                        errors.newPassword && errors.newPassword.message?.toString()
                    }
                />
                <Input 
                    icon={ <ReactIFA.FaLock /> }
                    register={
                        {
                            ...register('verifyNewPassword', {
                                max : {
                                    value: 24,
                                    message : 'Verify new password must be a maximum of 24 characters'
                                },
                                min : {
                                    value : 3,
                                    message : 'Verify new password must be a minimum of 3 characters'
                                }
                            })
                        }
                    }
                    label='Verify new Password'
                    placeholder='Verify new password'
                    type='password'
                    errorMessage={
                        errors.verifyNewPassword && errors.verifyNewPassword.message?.toString()
                    }
                />
            </Form>
        </div>
    )
}

export default ProfileCard