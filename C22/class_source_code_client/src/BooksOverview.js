import { useApolloClient, useQuery } from '@apollo/client'
import BOOKS from './data/queries/books'
import { useCallback, useRef, useState } from 'react'
import { isModalOpen } from './data/myReactiveVars'
import { useReactiveVar } from '@apollo/client';


const BooksOverview = ( ) => {

	const modalOpenState = useReactiveVar(isModalOpen)
	const { loading, error, data } = useQuery(BOOKS, {
		fetchPolicy: 'cache-and-network'
	})

	if( loading ) {
		return <div> loading books right now </div>
	}

	if(error) {
		return <div> there was an error </div>
	}

	return <>
		<button onClick={() => {isModalOpen(!modalOpenState)}}>
			toggle {modalOpenState ? 'off' : 'on'}
		</button>
		<div>
			{
				data?.books?.map(({ title, author }, index) => {
					return <div key={index}> 
						{title} - {author}
					</div>
				})
			}
		</div>
	</>
}

export default BooksOverview;
