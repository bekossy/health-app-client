import './auth.css'

export const Register = () => {
    return <>
        <form className='auth'>
            <h1>Sign up</h1>
            <h3>Monitor your health from your home</h3>

            <label htmlFor="firstName">First Name</label>
            <input type="text" name='firstName' id='firstName'/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name='lastName' id='lastName'/>


            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <div className="gender">
                <p>Gender</p>

                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>

            </div>

            <label htmlFor="age">Age </label>
            <input type="number" name="age" id="age" />

            <label htmlFor="address">Address </label>
            <input type="text" name='address' id='address' />

            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username'/>

            <label htmlFor="password">Password </label>
            <input type="password" name='password' id='password' />

            <label htmlFor="ConPassword">Confirm Password </label>
            <input type="password" name='ConPassword' id='ConPassword' />



            <button type='submit' className='btn'>Sign up</button>

            <h4>Already have an account? <a href="#" className="create">Login here</a></h4>
        </form>
    </>;
}