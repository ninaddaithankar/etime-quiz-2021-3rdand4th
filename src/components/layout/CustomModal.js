import { Modal } from 'react-bootstrap';
import React from 'react';

const CustomModal = props => {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			style={{ border: 'none' }}
		>
			<Modal.Header style={{ border: 'none', background: 'black' }}>
				<Modal.Title
					id='contained-modal-title-vcenter'
					style={{
						color: 'white',
						textAlign: 'center',
						fontFamily: 'Montserrat',
						fontWeight: 'bold'
					}}
				>
					{props.titletext}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body
				className='bg-lessdark'
				style={{
					color: 'white',
					fontSize: '2.5rem',
					fontFamily: 'Cardo',
					padding: '4rem '
				}}
			>
				{props.bodytext}
			</Modal.Body>
			{/* <Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer> */}
		</Modal>
	);
};

export default CustomModal;
