import { register } from '../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthRedirect from '../hooks/useAuthRedirect';
import FormGroup from '../components/Form/FormGroup';
import FormInput from '../components/Form/FormInput';
import Form from '../components/Form/Form';
import Button from '../components/Button';

const Register = () => {
  useAuthRedirect();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.app);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    dispatch(register(name, email, password));

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
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
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
            <Button color="blue">Register</Button>
          </FormGroup>
        </Form>
      </div>
    </section>
  );
};

export default Register;
