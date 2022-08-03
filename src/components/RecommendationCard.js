import React from 'react'
import {Modal, Button} from "react-bootstrap";

function RecommendationCard(props) {
    const {name, company, designation, message} = props.recommendation;
    let cutMessage = "";
    if(message.length > 25){
        cutMessage = message.slice(0,25) + "...";
    }else
    {
        cutMessage = message;
    }
    const [shouldShow, setShouldShow] = React.useState(false);
    const showModal = () =>
        setShouldShow(true);
    const hideModal = () => setShouldShow(false);
    return (
        <div className="col-12 col-md-4">
            <a onClick={showModal}>
                <div className="card shadow h-100 bg-light">
                    <div className="card-body">
                        <h4 className="card-text">{cutMessage}</h4>
                        <p className="card-text text-secondary mb-0">{name}</p>
                        <p className="card-text text-secondary">{designation} at {company}</p>
                    </div>
                </div>
            </a>
            <Modal show={shouldShow} onHide={hideModal}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="text-center">
                <h4 className="card-text">{message}</h4>
                <p className="card-text text-secondary mb-0">{name}</p>
                <p className="card-text text-secondary">
                    {designation} at {company}
                </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={hideModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RecommendationCard;
