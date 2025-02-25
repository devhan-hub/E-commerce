import { useState } from "react"
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col, FormGroup, Form } from 'reactstrap'
import { Link } from "react-router-dom"
import '../styles/login.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from '../firebase.config'
import { toast } from "react-toastify"
import { setDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      let imageUrl = null;

      if (file) {
        const data = new FormData();
        data.append("file", file)
        data.append("upload_preset", "profile")

        const res = await fetch("https://api.cloudinary.com/v1_1/dmcygulty/image/upload", {
          method: "post",
          body: data
        })

        const imageData = await res.json();

        if (imageData.secure_url) {
          imageUrl = imageData.secure_url;
        }
        else {
          toast.error("failed to upload profile picture")
        }
      }

      await updateProfile(user, {
        displayName: userName,
        photoURL: imageUrl || "",
      })

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: userName,
        email,
        photoURL: imageUrl || "",
      })


      toast.success("Account created successfully")
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error("something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg="12" className="text-center">
                <h5 className="fw-bold ">Loading....</h5></Col> :
                <Col lg='6' className="m-auto text-center">
                  <h3 className="fw-bold fs-4 mb-4">Signup</h3>
                  <Form className="auth_form" onSubmit={signup}>
                    <FormGroup className="form_group">
                      <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder=" User Name" />
                    </FormGroup>
                    <FormGroup className="form_group">
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className="form_group">
                      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup className="text-start">
                      <input onChange={(e) => setFile(e.target.files[0])} type="file" />
                    </FormGroup>
                    <button className="buy_btn auth_btn login_btn" type="submit">Create Account</button>
                    <p>Already have an account ? <Link to='/login'>Login</Link></p>
                  </Form>
                </Col>
            }

          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default Signup
