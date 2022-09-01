import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

interface AddMemoProps {
    isOpen: boolean;
    onClickClose: () => void;
}

function AddMemoModal({isOpen, onClickClose}: AddMemoProps) {
    return (
        <Modal isOpen={isOpen} style={{
            content: {
                margin: "auto",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "space-between",
                alignItems: "stretch"
            }
        }}>
            <div>
                <h1>메모 추가하기<span onClick={onClickClose}><FontAwesomeIcon icon={faXmarkSquare}/></span></h1>
            </div>
            <button onClick={onClickClose}>Modal Open</button>
        </Modal>
    );
}

export default AddMemoModal;