import React from "react";
import styled from "styled-components";
import {BUS_SEAT} from "./BusSeat";
import {DodamColor} from "@dds-web/foundations";

interface BusProps {
	clickEvent: (bus: number) => void;
	selectedSeat: number[];
	width?: number;
}

export const DodamBus = ({clickEvent, selectedSeat, width = 285}: BusProps) => {
	return (
		<BusButtonContainer width={width}>
			<BusBackground viewBox="0 0 285 608" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_17924_5038)">
					<Wheel x="272" y="452" width="12" height="108" rx="6"/>
					<Wheel y="452" width="12" height="108" rx="6"/>
					<Wheel y="48" width="12" height="108" rx="6"/>
					<Wheel x="273" y="48" width="12" height="108" rx="6"/>
					<CarBody x="6" width="272" height="608" rx="18"/>
					<In d="M233.233 44H231.201V32.6875H233.233V44ZM244.799 44H242.986L237.627 36.2656H237.533V44H235.502V32.6875H237.346L242.674 40.4219H242.783V32.6875H244.799V44Z" fill="#747678"/>
					{BUS_SEAT.map((seat) => {
						const selected = selectedSeat.includes(seat.id);
						return (
							<g key={seat.id} style={{cursor:"pointer"}} onClick={() => clickEvent(seat.id)}>
								<SeatBackground selected={selected} x={seat.x} y={seat.y} width="44" height="44" rx="4" fill="white" />
								<SeatNumber selected={selected} d={seat.numberPath} fill="#747678" />
							</g>
						);
					})}
				</g>
				<defs>
					<clipPath id="clip0_17924_5038">
						<rect width="100%" height="100%" fill="none"/>
					</clipPath>
				</defs>
			</BusBackground>
		</BusButtonContainer>
	)
}


const BusButtonContainer = styled.div<{width: number}>`
	width: ${({ width }) => width}px;
`

const BusBackground = styled.svg`
	width: 100%;
	height: 100%;
	fill: none;
`

const Wheel = styled.rect`
	fill: ${({ theme }) => theme.lineNormal};
`

const CarBody = styled.rect`
	fill: ${({ theme }) => theme.backgroundNeutral};
`

const In = styled.path`
	fill: ${({ theme }) => theme.labelAssistive};
`

interface SeatProps {
	selected?: boolean;
}

const SeatBackground = styled.rect<SeatProps>`
    fill: ${({ theme, selected = false }) => selected ? theme.primaryNormal : theme.backgroundNormal};}
`

const SeatNumber = styled.path<SeatProps>`
	fill: ${({ theme, selected = false }) => selected ? DodamColor.netural99 : theme.labelAssistive};}
`