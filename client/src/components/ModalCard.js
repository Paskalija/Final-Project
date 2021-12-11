import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import MydModalWithGrid from "./MyModal";


function ModalCard() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="success" onClick={() => setModalShow(true)}>
                <i className="bi bi-chevron-double-right"></i>
            </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default ModalCard;