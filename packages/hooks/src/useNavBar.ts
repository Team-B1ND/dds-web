import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavBar = () => {
    const navigate = useNavigate();
    const handleMenuItemClick = (path: string) => {
        navigate(path);
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