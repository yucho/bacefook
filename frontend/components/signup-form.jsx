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
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthday, setBirthday] = useState(''); 
  
  const [firstNameClass, setFirstNameClass] = useState('');
  const [lastNameClass, setLastNameClass] = useState('');
  const [emailOrPhoneClass, setEmailOrPhoneClass] = useState('');
  const [passwordClass, setPasswordClass] = useState('');
  const [birthMonthClass, setBirthMonthClass] = useState('');
  const [birthDateClass, setBirthDateClass] = useState('');
  const [birthYearClass, setBirthYearClass] = useState('');
  const [genderClass, setGenderClass] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailOrPhoneError, setEmailOrPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [birthMonthError, setBirthMonthError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [birthYearError, setBirthYearError] = useState('');
  const [genderError, setGenderError] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    () => {
      setBirthday(`${birthYear}/${birthMonth && parseInt(birthMonth) + 1}/${birthDate}`)
    },
    [birthYear, birthMonth, birthDate]
  );

  useEffect(
    () => {
      first_name ? setFirstNameError('') : setFirstNameError('What\'s your name?');
      last_name ? setLastNameError('') : setLastNameError('What\'s your name?');
      email_or_phone ? setEmailOrPhoneError('') : setEmailOrPhoneError(
        'You\'ll use this when you log in and if you ever need to reset your password.'
      );
      password && password.length >= 6 ? setPasswordError('') : setPasswordError(
        'Enter a combination of at least 6 characters.'
      );
      birthMonth ? setBirthMonthError('') : setBirthMonthError('What month were you born?');
      birthDate ? setBirthDateError('') : setBirthDateError('What day were you born?');
      birthYear ? setBirthYearError('') : setBirthYearError('What year were you born?');
      gender ? setGenderError('') : setGenderError('What\'s your gender?');
    },
    [first_name, last_name, email_or_phone, password, birthMonth, birthDate, birthYear, gender]
  )

  useEffect(
    () => {
      if(submitted) {
        firstNameError ? setFirstNameClass('signup-form-error-text') : setFirstNameClass('')
        lastNameError ? setLastNameClass('signup-form-error-text') : setLastNameClass('')
        emailOrPhoneError ? setEmailOrPhoneClass('signup-form-error-text') : setEmailOrPhoneClass('')
        passwordError ? setPasswordClass('signup-form-error-text') : setPasswordClass('')
        birthMonthError ? setBirthMonthClass('signup-form-error-select') : setBirthMonthClass('')
        birthDateError ? setBirthDateClass('signup-form-error-select') : setBirthDateClass('')
        birthYearError ? setBirthYearClass('signup-form-error-select') : setBirthYearClass('')
        genderError ? setGenderClass('signup-form-error-radio-label') : setGenderClass('')
      }
    },
    [
      submitted, firstNameError, lastNameError, emailOrPhoneError,
      passwordError, birthMonthError, birthDateError, birthYearError, genderError
    ]
  );

  const submit = useCallback(() => {
    setSubmitted(true);
    if( !firstNameError && !lastNameError && !emailOrPhoneError && !passwordError &&
      !birthMonthError && !birthDateError && !birthYearError && !genderError ){
      dispatch(signup({ first_name, last_name, email_or_phone, password, birthday, gender }));
    }
  });

  const demoLogin = useCallback(() => dispatch(login({
    email_or_phone: 'photter@hogwarts.com', password: 'hotterhotter'
  })), []);

  return (
    <section className="signup-form-container">
      <h1>Create a New Account</h1>
      <p>It’s free and always will be.</p>

      <form onSubmit={handleSubmit(submit)} className="signup-form">
        <input type="text" placeholder="First name" value={first_name}
          onChange={handleUpdate(setFirstName)} className={firstNameClass}
        />
        <input type="text" placeholder="Last name" value={last_name}
          onChange={handleUpdate(setLastName)} className={lastNameClass}
        />
        <input type="text" placeholder="Mobile number or email" value={email_or_phone}
          onChange={handleUpdate(setEmailOrPhone)} className={emailOrPhoneClass}
        />
        <input type="password" placeholder="New password" value={password}
          onChange={handleUpdate(setPassword)} className={passwordClass}
        />

        <h3>Birthday</h3>
        <fieldset className="signup-form-birthday">
          <select onChange={handleUpdate(setBirthMonth)} value={birthMonth} className={birthMonthClass}>
            {
              [<option key={-1} value="">Month</option>]
                .concat(months.map((el, i) => <option key={i} value={i}>{el}</option>))
            }
          </select>
          <select onChange={handleUpdate(setBirthDate)} value={birthDate} className={birthDateClass}>
            {
              [<option key={-1} value="">Day</option>]
                .concat(_.range(1, 32).map(el => <option key={el} value={el}>{el}</option>))
            }
          </select>
          <select onChange={handleUpdate(setBirthYear)} value={birthYear} className={birthYearClass}>
            {
              [<option key={-1} value="">Year</option>]
                .concat(_.range(currentDate.getFullYear(), 1904)
                .map(el => <option key={el} value={el}>{el}</option>))
            }
          </select>
        </fieldset>

        <fieldset className="signup-form-gender">
          {['Male', 'Female', 'Other'].map(el => {
            const el_lc = el.toLowerCase();
            return (<span key={el_lc} className={genderClass}>
              <input onChange={handleUpdate(setGender)} type="radio" name="gender" id={`gender-${el_lc}`} value={el_lc} /><label htmlFor={`gender-${el_lc}`}>{el}</label>
            </span>)
          })}
        </fieldset>

        <p className="signup-form-terms">By clicking Sign Up, you agree to our <Link to="/">Germs</Link>, <Link to="/">Pata Dolicy</Link> and <Link to="/">Crackers Policy</Link>. You may receive SMH Notifications from us and can opt out any time.</p>
        <input type="submit" value="Sign Up" />
        <input type="submit" value="Demo Login" onClick={handleSubmit(demoLogin)} />
      </form>
    </section>
  );
};

const handleUpdate = setter => e => {
  setter(e.target.value);
};

const handleSubmit = submitter => e => {
  e.preventDefault();
  submitter();
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default SignupForm;
