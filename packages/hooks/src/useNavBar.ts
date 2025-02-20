import {useState} from 'react';

export const useNavBar = () => {
    const handleMenuItemClick = (path: string) => {
        window.location.href = path;
    };
    
    const [modalOpen, setModalOpen] = useState(false);

    const hahdleOpenNavBar = () =>{
        setModalOpen((prev) => !prev);
    }

    return{
        modalOpen,
        hahdleOpenNavBar,
        handleMenuItemClick,
    }
}