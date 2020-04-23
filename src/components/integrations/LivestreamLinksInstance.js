import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	color: ${(props) => props.theme.body};
	background: ${(props) => props.theme.background};
`

const Descriptor = styled.p`
	font-size: 18px;
	font-weight: 300;
	margin: 3rem;
	text-align: center;
	color: ${(props) => props.theme.body};
`

const ParagraphStyled = styled.div`
	display: grid;
	grid-template-rows: repeat(3, auto);
	max-width: 80%;
	line-height: 1.5rem;
	margin: 0 auto;
	padding: 1rem;
	justify-items: space-between;
	grid-gap: 1rem;
`

const LinkStyled = styled.a`
	color: ${(props) => props.theme.highlight};
	font-size: 18px;
	font-weight: 600;
	img {
		padding-right: 1rem;
	}
`

function LivestreamLinksInstance() {
	return (
		<Container>
			<Descriptor>
				Direct links to the youtube streams of our conference tracks:
			</Descriptor>
			<ParagraphStyled>
				<LinkStyled
					href="https://youtu.be/ddYimGGyxA0"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={require("../../img/ethturin-elements/main-room.png")}
						width="auto"
						height="18px"
						alt=""
					/>
					stop covid 19
				</LinkStyled>
				<LinkStyled
					href="https://youtu.be/wppHTKiFR_Q"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={require("../../img/ethturin-elements/mentor-ring.png")}
						width="auto"
						height="18px"
						alt=""
					/>
					mentor ring
				</LinkStyled>
				<LinkStyled
					href="https://youtu.be/GpwK_lHYv3Q"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={require("../../img/ethturin-elements/conference-room.png")}
						width="auto"
						height="18px"
						alt=""
					/>
					sdg workshop
				</LinkStyled>
			</ParagraphStyled>
		</Container>
	)
}

export default LivestreamLinksInstance
