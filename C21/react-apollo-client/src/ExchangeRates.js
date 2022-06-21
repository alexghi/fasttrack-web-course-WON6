import { useApolloClient, useQuery } from '@apollo/client'
import EXCHANGE_RATES from './data/queries/exchange_rates'
import { useCallback, useRef, useState } from 'react'
import { isModalOpen } from './data/myReactiveVars'
import { useReactiveVar } from '@apollo/client';


const ExchangeRates = ( ) => {
	const client = useApolloClient()
	const [ state, setState ] = useState({name: 'something'})

	const modalOpenState = useReactiveVar(isModalOpen)
	const {
		loading,
		error,
		data
	} = useQuery(EXCHANGE_RATES, {
		fetchPolicy: 'cache-and-network'
	})

	if( loading ) {
		return <div> loader goes here</div>
	}

	if(error) {
		return <div> there was an error </div>
	}

	console.log(client)

	return <>
		<button onClick={() => {isModalOpen(!modalOpenState)}}>
			toggle {modalOpenState ? 'off' : 'on'}
		</button>
		<div>
			{
				data?.rates?.map(({ rate, currency }, index) => {
					return <div key={index}> {Number.parseFloat(rate).toFixed(2)} {currency}</div>
				})
			}
		</div>
	</>
}

export default ExchangeRates;
