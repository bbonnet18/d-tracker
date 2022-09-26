import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function InputForm() {

    const selectedValue = "R";
    const [validated, setValidated] = useState(false);
    const [show,setShow] = useState(false);
    const toggleShow = (event)=>{

        setShow(!show);
    }
    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
            console.log('checked the form - still invalid');
            setShow(true);
        }
        console.log('submitted')
        setShow(true);
        console.log('show: ',show);
        event.preventDefault();
        event.stopPropagation();
 
        setValidated(true);
    }

    return (
        <>
        
        <Toast show={show} delay={3000} onClose={toggleShow} autohide>
                <Toast.Header>
                    <strong className="me-auto">Success!</strong>
                </Toast.Header>
                <Toast.Body>
                    You did it!
                </Toast.Body>
           </Toast>
        
           <Toast show={show} onClose={toggleShow}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
        <Form validated={validated} onSubmit={handleSubmit}>
            <h3>Candidate Info</h3>
            <Form.Group className="mb-3" controlId="candidateInfo" >
                <Form.Label>First name:</Form.Label>
                <Form.Control placeholder="enter candidate first name" required>
                </Form.Control>
                <Form.Label>Last name:</Form.Label>
                <Form.Control placeholder="enter candidate last name" required/>
                <Form.Text className="text-muted">
                   Include candidate info above
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="candidateParty">
                <Form.Label>Political Party</Form.Label>
                <Form.Select defaultValue={selectedValue} aria-label="Default select example">
                    <option value="D">D</option>
                    <option value="R">R</option>
                    <option value="Other">Other</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Text>Check off anti-democratic behavior exhibited by candidate</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                <Form.Check type="checkbox" label="Check me out" />
                <Form.Check type="checkbox" label="Check me out" />
                <Form.Check type="checkbox" label="Check me out" />
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group>
                <p>Include a brief explanation of the anti-democratic behavior.</p>
                <Form.Label>Justification:</Form.Label>
                <Form.Control as="textarea" rows={3} minLength={125} placeholder="provide a basic description of what the candidate said or did that is anti-democratic" required>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group>
                <p>Include at least 1 link to a reputable source, documenting the anti-democratic behavior.</p>
                <Form.Label>Provide justification links:</Form.Label>
                <Form.Control type="url" required>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form.Group>
           

        </Form>
        </>
    );
}

export default InputForm;
