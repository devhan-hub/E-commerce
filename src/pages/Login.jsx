import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col, FormGroup, Form } from 'reactstrap'
import { Link } from "react-router-dom"
import '../styles/login.css'
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.config"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCrediantionl = await signInWithEmailAndPassword(auth, email, password)
      const user = userCrediantionl.user
      setLoading(false)
      toast.success("successfully logged in")
      navigate('/checkout')
    } catch (error) {
      toast.error(error.message)
    }

  }

  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            { loading ? <Col lg="12" className="text-center">
              <h5 className="fw-bold ">Loading....</h5></Col>: <Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-4">Login</h3>
              <Form className="auth_form" onSubmit={signIn}>
                <FormGroup className="form_group">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </FormGroup>
                <button className="buy_btn auth_btn login_btn" type="submit">Login</button>
                <p>Dont't have an account <Link to='/signup'>Create account</Link></p>
              </Form>
            </Col>
             }
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default Login
