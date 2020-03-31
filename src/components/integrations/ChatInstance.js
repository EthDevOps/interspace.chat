import React, { useState, useEffect, useContext } from 'react';
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext';

function ChatInstance() {
	const [discordRoom, setDiscordRoom] = useState('692409996083855501');
	const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
	const space = currentFloatingSpaces;

	useEffect(() => {
		if (space.indexOf('parallel-society') > -1) {
			setDiscordRoom('692423172020240444');
		} else if (space.indexOf('cryptoeconomics-lab') > -1) {
			setDiscordRoom('692423341046366208');
		} else if (space.indexOf('metatrack') > -1) {
			setDiscordRoom('692423431777681488');
		} else if (space.indexOf('proof your attendance') > -1) {
			setDiscordRoom('693135339249991701');
		} else {
			setDiscordRoom('692409996083855501');
		}
		return console.log(discordRoom);
	}, [space, discordRoom]);

	return (
		<iframe
			src={`https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=${discordRoom}&theme=DiscordDark`}
			width='100%'
			height='100%'
			frameBorder='0'
			title='discord chat'></iframe>
	);
}

export default ChatInstance;
