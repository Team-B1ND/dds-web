import React from "react";
import { DownLoadArrow, File } from "@dds-web/assets";
import { DodamShape, DodamTypography } from "@dds-web/styles";
import styled, { CSSObject } from "styled-components";

export interface DodamNoticeFileProps {
    filename: string;
    onClick: ()=>void;
    customStyle?: CSSObject;
}

export const DodamNoticeFile = ({ filename, onClick, customStyle }:DodamNoticeFileProps) => {
    return (
        <NoticeFileBox style={customStyle}>
           <FileBox>
                <Icon>
                    <File $svgStyle={{position:"absolute", left:"5px",bottom:"0px"}} color="staticWhite" /> {/*어쩔수 없는 코드였습니다... */}
                </Icon>
                <span>
                    {filename}
                </span>
            </FileBox>
                <DownloadButton onClick={onClick}>
                    <DownLoadArrow color="labelNormal"/>
                </DownloadButton>

            
        </NoticeFileBox>
    );
};

const NoticeFileBox = styled.div`
    display: flex;
    min-width: 320px;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: ${({theme})=>theme.backgroundNormal};
    border: 1px solid ${({theme})=>theme.primaryNormal};
    ${DodamShape.ExtraSmall}
`;

const Icon = styled.div`
    position: relative;
    width: 28px;
    height: 28px;
    ${DodamShape.ExtraLarge};
    background-color: ${({ theme }) => theme.primaryNormal};
`;

const FileBox = styled.span`
    display: flex;
    align-items: center;
    gap:5px;
    span{
        ${DodamTypography.Label.Medium};
        color: ${({ theme }) => theme.labelNormal};
    }
    
`;

const DownloadButton = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px; 
`;
