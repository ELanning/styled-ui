import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '../icons';
import * as Styled from './styled.jsx';

const ModalHeader = ({ title, subtitle, onClose }) => (
	<Styled.ModalHeader>
		<Styled.ModalTitleBar>
			<Styled.ModalTitle>{title}</Styled.ModalTitle>
			<Styled.ModalClose onClick={onClose}>
				<Close />
			</Styled.ModalClose>
		</Styled.ModalTitleBar>
		{subtitle && <Styled.ModalSubtitle>{subtitle}</Styled.ModalSubtitle>}
	</Styled.ModalHeader>
);
export default ModalHeader;

ModalHeader.propTypes = {
	title: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	subtitle: PropTypes.string,
};
