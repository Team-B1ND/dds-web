import React from "react";
import { ChevronRight } from "@dds-web/assets";
import { DodamModal, DodamToggleButton } from "../..";
import { NAV_BAR_MODAL_DAUTH, NAV_BAR_MODAL_ITEM} from "../constant";
import * as S from "./style";
import { ETheme } from "../navBar";


interface modalProps{
    hahdleOpen: ()=>void;
    modalOpen: boolean;
    currentTheme:ETheme;
    handleTheme:()=>void;
    logout:()=>void;
}

const NavModal = ({
    hahdleOpen,
    modalOpen,
    currentTheme,
    handleTheme,
    logout,
}:modalProps) => {

    const linkMovement = (link:string)=>{
        window.open(link)
    }
    const { DARK } = ETheme;
    
    return(
        <DodamModal isOpen={modalOpen} close={hahdleOpen} customStyle={{display:"block"}} background={false}>
            <S.Popover onClick={(e) => e.stopPropagation()} >
                <S.ModalBox onClick={()=>linkMovement(NAV_BAR_MODAL_DAUTH.link)}>
                    <p>Dauth</p>
                    <ChevronRight size={16} color="labelAssistive"/>
                </S.ModalBox>
                <S.ModalBox style={{borderBottom:`1px`}}>
                    <p>{currentTheme === DARK ? "라이트" : "다크"}</p>
                    <DodamToggleButton isAtv={currentTheme==DARK} onClick={handleTheme}/>
                </S.ModalBox>
                {NAV_BAR_MODAL_ITEM.map((item)=>(
                    <S.ModalBox 
                    key={item.name} 
                    onClick={() => {
                        if (item.link === "logout") {
                          logout(); 
                        } else {
                          linkMovement(item.link); 
                        }
                      }}
                      >
                        <span>{item.name}</span>
                      <ChevronRight size={16} color="labelAssistive"/>
                    </S.ModalBox>
                ))}
            </S.Popover>
        </DodamModal>
    )
}
export default NavModal;