import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { signup, login } from 'actions/session-actions';

const SignupForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email_or_phone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const currentDate = new Date();
  const [birthDate, setBirthDate] = useState(currentDate.getDate());
  const [birthMonth, setBirthMonth] = useState(currentDate.getMonth());
  const [birthYear, setBirthYear] = useState(currentDate.getFullYear());
  const [birthday, setBirthday] = useState(''); 
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(
    () => { setBirthday(`${birthYear}/${birthMonth + 1}/${birthDate}`); },
    [birthYear, birthMonth, birthDate]
  );

  const dispatch = useDispatch();

  const submit = useCallback(
    () => {
      setSubmitted(true);
      dispatch(signup({ first_name, last_name, email_or_phone, password, birthday, gender }));
    },
    [first_name, last_name, email_or_phone, password, birthday, gender]
  );

  const demoLogin = useCallback(() => dispatch(login({
    email_or_phone: "photter@hogwarts.com", password: "hotterhotter"
  })), []);

  return (
    <section className="signup-form-container">
      <h1>Create a New Account</h1>
      <p>It’s free and always will be.</p>

      <form onSubmit={handleSubmit(submit)} className="signup-form">
        <input type="text" placeholder="First name" value={first_name}
          onChange={handleUpdate(setFirstName)}
        />
        <input type="text" placeholder="Last name"
          onChange={handleUpdate(setLastName)} value={last_name}
        />
        <input type="text" placeholder="Mobile number or email" onChange={handleUpdate(setEmailOrPhone)} value={email_or_phone} />
        <input type="password" placeholder="New password" onChange={handleUpdate(setPassword)} value={password} />

        <h3>Birthday</h3>
        <fieldset className="signup-form-birthday">
          <select onChange={handleUpdate(setBirthMonth)} value={birthMonth}>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((el, i) => <option key={i} value={i}>{el}</option>)}</select>
          <select onChange={handleUpdate(setBirthDate)} value={birthDate}>{_.range(1, 32).map(el => <option key={el} value={el}>{el}</option>)}</select>
          <select onChange={handleUpdate(setBirthYear)} value={birthYear}>{_.range(1905, currentDate.getFullYear()+1).map(el => <option key={el} value={el}>{el}</option> )}</select>
        </fieldset>

        <fieldset className="signup-form-gender">
          {['Male', 'Female', 'Other'].map(el => {
            const el_lc = el.toLowerCase();
            return (<React.Fragment key={el_lc}>
              <input onChange={handleUpdate(setGender)} type="radio" name="gender" id={`gender-${el_lc}`} value={el_lc} /><label htmlFor={`gender-${el_lc}`}>{el}</label>
            </React.Fragment>)
          })}
        </fieldset>

        <p className="signup-form-terms">By clicking Sign Up, you agree to our <Link to="/">Germs</Link>, <Link to="/">Pata Dolicy</Link> and <Link to="/">Crackers Policy</Link>. You may receive SMH Notifications from us and can opt out any time.</p>
        <input type="submit" value="Sign Up" />
        <input type="submit" value="Demo Login" onClick={handleSubmit(demoLogin)} />
      </form>
    </section>
  );
};

const handleUpdate = (setter, checker) => e => {
  if(checker) checker(e);
  setter(e.target.value);
};

const handleSubmit = submitter => e => {
  e.preventDefault();
  submitter();
};

export default SignupForm;
