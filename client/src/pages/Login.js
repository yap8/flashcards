import useAuthRedirect from '../hooks/useAuthRedirect';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import FormGroup from '../components/Form/FormGroup';
import FormInput from '../components/Form/FormInput';
import Form from '../components/Form/Form';
import Button from '../components/Button';

const Login = () => {
  useAuthRedirect();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.app);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    dispatch(login(email, password));

    setFormData({ ...formData, password: '' });
  };

  useEffect(() => {
    if (success) navigate('/collections');
  }, [navigate, success]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section>
      <div className="container mx-auto pt-6 md:pt-10">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              label
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              label
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="blue">Login</Button>
          </FormGroup>
        </Form>
      </div>
    </section>
  );
};

export default Login;
