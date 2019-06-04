import React, { Component } from 'react'

import '../client/index.styl'

import Wallet from '../../components/wallet'
import Toolbar from '../../components/toolbar'

import Catalog from '../../components/dialogs/catalog'

import Actions from '../../components/actions'
import Chat from '../../components/chat/bubble'

import Moderation from '../../components/dialogs/moderation'

import Poll from '../../components/poll'

export default class Room extends Component {

	constructor(props: any) {
		super(props)
	}

	render() {
		return(
			<div className='client'>
				<Actions />

				<div className='room' id='game'></div>

				<Moderation />

				{/* <Catalog /> */}

				{/* <Poll question='Cyclone or Habbo' status={false} /> */}
				<Chat
					name='EZ-C'
					avatar='https://cdn.discordapp.com/attachments/557261127847772161/577965083905359892/Screenshot_from_2019-05-14_23-02-49.png'
					type='shout'
					style={2}
					message='This is an example message'
				/>
				<Wallet />
				<Toolbar isClient={true} />
			</div>
		)
	}
}