import React, { useState } from 'react';
import AddMemoModal from '../component/AddMemoModal';

function AddMemo() {
    const [isOpen, setIsOpen] = useState(false);

    const onClickSelectFeed = () => {
        setIsOpen(true);
        console.log("add");
    };
    
    return (
        <div>
            <AddMemoModal isOpen={isOpen} onClickClose={() => setIsOpen(false)}></AddMemoModal>
        </div>
    );
}

export default AddMemo;