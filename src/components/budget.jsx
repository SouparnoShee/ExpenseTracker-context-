import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Budget = () => {

    const [show, setShow] = useState(false);
    const [adding, setAdding] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = (event) => {
        event.preventDefault();

        const budgets = parseInt(adding);

        dispatch({
            type: 'ADD_BUDGET',
            payload: budgets,
        })


    }

    const { budget, dispatch } = useContext(AppContext)
    return (
        <div className='budget'>
            <span>Budget : <h2>{budget}</h2></span>
            <div>
                <button className="budget-button" onClick={handleShow}>
                    Add
                </button>

                <Modal show={show} onHide={handleClose} backdrop="static"
                    keyboard={false} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <input type="number" placeholder='Add amount' value={adding} onChange={(e) => setAdding(e.target.value)} className='budget-input' />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Budget
