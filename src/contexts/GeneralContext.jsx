import { createContext, useCallback, useContext, useState } from 'react';
const GeneralContext = createContext([]);
export const useGeneralContext = () => useContext(GeneralContext);

const GeneralContextProvider = ({ children }) => {
	const [groovinProfile, setGroovinProfile] = useState({});
	const [renderControl, setRenderControl] = useState(false);
	const [renderControl2, setRenderControl2] = useState(false);
	const [whichEndpoint, setWhichEndpoint] = useState('');

	// LOADER
	const [loading, setLoading] = useState(true);

	const toggleRender = useCallback(() => {
		setRenderControl((render) => !render);
	}, []);

	const toggleRender2 = useCallback(() => {
		setRenderControl2((render) => !render);
	}, []);

	// LOADER
	const finishLoader = useCallback(() => {
		console.log('finishLoader');
		setLoading(false);
	}, []);

	return (
		<GeneralContext.Provider
			value={{
				groovinProfile,
				setGroovinProfile,
				renderControl,
				setRenderControl,
				toggleRender,
				renderControl2,
				setRenderControl2,
				toggleRender2,
				whichEndpoint,
				setWhichEndpoint,
				finishLoader,
				loading,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
};

export default GeneralContextProvider;
