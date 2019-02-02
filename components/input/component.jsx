import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resetStyles } from '../utils';
import { thickness, fonts, inputColors, colors } from '../shared-styles';

/** Standard text input with no validation */
export class Input extends PureComponent {
	static small = 'small';
	static medium = 'medium';
	static large = 'large';

	static Small = props => <Input {...props} size={Input.small} />;
	static Medium = props => <Input {...props} size={Input.medium} />;
	static Large = props => <Input {...props} size={Input.large} />;

	static propTypes = {
		value: PropTypes.string,
		placeholder: PropTypes.string,
		type: PropTypes.string,
		onChange: PropTypes.func,
		onClick: PropTypes.func,
		onKeyPress: PropTypes.func,
		size: PropTypes.oneOf([Input.small, Input.medium, Input.large]),
		styleOverrides: PropTypes.shape({
			width: PropTypes.string,
		}),
	};

	static defaultProps = {
		styleOverrides: {},
		size: Input.medium,
	};

	handleChange = event => {
		const { onChange } = this.props;
		if (onChange) {
			onChange(event);
		}
	};

	handleClick = event => {
		const { onClick } = this.props;
		if (onClick) {
			onClick(event);
		}
	};

	handleKeyPress = event => {
		const { onKeyPress } = this.props;
		if (onKeyPress) {
			onKeyPress(event);
		}
	};

	render() {
		const { value, placeholder, type, onClick, size, ...inputProps } = this.props;

		const ScaledInput = inputSize[size];
		const extraProps = inputProps || {};

		return (
			<ScaledInput
				type={type || 'text'}
				value={value || ''}
				placeholder={placeholder || ''}
				onClick={this.handleClick}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
				{...extraProps}
			/>
		);
	}
}

const StyledInput = styled.input`
	${resetStyles};

	border-radius: 3px;
	border: 1px solid ${inputColors.inputBorderColor};

	padding: ${thickness.eight};
	height: 32px;
	${fonts.ui16};

	width: ${props => props.styleOverrides.width};

	&:focus {
		border-color: ${inputColors.inputFocusedBorderColor};
		box-shadow: 0 0 0 2px ${inputColors.inputFocusedShadowColor};
		outline: 0;
	}

	&:disabled {
		opacity: 0.5;
	}

	&:read-only {
		background: ${colors.gray22};
	}
`;

export const inputSize = {
	small: styled(StyledInput)`
		padding: ${thickness.eight};
		height: 32px;
		${fonts.ui16};
	`,
	medium: styled(StyledInput)`
		padding: 12px;
		height: 40px;
		${fonts.ui16};
	`,
	large: styled(StyledInput)`
		padding: 16px;
		height: 46px;
		${fonts.ui16};
	`,
};
