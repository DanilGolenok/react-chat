export type Action<Type, Payload = undefined> = Payload extends undefined
	? { type: Type }
	: {
			type: Type;
			payload: Payload;
	  };
