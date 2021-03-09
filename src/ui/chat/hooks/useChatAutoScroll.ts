import React, { useLayoutEffect } from 'react';

export const useChatAutoScroll = (
	messages: unknown[],
	messagesBoxRef: React.MutableRefObject<HTMLDivElement | null>
) => {
	const scrollBoxToBottom = () => {
		if (!messagesBoxRef.current) return;

		const messagesBox = messagesBoxRef.current;
		const scrollHeight = messagesBox.scrollHeight;

		messagesBox.scrollTop = scrollHeight;
	};

	useLayoutEffect(() => {
		if (messagesBoxRef.current) {
			scrollBoxToBottom();
		}
		// eslint-disable-next-line
	}, [messagesBoxRef, messages]);
};
